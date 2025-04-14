@echo off
setlocal

:: AWS Configuration
set AWS_REGION=us-east-1
set AWS_ACCOUNT_ID=033573372733
set STREAMLIT_ECR_REPO=streamlit-blog-app
set NGINX_ECR_REPO=nginx-proxy
set ECS_CLUSTER_NAME=dev-cluster
set ECS_SERVICE_NAME=streamlit-service
set ECS_TASK_FAMILY=streamlit-task

:: Build both Docker images
echo "Building Docker images..."
docker build -t %STREAMLIT_ECR_REPO% .
docker build -t %NGINX_ECR_REPO% ./reverse_proxy

:: Authenticate Docker to ECR
echo "Authenticating Docker to ECR..."
aws ecr get-login-password --region %AWS_REGION% | docker login --username AWS --password-stdin %AWS_ACCOUNT_ID%.dkr.ecr.%AWS_REGION%.amazonaws.com

:: Create ECR repositories if they don't exist
echo "Creating ECR repositories..."
aws ecr create-repository --repository-name %STREAMLIT_ECR_REPO% --region %AWS_REGION% 2>nul
aws ecr create-repository --repository-name %NGINX_ECR_REPO% --region %AWS_REGION% 2>nul

:: Tag and push both images to ECR
echo "Tagging and pushing images to ECR..."
docker tag %STREAMLIT_ECR_REPO%:latest %AWS_ACCOUNT_ID%.dkr.ecr.%AWS_REGION%.amazonaws.com/%STREAMLIT_ECR_REPO%:latest
docker push %AWS_ACCOUNT_ID%.dkr.ecr.%AWS_REGION%.amazonaws.com/%STREAMLIT_ECR_REPO%:latest

docker tag %NGINX_ECR_REPO%:latest %AWS_ACCOUNT_ID%.dkr.ecr.%AWS_REGION%.amazonaws.com/%NGINX_ECR_REPO%:latest
docker push %AWS_ACCOUNT_ID%.dkr.ecr.%AWS_REGION%.amazonaws.com/%NGINX_ECR_REPO%:latest

:: Update ECS task definition with both containers
echo "Updating ECS task definition..."
aws ecs register-task-definition --family %ECS_TASK_FAMILY% --container-definitions "[{\"name\": \"%STREAMLIT_ECR_REPO%\",\"image\": \"%AWS_ACCOUNT_ID%.dkr.ecr.%AWS_REGION%.amazonaws.com/%STREAMLIT_ECR_REPO%:latest\",\"cpu\": 256,\"memory\": 512,\"essential\": true},{\"name\": \"%NGINX_ECR_REPO%\",\"image\": \"%AWS_ACCOUNT_ID%.dkr.ecr.%AWS_REGION%.amazonaws.com/%NGINX_ECR_REPO%:latest\",\"cpu\": 256,\"memory\": 512,\"portMappings\": [{\"containerPort\": 80,\"hostPort\": 80,\"protocol\": \"tcp\"}],\"essential\": true}]" --requires-compatibilities "FARGATE" --network-mode "awsvpc" --cpu "512" --memory "1024" --execution-role-arn "arn:aws:iam::%AWS_ACCOUNT_ID%:role/ecsTaskExecutionRole"

:: Update ECS service with public IP enabled
echo "Updating ECS service..."
aws ecs update-service --cluster %ECS_CLUSTER_NAME% --service %ECS_SERVICE_NAME% --task-definition %ECS_TASK_FAMILY% --network-configuration "awsvpcConfiguration={subnets=[subnet-16adeb37],assignPublicIp=ENABLED,securityGroups=[sg-00aa3afb1d01dc2cf]}" --force-new-deployment

endlocal
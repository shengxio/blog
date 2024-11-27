@echo off
setlocal

:: AWS Configuration
set AWS_REGION=your-region
set AWS_ACCOUNT_ID=your-account-id
set ECR_REPOSITORY_NAME=streamlit-blog-app
set ECS_CLUSTER_NAME=streamlit-cluster
set ECS_SERVICE_NAME=streamlit-service
set ECS_TASK_FAMILY=streamlit-task

:: Build the Docker image
docker build -t %ECR_REPOSITORY_NAME% .

:: Authenticate Docker to ECR
aws ecr get-login-password --region %AWS_REGION% | docker login --username AWS --password-stdin %AWS_ACCOUNT_ID%.dkr.ecr.%AWS_REGION%.amazonaws.com

:: Create ECR repository if it doesn't exist
aws ecr create-repository --repository-name %ECR_REPOSITORY_NAME% --region %AWS_REGION% 2>nul

:: Tag and push the image to ECR
docker tag %ECR_REPOSITORY_NAME%:latest %AWS_ACCOUNT_ID%.dkr.ecr.%AWS_REGION%.amazonaws.com/%ECR_REPOSITORY_NAME%:latest
docker push %AWS_ACCOUNT_ID%.dkr.ecr.%AWS_REGION%.amazonaws.com/%ECR_REPOSITORY_NAME%:latest

:: Update ECS task definition
aws ecs register-task-definition --family %ECS_TASK_FAMILY% --container-definitions "[{\"name\": \"%ECR_REPOSITORY_NAME%\",\"image\": \"%AWS_ACCOUNT_ID%.dkr.ecr.%AWS_REGION%.amazonaws.com/%ECR_REPOSITORY_NAME%:latest\",\"cpu\": 256,\"memory\": 512,\"portMappings\": [{\"containerPort\": 8501,\"hostPort\": 8501,\"protocol\": \"tcp\"}],\"essential\": true}]" --requires-compatibilities "FARGATE" --network-mode "awsvpc" --cpu "256" --memory "512" --execution-role-arn "arn:aws:iam::%AWS_ACCOUNT_ID%:role/ecsTaskExecutionRole"

:: Update ECS service
aws ecs update-service --cluster %ECS_CLUSTER_NAME% --service %ECS_SERVICE_NAME% --task-definition %ECS_TASK_FAMILY% --force-new-deployment

endlocal 
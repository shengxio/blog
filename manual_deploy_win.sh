$Bucket = "YOUR-BUCKET-NAME"
$DistributionId = "YOUR-DISTRIBUTION-ID"

npm run build
if ($LASTEXITCODE -ne 0) { throw "Build failed" }

aws s3 sync .\out "s3://$Bucket"
if ($LASTEXITCODE -ne 0) { throw "Upload failed" }

aws cloudfront create-invalidation `
  --distribution-id $DistributionId `
  --paths "/*"
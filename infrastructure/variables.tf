variable "cohere_api_key" {
    description = "Cohere API Key for the Lambda function"
    type        = string
    sensitive   = true  # Ensures the value doesn't show up in logs
}

variable "s3_bucket_name" {
    description = "S3 Bucket ID for storing stories"
    type = string
}
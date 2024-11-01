data "aws_caller_identity" "current" {}
data "aws_region" "current" {}

locals {
    account_id = data.aws_caller_identity.current.account_id
}

# Story Generation IAM (backend lambda)
resource "aws_iam_role" "story_gen_role" {
    name = "story-gen-role"

    assume_role_policy = jsonencode({
        "Version": "2012-10-17",
        "Statement": [
            {
                "Action": "sts:AssumeRole",
                "Principal": {
                    "Service": "lambda.amazonaws.com"
                },
                "Effect": "Allow"
            }
        ]
    })

    inline_policy {
        name = "lambda-policies"
        policy = jsonencode({
            "Version" : "2012-10-17",
            "Statement" : [
                # Cloudwatch Logs permissions
                {
                    "Effect" : "Allow",
                    "Action" : "logs:CreateLogGroup",
                    "Resource" : "arn:aws:logs:${data.aws_region.current.name}:${local.account_id}:*"
                },
                {
                    "Effect" : "Allow",
                    "Action" : [
                        "logs:CreateLogStream",
                        "logs:PutLogEvents"
                    ],
                    "Resource" : [
                        "arn:aws:logs:${data.aws_region.current.name}:${local.account_id}:log-group:/aws/lambda/*:*"
                    ]
                },
                # S3 Permissions for storing stories
                {
                    "Effect": "Allow",
                    "Action": [
                        "s3:PutObject",
                        "s3:PutobjectAcl"
                    ],
                    "Resource": "arn:aws:s3:::${var.s3_bucket_name}/*"
                }
            ]
        })
    }
}

# Story API IAM (frontend lambda)
resource "aws_iam_role" "story_api_role" {
    name = "story-api-role"

    assume_role_policy = jsonencode({
        "Version": "2012-10-17",
        "Statement": [
            {
                "Action": "sts:AssumeRole",
                "Principal": {
                    "Service": "lambda.amazonaws.com"
                },
                "Effect": "Allow"
            }
        ]
    })

    inline_policy {
        name = "lambda-policies"
        policy = jsonencode({
            "Version" : "2012-10-17",
            "Statement" : [
                # Cloudwatch Logs permissions
                {
                "Effect" : "Allow",
                "Action" : "logs:CreateLogGroup",
                "Resource" : "arn:aws:logs:${data.aws_region.current.name}:${local.account_id}:*"
                },
                {
                    "Effect" : "Allow",
                    "Action" : [
                        "logs:CreateLogStream",
                        "logs:PutLogEvents"
                    ],
                    "Resource" : [
                        "arn:aws:logs:${data.aws_region.current.name}:${local.account_id}:log-group:/aws/lambda/*:*"
                    ]
                },
                # S3 Permissions for getting the stories
                {
                    "Effect": "Allow",
                    "Action": [
                        "s3:GetObject",
                        "s3:ListBucket"
                    ],
                    "Resource": [
                        "arn:aws:s3:::${var.s3_bucket_name}",
                        "arn:aws:s3:::${var.s3_bucket_name}/*"
                    ]
                }
            ]
        })
    }
}
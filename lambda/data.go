package main

// BUCKET ID FOR UPLOADING STORY
// squeak-library

import (
	"encoding/json"
	"context"
	"log"
	"strings"
	"github.com/aws/aws-sdk-go-v2/aws"
    "github.com/aws/aws-sdk-go-v2/config"
    "github.com/aws/aws-sdk-go-v2/service/s3"
)

type Story struct {
    Content string `json:"story"`
}

func uploadStoryS3(bucket string, key string, content string) error {
	// unsure if config.WithRegion("us-east-2") is necessary here
	cfg, err := config.LoadDefaultConfig(context.TODO(), config.WithRegion("us-east-2"))
	if err != nil {
		log.Fatalf("unable to load SDK config, %v", err)
	}

	client := s3.NewFromConfig(cfg)

	story := Story{Content: content}
	jsonContent, err := json.Marshal(story)
	if err != nil {
		log.Println("failed to marshal story: %w", err)
		return err
	}

	_, err = client.PutObject(context.TODO(), &s3.PutObjectInput{
		Bucket: aws.String(bucket),
		Key: aws.String(key),
		Body: strings.NewReader(string(jsonContent)),
	})

	if err != nil {
        log.Println("failed to upload story: %w", err)
		return err
    }
	log.Printf("Story uploaded to S3 bucket '%s' with key '%s'", bucket, key)
	return nil
}
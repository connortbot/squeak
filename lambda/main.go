package main

// https://github.com/cohere-ai/cohere-go
// https://docs.cohere.com/v2/docs/cohere-works-everywhere#cohere-platform
// COHERE_API_KEY="api-key" STORY_BUCKET_NAME="story-generation-bucket-dev" go run .

// compile to binary
// GOOS=linux GOARCH=amd64 CGO_ENABLED=0 go build -o bootstrap .
// MUST BE NAMED BOOSTRAP FOR THE NEW provided.al2 RUNTIME
// zip function.zip bootstrap

import (
    "os"
    "context"
    "log"
    "github.com/aws/aws-lambda-go/lambda"

    "time"
    "math/rand"
    "strings"
)

func handler(ctx context.Context) error {
    log.Println("Executing Aya Story Generation...")

    languages := []string{"French"}
    cefrLevels := []string{"B1", "B2"}
    subjects := []string{"Basketball", "Acting", "Olympics", "Painting"}

    randomIndex := rand.Intn(len(subjects))
    randomSubject := subjects[randomIndex]

    // o(n2), so maybe considering increasing lambda timeout
    for i := 0; i < len(languages); i++ {
        for j := 0; j < len(cefrLevels); j++ {
            story, err := generateStory(languages[i], cefrLevels[j], randomSubject)
    
            if err == nil {
                log.Println("Story:", story)
        
                current_time := time.Now().UTC().Format("2006-01-02")
        
                if err := uploadStoryS3(
                    os.Getenv("STORY_BUCKET_NAME"),
                    strings.ToLower(languages[i]) + "/" + cefrLevels[j] + "_" + current_time + ".json", story,
                ); err != nil {
                    log.Println(err)
                    return err
                }
            } else {
                log.Println(err)
                return err
            }
        }
    }

    return nil
}

func main() {
    lambda.Start(handler)
}
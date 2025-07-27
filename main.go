package main

import (
	"flag"
	"fmt"
	"log"
	"net/http"
	"os"

	"github.com/musgit-dev/musgit"

	"github.com/gin-gonic/gin"
)

func main() {
	router := gin.Default()

	dbUri := flag.String("db-uri", os.Getenv("MUSGIT_DB_URI"), "Data with data")
	flag.Parse()

	if *dbUri == "" {
		log.Fatal("DB not provided.")
	}
	mg := musgit.New(*dbUri)

	// Lessons
	{
		lessons := router.Group("/lessons")
		lessons.GET("/", func(c *gin.Context) {
			res := mg.Lesson.GetAll()
			c.JSON(http.StatusOK, res)
		})

		lessons.POST("/", func(c *gin.Context) {
			res, err := mg.Lesson.Start()
			if err != nil {
				log.Fatal(err)
			}
			c.JSON(http.StatusOK, fmt.Sprintf("Started new lesson: %d", res.ID))
		})

		lessons.POST("/stop", func(c *gin.Context) {
			res := mg.Lesson.StopCurrent()
			c.JSON(http.StatusOK, res)
		})
		lessons.POST("/pause", func(c *gin.Context) {
			res := mg.Lesson.PauseCurrent()
			c.JSON(http.StatusOK, res)
		})
		lessons.POST("/resume", func(c *gin.Context) {
			res := mg.Lesson.PauseCurrent()
			c.JSON(http.StatusOK, res)
		})
	}
	if err := router.Run(); err != nil {
		log.Fatal(err)
	}
}

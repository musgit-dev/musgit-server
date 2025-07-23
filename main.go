package main

import (
	"flag"
	"fmt"
	"log"
	"net/http"

	"github.com/musgit-dev/musgit"

	"github.com/gin-gonic/gin"
)

func main() {
	router := gin.Default()

	dbUri := flag.String("db-uri", "", "Data with data")
	flag.Parse()

	if *dbUri == "" {
		log.Fatal("DB not provided.")
	}
	musgitService := musgit.NewMusgitService(*dbUri)

	router.GET("/lessons/", func(c *gin.Context) {
		res := musgitService.GetLessons()
		c.JSON(http.StatusOK, res)
	})

	router.POST("/lessons/", func(c *gin.Context) {
		res, err := musgitService.StartLesson()
		if err != nil {
			log.Fatal(err)
		}
		c.JSON(http.StatusOK, fmt.Sprintf("Started new lesson: %d", res.ID))
	})

	router.POST("/lessons/stop", func(c *gin.Context) {
		res := musgitService.StopCurrentLesson()
		c.JSON(http.StatusOK, res)
	})
	router.POST("/lessons/pause", func(c *gin.Context) {
		res := musgitService.PauseCurrentLesson()
		c.JSON(http.StatusOK, res)
	})
	router.POST("/lessons/resume", func(c *gin.Context) {
		res := musgitService.ResumeCurrentLesson()
		c.JSON(http.StatusOK, res)
	})
	if err := router.Run(); err != nil {
		log.Fatal(err)
	}
}

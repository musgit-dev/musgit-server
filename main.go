package main

import (
	"log"
	"musgit"
	"net/http"

	"github.com/gin-gonic/gin"
)

func main() {
	router := gin.Default()

	service := musgit.MusgitService()

	router.GET("/pieces/", func(c *gin.Context) {
		res := []string{"foo", "bar"}
		c.JSON(http.StatusOK, res)
	})
	if err := router.Run(); err != nil {
		log.Fatal(err)
	}
}

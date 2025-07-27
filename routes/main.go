package routes

import (
	"log"

	"github.com/musgit-dev/musgit"

	"github.com/gin-gonic/gin"
)

var router = gin.Default()

func Run(mg *musgit.Musgit) {
	getRoutes(mg)
	if err := router.Run(); err != nil {
		log.Fatal(err)
	}
}

func getRoutes(mg *musgit.Musgit) {
	lessonRoutes(mg)
	pieceRoutes(mg)
}

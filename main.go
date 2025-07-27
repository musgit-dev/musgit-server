package main

import (
	"flag"
	"log"
	"os"

	"github.com/musgit-dev/musgit"
	"github.com/musgit-dev/musgit-server/routes"
)

func main() {
	dbUri := flag.String("db-uri", os.Getenv("MUSGIT_DB_URI"), "Data with data")
	flag.Parse()

	if *dbUri == "" {
		log.Fatal("DB not provided.")
	}
	mg := musgit.New(*dbUri)
	routes.Run(mg)
}

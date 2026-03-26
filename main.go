package main

import (
	"context"
	"flag"
	"log"
	"os"

	"go.opentelemetry.io/otel"
	"go.opentelemetry.io/otel/propagation"
	"go.opentelemetry.io/otel/trace"

	"github.com/musgit-dev/musgit"
	"github.com/musgit-dev/musgit-server/routes"
	"github.com/musgit-dev/musgit-server/tracing"
)

var tracer trace.Tracer

func main() {
	ctx := context.Background()

	tp := tracing.NewTracerProvider(ctx)

	defer func() { _ = tp.Shutdown(ctx) }()
	otel.SetTracerProvider(tp)
	tracer = tp.Tracer("github.com/musgit-dev/musgit-server")
	otel.SetTextMapPropagator(
		propagation.NewCompositeTextMapPropagator(
			propagation.TraceContext{},
			propagation.Baggage{},
		),
	)
	dbUri := flag.String("db-uri", os.Getenv("MUSGIT_DB_URI"), "Data with data")
	flag.Parse()

	if *dbUri == "" {
		log.Fatal("DB not provided.")
	}
	mg := musgit.New(*dbUri)

	routes.Run(ctx, mg, tracer)
}

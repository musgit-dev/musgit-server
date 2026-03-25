# syntax=docker/dockerfile:1

FROM golang:1.24.2 AS build-stage
WORKDIR /app

COPY go.mod go.sum ./
RUN go mod download

COPY *.go ./
COPY routes/*.go ./routes/

RUN CGO_ENABLED=1 GOOS=linux go build -o /musgit

FROM gcr.io/distroless/base-debian12 AS build-release-stage

WORKDIR /

COPY --from=build-stage /musgit /musgit

EXPOSE 8080

USER nonroot:nonroot

ENTRYPOINT ["/musgit"]

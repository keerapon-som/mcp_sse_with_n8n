FROM golang:1.23.6-alpine3.21 AS builder
WORKDIR /app
COPY . ./
COPY go.mod ./
COPY go.sum ./

RUN go build -o ytna

FROM alpine:3.21
WORKDIR /app
RUN apk add --no-cache ca-certificates yt-dlp
COPY --from=builder /app/ytna .
ENTRYPOINT ["./ytna"]
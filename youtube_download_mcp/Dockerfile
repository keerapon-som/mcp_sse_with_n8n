FROM golang:1.24.2-alpine3.21 AS builder
WORKDIR /app
COPY . ./
COPY go.mod ./
COPY go.sum ./

RUN go build -o mcp_youtube

FROM alpine:3.21
WORKDIR /app

# Install system dependencies: ca-certificates, yt-dlp, python3, py3-pip, and build dependencies for pip/uv
RUN apk add --no-cache ca-certificates yt-dlp python3 py3-pip build-base

# Upgrade pip and install uv
RUN pip install --upgrade pip --break-system-packages && pip install uv --break-system-packages

# Use uv to install mcp-proxy
RUN uv tool install mcp-proxy

# Add this line:
ENV PATH="/root/.local/bin:${PATH}"

COPY --from=builder /app/mcp_youtube .

ENTRYPOINT ["mcp-proxy", "--sse-host=0.0.0.0", "--sse-port=1234", "--allow-origin=\"*\"", "--pass-environment","--", "./mcp_youtube"]


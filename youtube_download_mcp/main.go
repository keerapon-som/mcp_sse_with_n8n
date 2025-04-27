package main

import (
	"fmt"
	"mcp-yt-download/mcp"
	"mcp-yt-download/youtubedownload"

	"github.com/joho/godotenv"
	"github.com/mark3labs/mcp-go/server"
)

func main() {

	if godotenv.Load() != nil {
		fmt.Println("Failed to load .env file")
	}

	youtubeDownload := youtubedownload.NewYTDownloader()

	s := mcp.NewMCPRouter(youtubeDownload)

	// Start the stdio server
	if err := server.ServeStdio(s); err != nil {
		fmt.Printf("Server error: %v\n", err)
	}
}

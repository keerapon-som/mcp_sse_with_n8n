package mcp

import (
	"github.com/mark3labs/mcp-go/server"
)

type Handler struct {
	DownloaderInterface DownloaderInterface
}

func NewMCPRouter(ytDownload DownloaderInterface) *server.MCPServer {
	h := &Handler{
		DownloaderInterface: ytDownload,
	}
	
	s := server.NewMCPServer(
		"Youtube Downloader",
		"1.0.0",
		server.WithResourceCapabilities(true, true),
		server.WithLogging(),
		server.WithRecovery(),
	)

	s.AddTool(YoutubeDownloaderTool(), h.YoutubeDownloader)

	return s
}

package youtubedownload

import (
	"context"
	"fmt"
	"mcp-yt-download/entities"
	"os/exec"
	"strings"
	"time"
)

type YoutubeDownloader struct {
}

func NewYTDownloader() *YoutubeDownloader {
	return &YoutubeDownloader{}
}

func (y *YoutubeDownloader) Download(options entities.DownloadOptions) error {
	args := []string{}

	// Output directory and filename
	if options.OutputDir != "" {
		args = append(args, "-P", options.OutputDir)
	}
	if options.FileName != "" {
		args = append(args, "-o", options.FileName+".%(ext)s")
	}

	// Format selection
	if options.Format != "" {
		args = append(args, "-f", options.Format)
	} else if options.AudioOnly {
		args = append(args, "-f", "bestaudio")
		args = append(args, "--extract-audio", "--audio-format", "mp3")
	} else if options.VideoOnly {
		args = append(args, "-f", "bestvideo")
		args = append(args, "--merge-output-format", "mp4")
	} else {
		args = append(args, "-f", "bestvideo+bestaudio/best")
		args = append(args, "--merge-output-format", "mp4")
	}

	// Quality (handled via format or extra args)
	if options.Quality != "" {
		args = append(args, "--format-sort", fmt.Sprintf("res:%s", options.Quality))
	}

	// Extractor args
	for _, arg := range options.ExtractorArgs {
		args = append(args, "--extractor-args", arg)
	}

	// Embed subtitles
	if options.EmbedSubs {
		args = append(args, "--embed-subs")
	}

	// Subtitle languages
	if len(options.SubLangs) > 0 {
		args = append(args, "--sub-langs", strings.Join(options.SubLangs, ","))
		args = append(args, "--write-subs")
	}

	// Extra yt-dlp arguments
	if len(options.ExtraArgs) > 0 {
		args = append(args, options.ExtraArgs...)
	}

	// URL (required)
	if options.URL == "" {
		return fmt.Errorf("URL is required")
	}
	args = append(args, options.URL)

	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Minute)
	defer cancel()

	cmd := exec.CommandContext(ctx, "yt-dlp", args...)
	output, err := cmd.CombinedOutput()
	if err != nil {
		return fmt.Errorf("yt-dlp error: %v\nOutput: %s", err, string(output))
	}
	return nil
}

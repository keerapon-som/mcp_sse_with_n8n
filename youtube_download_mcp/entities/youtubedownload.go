package entities

type DownloadOptions struct {
	URL           string   `json:"url"`                      // The YouTube (or other supported) URL to download from
	OutputDir     string   `json:"output_dir"`               // Directory to save the downloaded file
	FileName      string   `json:"file_name,omitempty"`      // Optional: Custom output filename (without extension)
	AudioOnly     bool     `json:"audio_only,omitempty"`     // If true, download audio only
	VideoOnly     bool     `json:"video_only,omitempty"`     // If true, download video only (no audio)
	Format        string   `json:"format,omitempty"`         // Specific format code (e.g., "best", "bestaudio", "bestvideo")
	Quality       string   `json:"quality,omitempty"`        // Optional: Quality selection (e.g., "720p", "1080p")
	ExtractorArgs []string `json:"extractor_args,omitempty"` // Additional custom yt-dlp extractor arguments
	EmbedSubs     bool     `json:"embed_subs,omitempty"`     // If true, embed subtitles if available
	SubLangs      []string `json:"sub_langs,omitempty"`      // List of subtitle languages to download (e.g., ["en", "th"])
	ExtraArgs     []string `json:"extra_args,omitempty"`     // Any extra yt-dlp arguments not covered above
}

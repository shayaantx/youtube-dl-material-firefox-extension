# Summary

This is mostly a clone/modification of https://github.com/Tzahi12345/YoutubeDL-Material/tree/master/chrome-extension that replaces popup with 2 buttons on any youtube content page for download audio & video.

It uses a content script to inject the buttons and that script calls a background script that actually does the downloading (by means of opening a new tab for ytdl-material).

It also closes the tab after a second.

## Usage

Zip the contents, upload to firefox AMO, and use it.

Or https://addons.mozilla.org/en-US/firefox/addon/ytdl-material-download-buttons/
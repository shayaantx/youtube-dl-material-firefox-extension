const youtubeMobileUrl = "m.youtube.com";
const youtubeDesktopUrl = "youtube.com";

function download(url, audioOnly) {
    var input_url = url;
    let timeout = 1000;
    if (input_url.includes(youtubeMobileUrl)) {
        // mobile tabs seem to close faster
        timeout = 3000;
    }
    input_url = input_url.replace(youtubeMobileUrl, youtubeDesktopUrl);
    chrome.storage.sync.get(
        {"frontend_url": "http://localhost"}, 
        function(items) {
        var download_url = items.frontend_url + '/#/home;url=' + encodeURIComponent(input_url) + ';audioOnly=' + audioOnly;
        chrome.tabs.create({ url: download_url }, function(tab) {
            createdTabId = tab.id;
            
            setTimeout(() => {
                chrome.tabs.remove(createdTabId);
            }, timeout);
        });
    });
}

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === "downloadAudio") {
        download(sender.tab.url, true);
    }    
    if (request.action === "downloadVideo") {
        download(sender.tab.url, false);
    }
});
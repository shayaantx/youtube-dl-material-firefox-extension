function downloadAudio() {
    chrome.runtime.sendMessage({ action: "downloadAudio" }, function(response) {});
}
function downloadVideo() {
    chrome.runtime.sendMessage({ action: "downloadVideo" }, function(response) {});
}

function createButton(name, handler) {
    var button = document.createElement('button');
    button.innerText = 'Download ' + name;
    button.id = 'download' + name + 'Button';
    
    button.addEventListener('click', handler);
    return button;
}

const buttonContainer = document.createElement('div');
buttonContainer.style.top = '0';
buttonContainer.style.right = '0';
buttonContainer.style.zIndex = '10000';

const downloadAudioButton = createButton("Audio", downloadAudio);
downloadAudioButton.style.marginRight = '10px';
const downloadVideoButton = createButton("Video", downloadVideo);

buttonContainer.appendChild(downloadAudioButton);
buttonContainer.appendChild(downloadVideoButton);

setInterval(() => {
    if (window.location.href.includes("youtube.com/watch?")) {
        document.getElementById('middle-row').appendChild(buttonContainer);
    }
}, 1000); 
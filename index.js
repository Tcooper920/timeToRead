const wordCountContainer = document.getElementsByClassName("word-count-container")[0];
const timeToReadContainer = document.getElementsByClassName("time-to-read-container")[0];
let totalWords;

document.addEventListener("keyup", (e) => {
    if(e.target.classList.contains("text-content")) {
        calculateWordCount(e.target.value);
        calculateTimeToRead();
    }
});

function calculateWordCount(textContent) {
    textContent = textContent.trim().split(/\s+/);
    if (textContent == "") {
        totalWords = 0;
    } else {
        totalWords = textContent.length;
    }
}

function calculateTimeToRead() {
    let timeToReadInMinutes = (totalWords / 238); // 238 avg words read per minute
    let minutes = Number(timeToReadInMinutes.toString().split(".")[0]); // Before decimal
    let seconds = Number((("." + timeToReadInMinutes.toString().split(".")[1]) * 60).toFixed(1)); // After decimal
    printInfoToPage(totalWords, timeToReadInMinutes, minutes, seconds)
}

function printInfoToPage(totalWords, timeToReadInMinutes, minutes, seconds) {
    wordCountContainer.innerHTML = `Word count: <strong>${totalWords}</strong>`
    if (isNaN(seconds)) {
        seconds = 0;
    }
    if(timeToReadInMinutes < 1) {
        timeToReadContainer.innerHTML = `<strong>${seconds}</strong> second read.`;
    }
    if(timeToReadInMinutes === 1) {
        timeToReadContainer.innerHTML = `<strong>${minutes}</strong> minute read.`;
    }
    if(timeToReadInMinutes > 1) {
        timeToReadContainer.innerHTML = `<strong>${minutes}</strong> minute and <strong>${seconds}</strong> second read.`;
    }
}
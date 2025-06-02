/*----- Declaration des variable ----*/
let video_linges = document.querySelector(".video");
let playPause_btn = document.querySelector(".btn-play-vod");
let stop_btn = document.querySelector(".btn-vod-stop");
let volume_bar = document.querySelector(".vod-volume");
let progress_bar = document.querySelector(".vod-progress-bar");

//--------------- Fonction --------------------//
let f_playPauseVideo_click = (video,play) => {
    if (video.paused) {
        video.play();
        play.innerHTML = 'pause';
    }
    else {
        video.pause();
        play.innerHTML = 'play';
    }
}

let f_stopVideo_click = (video,play) => {
    video.pause();
    video.currentTime = 0;
    play.innerHTML = 'Play';
}

let f_volumeVideo_input = (video,volume) => {
    video.volume = volume.value;
}

let f_progressBarVideo_click = (video,progress,position) => {
    video.currentTime = (position / progress.clientWidth) * video.duration;
}

let f_progressBarVideo_timeupdate = (video,progressBar,play) => {
    progressBar.value = (video.currentTime / video.duration)*100;

    if (progressBar.value === 100) {
        play.innerHTML = 'Play';
        video.currentTime = 0;
        progressBar.value = 0;
    }
}

//--------------------------------------------------//

playPause_btn.addEventListener("click", () => {
    f_playPauseVideo_click(video_linges,playPause_btn);
})

stop_btn.addEventListener("click", () => {
    f_stopVideo_click (video_linges,playPause_btn);
})

volume_bar.addEventListener("input", () => {
    f_volumeVideo_input (video_linges,volume_bar);
})

video_linges.addEventListener("timeupdate", () => {
    f_progressBarVideo_timeupdate (video_linges,progress_bar,playPause_btn);
})

progress_bar.addEventListener("click", (e) => {
    let PositionClicker = e.offsetX;
    f_progressBarVideo_click (video_linges,progress_bar,PositionClicker)
})
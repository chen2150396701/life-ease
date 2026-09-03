import { defineStore } from "pinia";

const beautifyStore = defineStore("beautify_store_date", {
  state: () => {
    return {
      datemy: 0
    };
  },
  getters: {},
  actions: {}
});

function getVideoFrames(videoPath, frameCount = 3) {
  return new Promise((resolve) => {
    const video = document.createElement("video");
    video.src = videoPath;
    video.muted = true;
    video.preload = "auto";

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const frames = [];

    video.onloadeddata = () => {
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      video.currentTime = 0;
    };

    video.onseeked = () => {
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      frames.push(canvas.toDataURL("image/jpeg"));

      if (frames.length < frameCount) {
        video.currentTime = (video.duration / frameCount) * frames.length;
      } else {
        resolve(frames);
      }
    };

    video.play();
  });
}

export default beautifyStore;

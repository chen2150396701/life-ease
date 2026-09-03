import { defineStore } from "pinia";
import photo from "../assets/壁纸1.jpg";
import video from "../assets/video.mp4";



const img_video_showStore = defineStore("img_video_show_store", {
  state: () => {
    return {
      imgUrl: photo,
      videoUrl: video,
      is_img_video: true, //true为图片，false为视频
      is_show_img_video: false //true为显示，false为隐藏
    };
  },
  actions: {
    //是否显示
    changShow() {
      this.is_show_img_video = !this.is_show_img_video;
    },
    //切换图片或视频
    chang_img_video() {
      this.is_img_video = !this.is_img_video;
    }
  }
});

export default img_video_showStore;

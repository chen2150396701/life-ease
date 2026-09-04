<template>
  <div class="showLike">
    <img :src="imgUrl" v-if="is_img_video" />
    <video :src="videoUrl" v-else volume = "0.1" autoplay loop></video>
    <button class="close-btn" @click="show_close">x</button>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { ref, reactive, toRef, toRefs } from "vue";
import img_video_showStore from "../stores/img_video_showStore";

const Img_video_showStore = img_video_showStore();
const { imgUrl, videoUrl, is_img_video } = storeToRefs(Img_video_showStore);
const show_close = () => {
  Img_video_showStore.changShow();
};

</script>

<style lang="scss" scoped>
.showLike {
  --s: 8vh;
  width: calc(16 * var(--s));
  height: calc(9 * var(--s));
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 11;
  transform: translate(-50%, -50%);
  // border: 2px solid red;
  border-radius: 10px;
  overflow: hidden;
  background-color: transparent;
  opacity: transparent;
  img {
    width: 100%;
    height: 100%;
    object-fit: fill;
    overflow: hidden;
  }
  video {
    width: 100%;
    height: 100%;
    object-fit: scale-down;
    overflow: hidden;
  }
  .close-btn {
    position: absolute;
    top: 8px;
    right: 8px;
    width: 28px;
    height: 28px;
    border: none;
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.5);
    color: white;
    font-size: 18px;
    cursor: pointer;
    z-index: 10;
    line-height: 28px;
    text-align: center;
  }
}
</style>

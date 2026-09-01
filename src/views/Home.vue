<template>
  <div class="LE">
    <div class="background_img">
      <!-- 背景图 -->
      <img src="../assets/壁纸1.jpg" />
    </div>
    <div class="home">
      <div class="left">
        <!-- 项目图标 -->
        <div class="left-img">
          <img src="../assets/touxiang.jpg" />
        </div>
        <div class="left-option">
          <router-link to="/beautify" class="option-item" active-class="LF-option-action">美化</router-link>
          <router-link to="/optimization" class="option-item" active-class="LF-option-action">优化</router-link>
          <router-link to="/carveQuickly" class="option-item" active-class="LF-option-action"> 快刻 </router-link>
          <router-link to="/keyboard" class="option-item" active-class="LF-option-action"> 键盘 </router-link>
          <router-link to="/settings" class="option-item" active-class="LF-option-action"> 设置 </router-link>
        </div>
      </div>

      <div class="right">
        <div class="title">
          <div class="rightTitle-right"></div>
        </div>
        <div class="right-option">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, toRef, toRefs } from "vue";
</script>

<style scoped lang="scss">
.LE {
  width: 100%;
  min-width: 100%;
  max-width: 100%;
  height: 100%;
  min-height: 100%;
  max-height: 100%;
  // background-color: rgba(0, 0, 0, 0.1);
  position: relative;

  .background_img {
    width: 100vw;
    height: 100vh;
    min-width: 100%;
    max-width: 100%;
    min-height: 100%;
    max-height: 100%;
    position: absolute;
    // overflow: hidden;
    box-sizing: border-box;
    border: none;
    top: 0;
    left: 0;
    z-index: 0;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .home {
    width: 100%;
    height: 100%;
    min-width: 100%;
    max-width: 100%;
    min-height: 100%;
    max-height: 100%;
    // overflow: hidden;
    position: absolute;

    z-index: 1;
    // background-color: #76d6dd;
    display: grid;
    grid-template-columns: minmax(50px, 1fr) 5fr;
    grid-template-rows: 1fr;
    grid-template-areas: "L R R R R R"; // "R R"

    .left {
      width: 100%;
      height: 100%;
      min-width: 140px;
      max-width: 100%;
      min-height: 100%;
      max-height: 200px;
      // background-color: rgba(0, 0, 0, 0.3);
      border-right: 2px solid rgba(114, 114, 114, 0.1);
      grid-area: L;
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: repeat(5, minmax(50px, 1fr));
      grid-template-areas:
        "T"
        "O"
        "O"
        "O"
        "O";

      .left-img {
        width: 100%;
        height: 100%;
        min-width: 80px;
        max-width: 100%;
        min-height: 80px;
        max-height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        grid-area: T;
        img {
          width: 60%;
          height: 60%;
          border-radius: 10px;
          object-fit: fill;
          flex-shrink: 0;
        }
      }

      .left-option {
        grid-area: O;
        width: 100%;
        height: 96%;
        min-width: 100%;
        max-width: 100%;
        min-height: 576px;
        min-height: 96%;
        max-height: 96%;
        margin-bottom: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
        // overflow: hidden;
        flex-wrap: nowrap;
        justify-content: space-evenly;

        .option-item {
          width: 80%;
          // height: 30%;
          min-width: 120px;
          max-width: 90%;
          min-height: 60px !important;
          // background-color: rgba(152, 152, 152, 0.3);
          border-radius: 10px;
          display: flex;
          flex: 0 0 auto;
          justify-content: center;
          align-items: center;
          font-size: 16px;
          font-weight: 600;
          box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
          color: #000000;
        }
        .option-item:hover {
          cursor: pointer;
          // background-color: rgba(152, 152, 152, 0.53);
          color: #e2f777;
          box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.4);
          text-shadow: -2px -2px 4px rgba(0, 0, 0, 0.4);
        }
        .LF-option-action {
          background-color: rgba(190, 189, 189, 0.2);
        }
      }
    }
    .right {
      grid-area: R;
      width: 100%;
      height: 100%;
      min-width: 100%;
      max-width: 100%;
      min-height: 100%;
      max-height: 100%;
      // background-color: rgba(0, 0, 0, 0.3);

      display: flex;
      flex-direction: column;
      flex-shrink: 0;
      .title {
        width: 100%;
        height: 40px;
        min-width: 100%;
        max-width: 100%;
        min-height: 40px;
        max-height: 40px;
        background-color: #84ffea;
      }

      .right-option {
        width: 100%;
        height: 100%;
        min-width: 100%;
        max-width: 100%;

        // background-color: #99e9173d;
        flex: 1;

        :deep(router-view) {
          width: 100%;
          height: 100%;
          min-width: 100%;
          max-width: 100%;
          min-height: 100%;
          max-height: 100%;
          z-index: 10;
          // display: flex;
          // justify-content: center;
          // align-items: center;
        }
      }
    }
  }
}
</style>

<script setup>
import { ref, reactive } from "vue";

import beautifyStore from "../stores/beautifyStore";
import { storeToRefs } from "pinia";
const date = beautifyStore();
const { datemy } = storeToRefs(date);
console.log(datemy);

const value4 = ref(true);
</script>

<template>
  <div class="beautiful">
    <div class="bar">
      <span>基础美化</span>
    </div>
    <div class="once">
      <div class="once-item">
        <span>主题颜色</span>
        <el-switch
          v-model="value4"
          class="ml-2"
          inline-prompt
          style="--el-switch-on-color: #7cb3ec; --el-switch-off-color: #ce8aa9"
          active-text="Y"
          inactive-text="N"
        />
      </div>
    </div>

    <div class="bar">
      <span>壁纸设置</span>
    </div>

    <div class="middle">
      <div class="noRun">
        <img src="../assets/壁纸1.jpg" />
        <div class="noRun-path">
          <label>现路径：<span>../assets/壁纸1.jpg000000000000000000000000000000000000000000000000000000000000</span></label>
          <label>旧路径：<span>../assets/壁纸1.jpg</span></label>
        </div>
        <div class="noRun-btn">
          <el-button class="noRun-btn-T" type="primary">Primary</el-button>
          <el-button class="noRun-btn-B" type="primary">Primary</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.beautiful {
  width: 98%;
  height: 96%;
  margin: 16px auto;
  padding-top: 16px;
  //   background-color: #c50b0b37;
  border-radius: 10px;
  box-shadow: 0 0 10px #999898;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: space-between;
  align-items: center;

  .bar {
    width: 100%;
    height: 40px;
    display: flex;
    position: sticky;
    align-items: center;
    justify-content: center;
    margin: 10px auto;
    border-bottom: 2px solid transparent;
    background-image: linear-gradient(to right, transparent, rgba(0, 0, 0, 0.2), transparent);
    background-size: 100% 2px;
    background-position: bottom;
    background-repeat: no-repeat;

    // background-color: rgba(93, 210, 93, 0.6);
    span {
      // color: #ce8aa9;
      font-weight: 700;
    }
  }

  .once {
    width: 96%;
    // min-height: 200px;

    margin: auto;
    // border: 2px solid red;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    padding: 10px 0;

    gap: 20px;

    .once-item {
      min-width: 200px;
      max-width: 300px;
      min-height: 40px;
      max-height: 60px;
      background-color: rgba(0, 0, 0, 0.2);
      box-shadow: 0 0 10px rgba(78, 78, 78, 0.5);
      border: 1px solid rgba(78, 78, 78, 0.5);
      // margin: 10px;
      color: royalblue;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      border-radius: 10px;
      // font-weight: 700;
      span {
        width: 60%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }

  .middle {
    width: 96%;
    // min-height: 200px;
    margin: auto;
    padding: 10px 0;
    border-radius: 10px;
    background-color: rgba(0, 0, 0, 0.2);
    box-shadow: 0 0 10px rgba(78, 78, 78, 0.5);
    border: 1px solid rgba(78, 78, 78, 0.5);
    .noRun {
      width: 98%;
      margin: 10px;
      display: flex;
      flex: 0 0 auto;
      flex-wrap: nowrap;
      justify-content: space-around;
      align-items: center;
      img {
        --w: 10px;
        width: calc(16 * var(--w));
        height: calc(9 * var(--w));
        border-radius: 10px;
        object-fit: scale-down;
        border: 1px solid rgba(78, 78, 78, 0.5);
        box-shadow: 0 0 10px rgba(78, 78, 78, 0.5);
      }

      .noRun-path {
        width: 60%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        border: 2px solid red;
        background-color: rgba(93, 210, 93, 0.6);

        label {
          min-width: 50px;
          max-width: 96%;
          margin: 10px;
          padding: 10px 0px 10px 10px;
          display: flex;
          justify-items: center;
          align-items: center;
          border-radius: 10px;
          background-color: rgba(223, 223, 223, 0.781);
          span {
            display: inline-block;
            // width: 86%;
            min-width: 200px;
            max-width: 86%;
            // max-width: 100px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
        }
      }
      .noRun-btn {
        // width: 10%;
        // border: 2px solid red;
        // background-color: rgba(93, 210, 93, 0.6);
        display: grid;
        gap: 10px;
        grid-template-columns:1fr;
        grid-template-rows:1fr 1fr;
        grid-template-areas: "T" "B";
        .noRun-btn-T {
          margin: 0;
          // border: 2px solid red;
          // background-color:rgba(93, 95, 210, 0.6);
          width: 100%;
          grid-area: T;
        }
        .noRun-btn-B {
          margin: 0;
          // border: 2px solid red;
          // background-color:rgba(210, 210, 93, 0.6);
          width: 100%;
          grid-area: B;
        }
      }
    }
  }
}
</style>

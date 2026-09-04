<script setup>
import { ref, reactive, watch, computed, onMounted } from "vue";
import { storeToRefs } from "pinia";
import img_video_show from "../component/img_video_show.vue";
import img_video_showStore from "../stores/img_video_showStore";
import beautifyStore from "../stores/beautifyStore.js";

const Store = img_video_showStore();
const { is_img_video, is_show_img_video } = storeToRefs(Store);
const beautify_Store = beautifyStore();
const { beautify } = storeToRefs(beautify_Store);

const show_no = computed(() => is_show_img_video.value);

//true
const show_img = () => {
  swith("img");
};
//false
const show_video = () => {
  swith("video");
};

const swith = (val) => {
  const needToggle = (val === "img" && !is_img_video.value) || (val === "video" && is_img_video.value);
  if (needToggle) Store.chang_img_video();
  if (!is_show_img_video.value) Store.changShow();
};


const disaled_radio = () => {
  const all_input = document.getElementsByName("noRun");
  all_input.forEach((input, index) => {
    console.log(`第${index}个radio是否选中:`, input.checked);
  });
  console.log(all_input);
};
const disaled_middle = () => {
  const all_input = document.getElementsByName("noRun");
  const middle = document.getElementsByClassName("middle");

  all_input.forEach((input, index) => {
    // 绑定 change 事件
    input.addEventListener("change", () => {
      if (index === 0 || index === 1) {
        middle[0].style.backgroundColor = "rgba(157, 157, 157, 0.349)";
        middle[1].style.backgroundColor = "rgba(0, 0, 0, 0.2)";
      } else if (index === 2 || index === 3) {
        // ② 改用 else if，逻辑更清晰
        middle[1].style.backgroundColor = "rgba(157, 157, 157, 0.349)";
        middle[0].style.backgroundColor = "rgba(0, 0, 0, 0.2)";
      }
    });

    // 初始化：仅当当前 radio 被选中时才设置背景色
    if (input.checked) {
      if (index === 0 || index === 1) {
        middle[0].style.backgroundColor = "rgba(157, 157, 157, 0.349)";
        middle[1].style.backgroundColor = "rgba(0, 0, 0, 0.2)";
      } else if (index === 2 || index === 3) {
        middle[1].style.backgroundColor = "rgba(157, 157, 157, 0.349)";
        middle[0].style.backgroundColor = "rgba(0, 0, 0, 0.2)";
      }
    }
  });
};
onMounted(() => {
  disaled_middle();
});
</script>

<template>
  <div class="beautiful">
    <div class="bar">
      <span>基础美化</span>
    </div>
    <div class="once">
      <div class="once-item" v-for="(item,index) in beautify" :key="item">
        <span>{{ item.name }}</span>
        <el-switch
          v-model="item.switch"
          :disabled="!item.can_open"
          class="ml-2"
          @chang="beautify_Store.invokeSwitch($event,index)"
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
        <img src="../assets/壁纸1.jpg" @click="show_img" id="show-img" />
        <div class="noRun-path">
          <div class="label-path"><span>现路径：</span><strong>../assets/壁纸1.jpg</strong></div>
          <div class="label-path"><span>旧路径：</span><strong>../assets/壁纸1.jpg</strong></div>
        </div>
        <div class="noRun-btn">
          <el-button class="noRun-btn-T" type="primary">上传</el-button>
          <el-button class="noRun-btn-B" type="primary">上传</el-button>
        </div>

        <div class="img-action">
          <input type="radio" name="noRun" value="现路径" checked />
          <input type="radio" name="noRun" value="久路径" />
        </div>
      </div>
    </div>
    <div class="middle">
      <div class="noRun">
        <img src="../assets/壁纸1.jpg" @click="show_video" id="show-video" />
        <div class="noRun-path">
          <div class="label-path"><span>现路径：</span><strong>../assets/壁纸1.jpg</strong></div>
          <div class="label-path"><span>旧路径：</span><strong>../assets/壁纸1.jpg</strong></div>
        </div>
        <div class="noRun-btn">
          <el-button class="noRun-btn-T" type="primary">上传</el-button>
          <el-button class="noRun-btn-B" type="primary">上传</el-button>
        </div>

        <div class="img-action">
          <input type="radio" name="noRun" value="现路径" checked />
          <input type="radio" name="noRun" value="久路径" />
        </div>
      </div>
    </div>

    <component :is="img_video_show" v-if="show_no"></component>
  </div>
</template>

<style scoped lang="scss">
.beautiful {
  width: 98%;
  height: 98%;
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
    margin: 10px auto;
    padding: 10px 0;
    border-radius: 10px;
    background-color: rgba(0, 0, 0, 0.2);
    box-shadow: 0 0 10px rgba(78, 78, 78, 0.5);
    border: 1px solid rgba(78, 78, 78, 0.5);
    .noRun {
      width: 98%;
      // background-color:rgba(157, 157, 157, 0.349);
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
        cursor: pointer;
        transition: transform 0.3s ease-in-out;
      }

      img:hover {
        box-shadow: 0 0 10px rgba(78, 78, 78, 0.5);
        border: 1px solid rgba(78, 78, 78, 0.5);
        transform: scale(1.1);
      }

      .noRun-path {
        width: 60%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        gap: 10px;
        // border: 2px solid red;
        // background-color: rgba(93, 210, 93, 0.6);

        .label-path {
          min-width: 50px;
          max-width: 100%;
          // margin-bottom: 10px;

          padding: 10px 0px;
          display: flex;
          justify-content: flex-start;
          justify-items: center;
          align-items: center;
          border-radius: 10px;
          background-color: rgba(223, 223, 223, 0.781);
          box-shadow: 0 0 10px rgba(78, 78, 78, 0.5);
          span {
            // width: 20%;
            margin-left: 29px;
          }
          strong {
            display: inline-block;
            // width: 86%;
            min-width: 200px;
            max-width: 70%;
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
        gap: 20px;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr;
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
      .img-action {
        // min-height: 100px;
        height: 100%;
        display: flex;
        // flex: 1;
        gap: 36px;
        flex-direction: column;
        justify-content: space-around;

        input[type="radio"] {
          appearance: none;
          -webkit-appearance: none;
          width: 16px;
          height: 16px;
          border: 2px solid #999;
          background-color: #757575;
          border-radius: 2px; /* 方角，如果完全不要圆角就设 0 */
          outline: none;
          cursor: pointer;
        }
        /* 选中状态 */
        input[type="radio"]:checked {
          background-color: #409eff;
          border-color: #409eff;
        }
        /* 选中后加个勾选标记 */
        input[type="radio"]:checked::after {
          content: "✓";
          display: block;
          color: white;
          text-align: center;
          line-height: 16px;
          font-size: 12px;
        }
      }
    }
  }
}
</style>

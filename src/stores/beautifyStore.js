import { defineStore } from "pinia";
const beautifyStore = defineStore("beautify_store_date", {
  state: () => {
    return {
      beautify: [
        {
          name: '关闭任务栏搜索',
          switch: true,
          can_open:true
        },
        {
          name: '任务栏居中',
          switch: true,
          can_open:true
        },
        {
          name: '启用传统菜单',
          switch: true,
          can_open:true
        },
        {
          name: '任务栏透明',
          switch: true,
          can_open:true
        },
        {
          name: '任务栏自动隐藏',
          switch: true,
          can_open:true
        }
      ]
    };
  },
  getters: {},
  actions: {
    invokeSwitch(val,index) {
      const item = this.beautify[index];
      item.switch = val;

    }

  },
  persist: {
    enabled: true,
    strategies: [
      {
        key: "beautify_store_date",
        storage: localStorage,
        paths: ["beautify"],
      },
    ],
  }
});
export default beautifyStore;

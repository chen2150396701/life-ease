var dictionary = {
  "zh-CN": {
    "美化": "美化",
    "优化": "优化",
    "启动": "启动",
    "快刻": "快刻",
    "键盘": "键盘",
    "设置": "设置"
  },
  "en-US": {
    "美化": "Beautify",
    "优化": "Optimize",
    "启动": "Launch",
    "快刻": "Quick",
    "键盘": "Keyboard",
    "设置": "Settings"
  },
  "ja-JP": {
    "美化": "美化",
    "优化": "最適化",
    "启动": "起動",
    "快刻": "クイック",
    "键盘": "キーボード",
    "设置": "設定"
  }
};
const langMap = ["zh-CN", "en-US", "ja-JP"];
const currentLang = ref("zh-CN");
const getLang = (key) => {
  return dictionary[currentLang.value][key];
}



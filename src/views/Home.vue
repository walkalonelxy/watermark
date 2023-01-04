<template>
  <div class="home">
    <div class="box">
      <div class="child">这是测试内容</div>
      <div class="child">这是测试内容</div>
      <div class="child">这是测试内容</div>
    </div>
    <div class="box box1">
      <div class="child">这是测试内容</div>
      <div class="child">这是测试内容</div>
      <div class="child">这是测试内容</div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { Watermark } from "@/utils/watermark";
export default {
  name: "Home",
  components: {},
  data() {
    return {};
  },
  mounted() {
    // 移除全局水印
    this.$watermark.remove();
    // 退出当前路由前重新创建全局水印, 防止其它页面的水印消失
    this.$once("hook:beforeDestroy", () => {
      this.$watermark.create();
    });
    // 添加当前页面的自定义水印
    this.setWatermark("box", ["局部水印"], { color: "red" });
    this.setWatermark("box1", ["水印1", " 局部水印2"], { width: 130 });
  },
  methods: {
    setWatermark(targetNode, content, attrs) {
      let watermark = new Watermark({
        targetNode, // 需要添加水印的容器类名
        content, // 水印内容
        width: 100,
        height: 80,
        ...attrs, // 其他相关扩展属性看watermark.js文件
      });
      watermark.create();
    },
  },
};
</script>
<style lang="less" scoped>
.home {
  display: flex;
  justify-content: center;
  .box {
    width: 400px;
    height: 400px;
    overflow: auto;
    position: relative;
    border: 1px solid red;
    margin-right: 40px;
    .child {
      height: 100px;
    }
  }
}
</style>

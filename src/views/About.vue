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
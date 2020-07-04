<template>
  <div class="info-title">
    <i :class="icon"></i>
    {{title}}
  </div>
</template>

<script>
export default {
  props: {
    title: {
      required: "标题" //设置子组件的默认参数
    },
    icon: {
      required: "el-icon-edit"
    }
  },
  data() {
    return {
      //   title: "标题",
      //   icon: "el-icon-edit"
    };
  }
};
</script>

<style>
</style>
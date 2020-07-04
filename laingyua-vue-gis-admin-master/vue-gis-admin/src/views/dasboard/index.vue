<template>
  <div class="vue-box">
    <!-- 头部组件 -->
    <HeaderVue class="header-vue"></HeaderVue>
    <!-- 主内容区 -->
    <div class="dasboard-content">
      <!-- 路由容器 -->
      <router-view v-if="isRouterAlive"></router-view>
    </div>
  </div>
</template>
<script>
import HeaderVue from "../../components/layout/header";
export default {
  provide() {
    return {
      reload: this.reload
    };
  },
  data() {
    return { isRouterAlive: true };
  },
  components: {
    HeaderVue
  },
  mounted() {
    // console.log("++", process.env);
  },
  methods: {
    reload() {
      this.isRouterAlive = false;
      this.$nextTick(function() {
        this.isRouterAlive = true;
      });
    }
  }
};
</script>
<style scoped>
.vue-box {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
}
.header-vue {
  width: 100%;
  height: 60px;
}
.dasboard-content {
  background-color: #f2f2f2;
  flex: 1;
  overflow: hidden;
}
</style>
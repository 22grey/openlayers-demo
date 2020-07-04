<template>
  <el-container style="height:100%">
    <!-- 左侧菜单 -->
    <LeftMenu class="dasboard-left-menu" style="height:100%;"></LeftMenu>
    <!-- 主内容区 -->
    <el-container>
      <el-main class="context">
        <router-view v-if="isRouterAlive"></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import LeftMenu from "../../components/layout/leftMenu";
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
    LeftMenu
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
.context {
  padding: 0px;
}
</style>
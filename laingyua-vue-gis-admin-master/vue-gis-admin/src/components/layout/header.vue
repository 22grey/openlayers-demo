<template>
  <div class="header clearFix">
    <!-- 项目名称及logo -->
    <div class="pip-header-logo">
      <img src="../../assets/logo.png" />
      <label class="head-title">{{title}}</label>
    </div>

    <!-- 头部菜单 -->
    <header-menu></header-menu>
    <!-- 个人中心 -->
    <div class="header-user">
      <el-dropdown>
        <span class="el-dropdown-link">
          <label class="header-user-name" title="超级管理员">超级管理员</label>
          <img class="header-user-avator" src="../../assets/images/default-avator.jpg" />
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item>修改密码</el-dropdown-item>
          <el-dropdown-item divided>退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>
<script>
import HeaderMenu from "./headerMenu";
export default {
  data() {
    return {
      title: "智慧管理系统"
    };
  },
  components: {
    HeaderMenu
  },
  mounted() {
    this.title = process.env.VUE_APP_TITLE;
  },
  methods: {}
};
</script>
<style scoped>
.header {
  background: #409eff;
  color: white;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
}
.pip-header-logo {
  min-width: 10%;
  line-height: 60px;
  padding-left: 10px;
}
.pip-header-logo img {
  height: 80%;
  vertical-align: middle;
  border-radius: 50%;
}
.pip-header-logo .head-title {
  margin-left: 0.5rem;
  font-size: 1.5rem;
  vertical-align: middle;
  font-weight: 500;
}
.header-menu {
  margin-left: 0.5rem;
  flex: 1;
}
.el-menu.el-menu--horizontal {
  border-bottom: solid 0px #e6e6e6;
}
.header-user {
  width: 120px;
  text-align: right;
  margin-right: 10px;
  margin-top: 8px;
}
.header-user-name {
  vertical-align: middle;
  display: inline-block;
  width: 60px;
  margin-right: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  height: 40px;
  line-height: 40px;
  color: white;
}
.header-user-avator {
  vertical-align: middle;
  height: 45px;
  border-radius: 50%;
}
</style>
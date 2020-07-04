<template>
  <div class="box" :style="{backgroundImage: 'url(' + bgImg + ')'}">
    <div class="login-wrap">
      <div class="login-left">
        <img src="../../../assets/images/login/loginleft.jpg" />
      </div>
      <div class="login-right">
        <div class="login-top">{{title}}</div>
        <div class="login-content">
          <div class="username">
            <img src="../../../assets/images/login/username.png" />
            <input
              type="text"
              name
              value
              placeholder="请输入您的用户名"
              onfocus="this.placeholder=''"
              onblur="this.placeholder='请输入您的用户名'"
            />
          </div>
          <div class="password">
            <img src="../../../assets/images/login/pass.png" />
            <input
              type="password"
              name
              value
              placeholder="请输入您的密码"
              onfocus="this.placeholder=''"
              onblur="this.placeholder='请输入您的密码'"
            />
          </div>
          <div class="remember-password">
            <span>
              <input
                style="margin-top: -2px; margin-bottom: 1px; vertical-align: middle;"
                type="checkbox"
                id="rememberPasswordCheck"
              />
              <label class="rememberPasswordLabel">记住密码</label>
            </span>
            <span style="float: right;">
              <span id="forgetPassword">忘记密码？</span>
            </span>
          </div>
        </div>
        <div class="login-footer">
          <div class="login-button" @click="gotoMain">登陆</div>
        </div>
      </div>
    </div>
    <footer class="footer">项目作者：夜空下的隼 540647476@qq.com</footer>
  </div>
</template>
<script>
import defaultImg from "../../../assets/images/login/bg.jpg";
import request from "../../../Utils/common/request";
export default {
  name: "login",
  data() {
    return {
      bgImg: defaultImg,
      title: ""
    };
  },
  mounted() {
    // 获取项目名称
    this.title = process.env.VUE_APP_TITLE;
    console.log(process.env.VUE_APP_TITLE);
    // request
    //   .getRequest("/user/index", {
    //     username: "admin333 ",
    //     passoword: "111111"
    //   })
    //   .then(
    //     res => {
    //       console.log("数据---", res);
    //     },
    //     error => {
    //       console.log("数据---", error);
    //     }
    //   );
  },
  methods: {
    gotoMain: function() {
      console.log("++++");
      // request.instance.get("/roles/index").then(
      //   res => {
      //     console.log("数据---", res);
      //   },
      //   error => {
      //     console.log("错误信息", error);
      //   }
      // );
      //   console.log("=======");
      this.$router.push({ path: "/dasboard" });
    }
  }
};
</script>
<style scoped>
.box {
  height: 100%;
  width: 100%;
  background-repeat: no-repeat;
  background-size: 100% 100%;
}

.footer {
  position: absolute;
  bottom: 0px;
  width: 100%;
  height: 5.5%;
  color: #ffffff;
  text-align: center;
  line-height: 300%;
}

.login-top {
  font-size: 26px;
  margin: 0px 0px 50px 0px;
  box-sizing: border-box;
  color: #137dd4;
  font-weight: bold;
  text-align: center;
}

body {
  height: 100%;
  overflow: hidden;
  background: linear-gradient(
    0deg,
    rgba(31, 189, 255, 0.4) 0%,
    rgba(17, 117, 206, 0.8) 100%
  );
  background-size: 100% 100%;
}

.login-wrap {
  display: inline-flex;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.login-left {
  width: 480px;
  height: 600px;
  background: linear-gradient(
    0deg,
    rgba(31, 189, 255, 0.4) 0%,
    rgba(17, 117, 206, 0.8) 100%
  );
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-left img {
  width: 100%;
  height: 100%;
}

.login-right {
  background: #fff;
  padding: 80px 120px 80px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.login-content {
  width: 320px;
  display: flex;
  flex-direction: column;
  margin-top: -40px;
}

.login-content > .username,
.login-content > .password {
  width: 290px;
  height: 47px;
  border: 1px solid rgba(5, 135, 208, 1);
  border-radius: 23px;
  margin-bottom: 30px;
  font-size: 14px;
  height: 26px;
  line-height: 26px;
  padding: 8px 5%;
}
.password input,
.username input {
  border: none;
  outline: none;
  background: #fff !important;
  background-color: #fff !important;
  flex: 1;
}

input:-webkit-autofill {
  -webkit-box-shadow: 0 0 0px 1000px white inset !important;
}

.password,
.username {
  display: flex;
}

.password img,
.username img {
  width: 26px;
}

.login-footer .login-button {
  width: 320px;
  height: 44px;
  border: 1px solid;
  text-align: center;
  background: linear-gradient(
    90deg,
    rgba(17, 117, 206, 1) 0%,
    rgba(31, 189, 255, 1) 100%
  );
  border-radius: 22px;
  font-size: 16px;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  line-height: 40px;
  cursor: pointer;
}

.remember-password {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  padding: 0 10px;
}

.forgot-password {
  cursor: pointer;
}
</style>
<template>
  <div class="login-container">
    <div class="login">
      <el-form autocomplete="on" :model="loginForm" :rules="loginRules" ref="loginForm" label-position="left"
        label-width="0px" class="card-box login-form">
        <el-form-item prop="username">
          <el-input name="username" type="text" v-model="loginForm.username" autocomplete="on" placeholder="用户名" />
        </el-form-item>
        <el-form-item prop="password">
          <el-input name="password" :type="pwdType" @keyup.enter.native="handleLogin" v-model="loginForm.password"
            autocomplete="on" placeholder="密码" show-password></el-input>
        </el-form-item>
        <el-form-item align='center'>
          <el-button v-waves type="warning" style="width:100%;" @click.native.prevent="handleLogin">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
  import {
    validateUsername,
    validatePass,
  } from '@/utils/rules.js'
  export default {
    name: 'login',
    data() {
      return {
        loginForm: {
          username: '',
          password: ''
        },
        loginRules: {
          username: [{
            required: true,
            trigger: 'blur',
            validator: validateUsername
          }],
          password: [{
            required: true,
            trigger: 'blur',
            validator: validatePass
          }],

        },
        pwdType: 'password'
      }
    },
    methods: {
      handleLogin() {
        this.$refs.loginForm.validate(valid => {
          if (valid) {
            this.$router.push({
              path: '/lazyImage'
            })
          }
        })
      }
    }
  }

</script>
<style lang="scss">
  /* .login-container {
    height: 100vh;
    position: relative;
    background: url('../../assets/timg.gif') no-repeat center;
    background-size: cover;

    .login {
      top: 50%;
      left: 50%;
      z-index: 9;
      width: 300px;
      padding: 40px;
      position: absolute;
      transform: translate(-50%, -50%);
      border-radius: 10px;
      transition: 0.5s all;

      &:hover {
        box-shadow: 0 2px 15px 0 #dc4c4c, 0 0 6px 0 #df0c0c;
      }
    }
  } */

  /*背景局部清晰*/
  .login-container {
    width: 100%;
    height: 100vh;
    position: relative;
    background: url("../../assets/bg.jpg") no-repeat fixed;
    background-size: cover;
  }

  .login-container:after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background: inherit;
    filter: blur(3px);
  }

  .login {
    position: absolute;
    /* transform: translate(-50%,-50%); */
    width: 300px;
    padding: 250px 50px;
    border-radius: 2px;
    box-shadow: 0 0 10px 6px rgba(0, 0, 0, .1);
    background: inherit;
    z-index: 3;
    margin-left: -200px;
    left: 50%;
    top: 0;
    bottom: 0;
  }
</style>

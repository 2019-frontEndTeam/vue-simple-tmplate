<template>
  <div class="login-container">
    <div class="login" ref="login">
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
          <el-button :loading="loading" v-waves class="pan-btn yellow-btn" style="width:100%;"
            @click.native.prevent="handleLogin">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import api from '@/axios/api.js'
  import {
    validateUsername,
    validatePass,
  } from '@/utils/rules.js'

  export default {
    name: 'login',
    data() {
      return {
        loading: false,
        transitionEvent: '',
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
    mounted(){
      api.mockdata('/data/index')
      .then(res => {
        console.log(res);
      })

    },
    methods: {
      goto() {
        setTimeout(() => {
          this.$store.commit('SET_TOKEN', 'admin');
          this.$router.push({
            path: '/lazyImage'
          })
        }, 100)
        this.$refs.login.removeEventListener(this.transitionEvent, this.goto);
      },
      handleLogin(e) {
        this.$refs.loginForm.validate(valid => {
          if (valid) {
            this.loading = true;
            setTimeout(() => {
              this.$refs.login.classList.add('close');
              let transitions = {
                'transition': 'transitionend',
                'OTransition': 'oTransitionEnd',
                'MozTransition': 'transitionend',
                'WebkitTransition': 'webkitTransitionEnd'
              }
              // 处理动画回调的兼容性
              for (let t in transitions) {
                if (this.$refs.login.style[t] !== undefined) {
                  this.transitionEvent = transitions[t]
                }
              }
              // 动画结束后执行
              this.$refs.login.addEventListener(this.transitionEvent, this.goto);

              this.loading = false;
            }, 1000)
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
    transition: 0.5s all;
  }

  .close {
    width: 0;
    margin: 0;
    padding: 250px 0px;
    overflow: hidden;
  }

  .pan-btn {
    .el-icon-loading:before {
      content: "\e6ab";
    }

    .el-icon-loading {
      font-size: 16px;
    }
  }
</style>

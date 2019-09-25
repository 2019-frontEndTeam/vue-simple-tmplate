<template>
  <div class="login-container">
    <div class="login">
      <el-form autocomplete="on" :model="loginForm" :rules="loginRules" ref="loginForm"
        label-position="left" label-width="0px" class="card-box login-form">
        <el-form-item prop="username">
          <el-input name="username" type="text" v-model="loginForm.username" autocomplete="on" placeholder="用户名" />
        </el-form-item>
        <el-form-item prop="password">
          <el-input name="password" :type="pwdType" @keyup.enter.native="handleLogin" v-model="loginForm.password"
            autocomplete="on" placeholder="密码" show-password></el-input>
        </el-form-item>
        <el-form-item align='center'>
          <el-button type="primary" @click.native.prevent="handleLogin">登录</el-button>
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
              path: '/index'
            })
          }
        })
      }
    }
  }

</script>
<style lang="scss">

</style>

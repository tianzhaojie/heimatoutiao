<template>
    <div>
        <!-- 标题导航 -->
         <van-nav-bar title="登录" class="page-nav-bar" />

         <!-- 登录表单 -->
         <van-form @submit="onSubmit">
    <van-field
    name="手机"
    left-icon="smile-o"
    placeholder="请输入手机号" 
    v-model.number="user.mobile"
  >
  <i slot="left-icon" class="toutiao toutiao-shouji"></i>
  </van-field>
  <van-field
    type="password"
    name="请输入验证码"
    v-model.number="user.code"
  >
  <i slot="left-icon" class="toutiao toutiao-yanzhengma"></i>
  <template #button>
    <van-button class="send" round size="small" type="default">发送验证码</van-button>
  </template>
  </van-field>
  <div class="login-btn">
    <van-button class="btn" block type="info" native-type="submit">登录</van-button>
  </div>
</van-form>
    </div>
</template>

<script>
    //按需引入请求
    import {login} from '@/api/user'

export default {
name:'LoginIndex',
data() {
    return {
      user:{
        mobile:'',//手机
        code:''//验证码
      }
    };
  },
  methods: {
    async onSubmit() {
    //1.获取表单数据
    const user = this.user
    //2表单验证
    //3.提交表单请求登录
    try {
        const res = await login(user)
        console.log('登录成功');
    } catch(err) {
        if (err.response.status === 400) {
            console.log('手机号或者验证码错误');
        } else{
            console.log('登录失败',err);
        }
        
    }
    //4根据请求响应结果进行后续操作
    }
  },
 }

</script>

<style scoped>
.toutiao {
    font-size: 37px;
}
.send {
  background-color: #ededed;
  width: 160px;
  height: 46px;
  line-height: 46px;
  font-size: 11px;
  color: #666;
}
.login-btn {
    padding: 53px 33px;
}
.btn {
    background-color: #6db4fb;
    border: none;
}
</style>
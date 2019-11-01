<template>
    <div class="container">
        <div class="form">
            <div class="logo"></div>
            <div class="contents">
                <h2>Look For Yourself</h2>
                <p>Welcome!</p>
                <el-input v-model="username" placeholder="请输入用户名"></el-input>
                <el-input type="password" v-model="password" placeholder="请输入登录密码"></el-input>
                <router-link to="/">忘记密码？</router-link>
                <el-button type="primary"  @click="onSubmit">登录</el-button>
                <p class="tip">如果您还没有账号可以马上<router-link to="/register" class="" style="margin:0;">注册</router-link></p>
            </div>
        </div>
    </div>
</template>
<script>
import { Message } from 'element-ui';
export default {
    name:'login',
    data(){
        return{
            username:'',
            password:'',
            count:0
        }
    },
    methods:{
        // 登录提交
        onSubmit(){
            if(this.username == ''){
                Message({
                    type: 'info',
                    message: '请填写用户名'
                });
                return false;
            }
            if(this.password == ''){
                Message({
                    type: 'info',
                    message: '请输入密码'
                });
                return false;
            }
            // 判断用户名及密码校验
          this.$http.post('/api/user/login',{
                username:this.username,
                password:this.password,
            })
            .then((res) => {
                console.log(res)
                Message({
                    type: 'success',
                    message: res.data.msg
                });  
                if(res.data.code == '0'){
                    // window.localStorage.setItem('token');
                    window.localStorage.setItem('token', JSON.stringify(res.data.token));
                    window.localStorage.setItem('username', this.username);
                    window.localStorage.setItem('count', this.count);
                    
                    console.log(window.localStorage)
                    this.$router.push({
                        name:"home",
                        // params:{'username':this.username,'password':this.password},
                    })
                }
            })
        },
    },
    created(){
        // 添加登录的键盘事件
        const rts = this;
        document.onkeydown = function () {
            const key = window.event.keyCode;
            if( key == 13){
                rts.onSubmit();
            }
        }
    }
}
</script>
<style lang="scss" scoped>
    html,body{
        width: 100%;
        overflow: hidden;
    }
    .container{
        width: 100%;
        height: 100vh;
        background: url("../../../assets/bg2.png") center no-repeat;
        background-size:100% 100%; 
        .form{
            width: 800px;
            height: 500px;
            box-sizing: border-box;
            position: absolute;
            background: #fff;
            left: 50%;
            top: 50%;
            margin-left: -400px;
            margin-top: -250px;
            overflow: hidden;
            .contents{
                width: 42%;
                float: right;
                height: 500px;
                padding-top: 13%;
                text-align: center;
                box-sizing: border-box;
                position: relative;
                a{
                    display: block;
                    text-align: right;
                    font-size: 14px;
                    text-decoration: underline;
                    line-height: 25px;
                    height: 40px;
                    margin-top: -20px;
                    padding-right:15%; 
                }
                .el-input{
                    display: block;
                    width: 70%;
                    margin: 20px auto;
                }
                p.tip{
                    display: block;
                    width: 100%;
                    margin: 0;
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    height: 30px;
                    line-height: 30px;
                    font-size: 12px;
                    text-align: right;
                    a{
                        display: inline;
                        padding: 0 10px;
                    }
                }
            }
            .logo{
                width: 58%;
                height: 500px;
                float: left;
                // background-color:rgba(56,61,77,.6); 
                background: url("../../../assets/bg2.png") center no-repeat;
                background-size:100% 100%; 
            }
        }
    }
</style>



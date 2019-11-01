<template>
    <div class="container">
        <div class="form">
            <p>
                <el-input v-model="username" clearable maxlength="10" placeholder="请输入用户名"></el-input>
                <span class="name"><img  class="img" src="../../../assets/ts2.png" title="用户名为4到16位（字母，数字，下划线，减号）"></span>
            </p>
            <p>
                <el-input type="password" v-model="password" clearable maxlength="20"  placeholder="请输入密码"></el-input>
                <span class="password"><img class="img" src="../../../assets/ts2.png" title="密码强度要求，最少6位，包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符"></span>
            </p>
            <p>
                <el-input type="password" v-model="passwords" clearable maxlength="20"  placeholder="请再次输入密码"></el-input>
            </p>
            <p>
                <el-input  v-model="phoneNumber" clearable maxlength="11"  placeholder="请输入您的手机号码"></el-input>
            </p>
            <p>
                <el-input v-if="type == '1'" maxlength="4"    class="verificationCode"  placeholder="请输入验证码"></el-input>
                <el-input v-else v-model="verificationCode"  class="verificationCode"  placeholder="请输入验证码"></el-input>
                <!-- <span class="verificationCode button"  @click="identifying">点击获取验证码</span> -->
                <img src="/api/user/verificationCode" class="images" @click="identifying">
            </p>
            <el-button type="primary"  @click="submit">注册</el-button>
        </div>
    </div>
</template>
<script>
import { Message } from 'element-ui';
export default {
    name:'register',
    data(){
        return{
            username:'',
            password:'',
            passwords:'',
            phoneNumber:'',
            verificationCode:'',
            type:'1',
        }
    },
    methods:{
        // 验证码
        identifying(e){
            e.target.src = '';
            e.target.src = '/api/user/verificationCode?t='+ Math.random();
            console.log(e.target.src);
        },
        // 提交
        submit(){
            if(this.username == ''){
                Message({
                    type: 'info',
                    message: '请填写用户名'
                });
                return false;
            }else{
                if (this.username !== '') { 
                    const reg=/^[a-zA-Z0-9_-]{4,16}$/;
                    if(!reg.test(this.username)){
                        Message({
                            type: 'info',
                            message: '请输入正确的用户名'
                        });
                        return false;
                    }
                }
            }
            
            if(this.password == ''){
                Message({
                    type: 'info',
                    message: '请输入密码'
                });
                return false;
            }else{
                if(this.password !== ''){
                    // const reg = /^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/;
                    const reg = /^[a-zA-Z\d]+$/;
                    if(!reg.test(this.password)){
                        Message({
                            type: 'info',
                            message: '请输入正确的密码'
                        });
                        return false;
                    }
                }
            }
            if(this.passwords == ''){
                Message({
                    type: 'info',
                    message: '请再次输入密码'
                });
                return false;
            }
            if(this.passwords != this.password){
                Message({
                    type: 'info',
                    message: '请确认你的密码，再次输入'
                });
                return false;
            }

            if(this.phoneNumber == ''){
                Message({
                    type: 'info',
                    message: '请输入手机号'
                });
                return false;
            }else{
                if(this.phoneNumber !== ''){
                    const reg = /^1[34578]\d{9}$/;
                    if(!reg.test(this.phoneNumber)){
                        Message({
                            type: 'info',
                            message: '请输入正确的手机号'
                        });
                        return false;
                    }
                }
            }

            this.$http.post(`/api/user/register`,{
                username:this.username,
                password:this.password,
                passwords:this.passwords,
                phoneNumber:this.phoneNumber,
            })
            .then((res) => {
                Message({
                    type: 'info',
                    message: res.data.msg
                });  
                if(res.data.code == '0'){
                    this.$router.push({
                        name:"login"
                    })
                }else{
                    this.username = '';
                    this.password = '';
                    this.passwords = '';
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
                rts.submit();
            }
        }
    }
}
</script>
<style lang="scss" scoped>
    .container{
        height: 100vh;
        background: url('../../../assets/bg3.jpg') center no-repeat ;
        background-size:100% 100%; 
    }
    .form{
        width: 500px;
        min-height: 400px;
        overflow: hidden;
        padding: 20px;
        background: #434b58;
        box-sizing: border-box;
        position: absolute;
        left: 50%;
        top: 50%;
        margin-left: -250px;
        margin-top: -200px;
        // box-shadow: 0 0 5px #f4f4f4;
        .el-input{
            display: inline-block;
            width: 80%;
        }
        p{
            width: 90%;
            height: 40px;
            line-height: 40px;
            margin: 20px  auto;
            span.name,span.password{
                display: inline-block;
                vertical-align: top;
                width: 30px;
                height: 30px;
                margin-top: 5px;
                margin-left: 10px;
                cursor: pointer;
                img{
                    width: 30px;
                }
            }
            .el-input{
                float: left;
            }
            .images{
                float: left;
                background-color: #fff;
                cursor: pointer;
                width: 30%;
                height: 40px;
            }
        }
        .el-button{
            display: block;
            width: 100px;
            text-align: center;
            margin: 10px auto;
            
        }
        .verificationCode{
            display: inline-block;
            width: 48%;
            padding-right: 1%;
        }
        .verificationCode.button{
            border: solid 1px #ddd;
            width: 30%;
            border-radius: 5px;
            background: #fafafa;
            text-align: center;
            font-size: 14px;
            cursor: pointer;
        }
    }
</style>



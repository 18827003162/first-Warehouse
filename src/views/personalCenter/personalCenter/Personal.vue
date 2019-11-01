<template>
    <div class="personal">
        <!-- 基本资料 -->
        <div class="left-nav" ref="leftNav"  :style="{backgroundImage:backInfo}">
            <!-- <a class="menu" @click="operation"></a> -->
            <h3>小太阳</h3>
            <div class="img">
                <img src="../../../assets/personal.jpg" alt="">
            </div>
            <ul>
                <li @click="firstClick">
                    <router-link to="/essentialInformation"><img src="../../../assets/one.png" alt="" > 个人信息</router-link>
                </li>
                <li @click="secondClick">
                    <router-link  to="/sampleReels"><img src="../../../assets/two.png" alt="" > 作品集</router-link>
                </li>
                <li @click="thirdClick">
                    <router-link  to="/myAttention"><img src="../../../assets/three.png" alt=""> 我的关注</router-link>
                </li>
                <li @click="fourthClick">
                    <router-link  to="/myDynamics"><img src="../../../assets/four.png" alt=""> 我的动态<span>12</span></router-link>
                </li>
            </ul>
            <div class="functionalRequirement">
                <router-link to="/">回到首页</router-link>
            </div>
        </div>
        <div class="wraper">
            <router-view></router-view>
        </div>
        
        
    </div>
</template>
<script>
export default {
    name:"personal",
    data(){
        return {
            imageUrl: '',
            backInfo:'',
        }
    },
    methods:{
        // 侧栏颜色点击
        firstClick(){
            console.log(this.backInfo)
            this.backInfo = 'linear-gradient(to top, #6a85b6 0%, #bac8e0 100%)';
        },
        secondClick(){
            this.backInfo= "linear-gradient(to top, #fff1eb 0%, #ace0f9 100%)";
        },
        thirdClick(){
            this.backInfo = 'linear-gradient(to top, #accbee 0%, #e7f0fd 100%)';
        },
        fourthClick(){
            this.backInfo = 'linear-gradient(to top, #0c3483 0%, #a2b6df 100%, #6b8cce 100%, #a2b6df 100%)';
            console.log(123)
            // background-image: 
        },
        // 上传头像
        handleAvatarSuccess(res, file) {
            this.imageUrl = URL.createObjectURL(file.raw);
        },
        beforeAvatarUpload(file) {
            const isJPG = file.type === 'image/jpeg';
            const isLt2M = file.size / 1024 / 1024 < 2;

            if (!isJPG) {
            this.$message.error('上传头像图片只能是 JPG 格式!');
            }
            if (!isLt2M) {
            this.$message.error('上传头像图片大小不能超过 2MB!');
            }
            return isJPG && isLt2M;
        },
        // 操作按钮点击事件
        operation(){
        },
    }
}
</script>
<style lang="scss" scoped>
    html,body{
        width: 100%;
        margin: 0;
        overflow: hidden;
    }
    .personal{
        width: 100%;
        overflow: hidden;
        /* 左侧导航 */
        .left-nav{
            width: 18%;
            margin-right: 1%;
            height: 100%;
            position: absolute;
            overflow: hidden;
            left: 0;
            top: 0;
            padding: 20px 0;
            border-right:solid 1px #eee;
            background-image: linear-gradient(to top, #6a85b6 0%, #bac8e0 100%);
            box-sizing: border-box;
            // margin-top: 50px;
            h3{
                font-weight: bold;
                font-size: 20px;
                height: 50px;
                line-height: 50px;
                text-align: center;
            }
            .img{
                display: block;
                width: 100px;
                height: 100px;
                border-radius: 50%;
                overflow: hidden;
                margin: 0 auto;
                img{
                    height: 100px;
                }
            }
            ul{
                width: 100%;
                overflow: hidden;
                padding: 0;
                box-sizing: border-box;
                li{
                    width: 100%;
                    float: left;
                    overflow: hidden;
                    box-sizing: border-box;
                    height: 70px;
                    line-height: 70px;
                    text-align: center;
                    
                    .router-link-active{
                        width: 100%;
                        background-image: linear-gradient(to top, #330867 0%, #30cfd0 100%);
                        color: #2a5298;
                        // background-image: linear-gradient(to top,  0%, #1e3c72 1%, #2a5298 100%);
                    }
                    a{
                        display: inline-block;
                        padding: 0 20px;
                        width: 100%;
                        color: #ffffff;
                        text-align: left;
                    }
                    img{
                        display: inline-block;
                        vertical-align: middle;
                        width: 25px;
                        height: 25px;
                    }
                }
            }
            .functionalRequirement{
                width: 50%;
                overflow: hidden;
                padding: 15px 0;
                border-top: solid 1px #eee;
                margin: 0 auto;
                margin-top: 80px;
            }
        }
        .wraper{
            width: 81%;
            overflow: hidden;
            background: #fff;
            float: right;
            box-sizing: border-box;
        }
    }
    a{
        text-decoration: none;
    }
    a.menu{
        display: block;
        width: 33px;
        height: 33px;
        background: url('../../../assets/menu.png') center no-repeat;
        background-size: 100%;
        float: right;
        cursor: pointer;
    }
    /* 图片上传 */
    .avatar-uploader .el-upload {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }
    .avatar-uploader .el-upload:hover {
        border-color: #409EFF;
    }
    .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 178px;
        height: 178px;
        line-height: 178px;
        text-align: center;
    }
    .avatar {
        width: 178px;
        height: 178px;
        display: block;
    }
    
        
</style>

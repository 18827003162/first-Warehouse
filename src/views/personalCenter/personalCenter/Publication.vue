<template>
    <div class="container">
        <div class="info">
            <h2>发布作品</h2>
            <el-input  class="titles"  v-model="title" placeholder="请输入标题"></el-input>
            <!-- <el-input class="contents" type="textarea" :rows="20"  v-model="contents" placeholder="请输入内容"></el-input> -->
            <div class="boxWrap">
                <quill-editor   ref="text" v-model="contents" class="myQuillEditor contents"  :options="editorOption" />
            </div>
      <!-- // editorOption里是放图片上传配置参数用的，例如：
// action:  '/api/product/richtext_img_upload.do',  // 必填参数 图片上传地址
// methods: 'post',  // 必填参数 图片上传方式
// token: '',  // 可选参数 如果需要token验证，假设你的token有存放在sessionStorage
// name: 'upload_file',  // 必填参数 文件的参数名
// size: 500,  // 可选参数   图片大小，单位为Kb, 1M = 1024Kb
      // accept: 'multipart/form-data, image/png, image/gif, image/jpeg, image/bmp, image/x-icon,image/jpg'  // 可选 可上传的图片格式-->
            <!-- <el-date-picker
            v-model="time1"
            class="time"
            type="date"
            placeholder="选择日期">
            </el-date-picker> -->
            <div class="btns">
                <el-button  @click="goBack">返回</el-button>
                <el-button type="primary" @click="release">发布</el-button>
            </div>
        </div>
    </div>
</template>
<script>
import { Message } from 'element-ui';
import jwt_decode from "jwt-decode";
import { formatDate } from "../common/dateTime.js";
import { quillEditor } from "vue-quill-editor";
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";
export default {
    name:'publication',
    data(){
        return{
            // time1:'',
            title:'',
            contents:'',
            //富文本编辑器
            content: "",
            editorOption: {},
        }
    },
    methods:{
        // 保存
        // preservation(){
        //     this.axios.get('')
        //     .then((res) => {
        //         Message({
        //             type: 'info',
        //             message: res.data.msg
        //         });  
        //         if(res.data.code == '0'){
        //             this.$router.push({
        //                 name:"home"
        //             })
        //         }
        //     })
        // },
        // 返回上一步
        goBack(){
            this.$router.go(-1);
        },
        // 发布
        release(){
            const time = new Date();
            // console.log(formatDate(time,'yyyy-MM-dd'))
            // return false;
            this.$http.post('/api/user/sampleReels',{
                title:this.title,
                content:this.contents,
                releaseDate:formatDate(time,'yyyy-MM-dd'),
                id:jwt_decode(window.localStorage.getItem('token')).userId
            })
            .then((res) => {
                Message({
                    type: 'info',
                    message: res.data.msg
                });  
                if(res.data.code == '0'){
                    this.$router.push({
                        name:"sampleReels"
                    })
                }
            })
        },
    },
    components: {
        quillEditor
    }
}
</script>
<style lang="scss" scoped>
    .container{
        .info{
            width: 100%;
            height:100vh;
            overflow-y: scroll;
            margin: 0;
            float: right;
            padding: 15px;
            background: #f3f5f7;
            box-sizing: border-box;
            h2{
                border-bottom: solid 1px #ddd;
                font-weight: 500;
                height: 50px;
                line-height: 50px;
                padding: 20px 0;
            }
            .titles{
                width: 30%;
                display: block;
                margin: 20px auto;
            }
            .boxWrap{
                display: block;
                height: 400px;
                overflow: hidden;
                .contents{
                    display: block;
                    width: 80%;
                    height: 200px;
                    margin: 20px auto;
                }
            }
            
            .time{
                float: right;
                margin-right: 10%;
            }
            .btns{
                
                width: 100%;
                height: 40px;
                padding: 20px;
                box-sizing: border-box;
                text-align: center;
                .el-button{
                    width: 110px;
                }
            }
        }
    }            
</style>



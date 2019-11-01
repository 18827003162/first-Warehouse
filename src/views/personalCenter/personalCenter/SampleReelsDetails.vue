<template>
    <div class="sampleReelsDetailsContainer">
        <div class="info">
            <h2>{{ dataList.title }}</h2>
            <p>{{ dataList.releaseDate }}</p>
            <div class="contentDetail" v-html="dataList.content"></div>
            <div class="btns">
                <el-button type="success" @click="goBack">返回</el-button>
            </div>
        </div>
    </div>
</template>
<script>
// import { Message } from 'element-ui';
import { formatDate } from "../common/dateTime.js";
export default {
    name:'publication',
    data(){
        return{
            dataList:{},
            id:'',
        }
    },
    methods:{
        // 返回上一步
       goBack(){
           this.$router.go(-1);
       }
    },
    created(){
        // 查询作品详情
        this.$http.post(`/api/user/worksDetail`,{
            id:this.$route.query.id
        }).then((res) => {
            if(res.data.code == 0){
                this.dataList = res.data.data;
                this.dataList.releaseDate = formatDate(res.data.data.releaseDate,'yyyy-MM-dd');
                this.dataList.content =  res.data.data.content;
                console.log(this.id,'this.id')
            }else{
                console.log(res);
            }
        })
        
        // 去重浏览量
        this.$http.post(`/api/user/formNumber`,{
            infoType:this.$route.query.id
        }).then((res) => {
            console.log(res,'浏览量返回结果')
        })
        
    },
}
</script>
<style lang="scss" scoped>
    .sampleReelsDetailsContainer{
        .info{
            width: 100%;
            height:100vh;
            overflow-y: scroll;
            margin: 0;
            float: right;
            padding: 20px;
            background: #fff;
            box-sizing: border-box;
            h2{
                border-bottom: solid 1px #ddd;
                font-weight: 500;
                height: 40px;
                line-height: 40px;
                padding: 10px 0;
            }
            .contentDetail{
                text-indent: 2em;
            }
            .btns{
                overflow: hidden;
                margin-top: 50px;
                width: 100%;
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



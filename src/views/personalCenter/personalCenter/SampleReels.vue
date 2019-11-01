<template>
    <div class="sampleReelsContainer">
        <div class="info">
            <h2>
                <span>作品集</span>
                <span>
                    <el-input v-model="title" placeholder="请输入您要搜索的标题"></el-input>
                    <el-button type="default" @click="serach"> <i class="el-icon-search"></i></el-button>
                </span>
                <span>
                    <router-link to="/publication" class="newlyAdded"></router-link>
                </span>
            </h2>
            <ul>
                <li v-for="(item,index) in dataList" :key="index">
                    <img src="../../../assets/22.jpg" alt="">
                    <div>
                        <h4>{{ item.title }}</h4>
                        <p><span class="time">{{ item.releaseDate }}</span ><span class="browseVolume">浏览量</span> </p>
                        <a @click="jumpDetails(item)">查看详情</a>
                    </div>
                </li>
                <!-- <li>
                    <img src="../../assets/22.jpg" alt="">
                    <div>
                        <h4>标题</h4>
                        <p>内容简述</p>
                        <router-link to="/">查看详情</router-link>
                    </div>
                </li>
                <li>
                    <img src="../../assets/22.jpg" alt="">
                    <div>
                        <h4>标题</h4>
                        <p>内容简述</p>
                        <router-link to="/">查看详情</router-link>
                    </div>
                </li> -->
            </ul>
        </div>
    </div>
</template>
<script>
import jwt_decode from "jwt-decode";
import { formatDate } from "../common/dateTime.js";
export default {
    name:"sampleReels",
    data(){
        return{
            title:"",//搜索
            dataList:[],
        }
    },
    methods:{
        // 查看详情跳转
        jumpDetails(row){
            this.$router.push({
                name:"sampleReelsDetails",
                query:{id:row.id}
            })
        },
        // 搜索
        serach(){
            this.$http.post('/api/user/workListSearch',{
                id:jwt_decode(window.localStorage.getItem('token')).userId,
                title:this.title,
            }).then(res => {
                console.log(res,'res');
                this.dataList = res.data;
            })
        },
    },
    created(){
        // 查询作品列表
        this.$http.post(`/api/user/workList`,{
            id:jwt_decode(window.localStorage.getItem('token')).userId,
            // title:this.title,
        })
            .then((res) => {
                console.log(res)
                this.dataList = res.data;
                for(let i in this.dataList){
                    this.dataList[i].releaseDate = formatDate(this.dataList[i].releaseDate,'yyyy-MM-dd')
                    
                }
            })
    },
}
</script>
<style lang="scss" scoped>
    .sampleReelsContainer{
        width: 100%;
        height:100vh;
        overflow: hidden;
        background-image: linear-gradient(to top, #fff1eb 0%, #ace0f9 100%);
        .info{
            width: 98%;
            height:100vh;
            overflow-y: scroll;
            margin: 0;
            float: right;
            // padding: 20px;
            box-sizing: border-box;
            h2{
                text-indent: 2em;
                font-weight: 600;
                height: 50px;
                line-height: 50px;
                margin: 20px 0;
                span{
                    width: 30%;
                    height: 40px;
                    line-height: 40px;
                    float: left;
                    overflow: hidden;
                    .el-input{
                        width: 60%;
                        float: left;
                    }
                    .el-button{
                        float: right;
                    }
                    .newlyAdded{
                        width: 30px;
                        height: 30px;
                        float: right;
                        background: url('../../../assets/add.png') center no-repeat #ff781a;
                        background-size: 50%;
                        border-radius: 50%;
                        margin-top: 10px;
                    }
                }
                // p{
                //     width: 70%;
                //     float: right;
                //     height: 50px;
                //     line-height: 50px;
                //     padding-right: 20px;  
                //     margin: 0; 
                // }
            }
            ul{
                width: 100%;
                overflow: hidden;
                box-sizing: border-box;
                li{
                    width: 30%;
                    display: inline-block;
                    box-shadow: 0 0 5px #aeaeae;
                    margin: 10px;
                    background: #fff;
                    padding-bottom: 10px;
                    img{
                        width: 100%;
                    }
                    h4{
                        font-size: 17px;
                        text-align: center;
                    }
                    p{
                        line-height: 30px;
                        text-align: center;
                        padding: 0 10px;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                        overflow: hidden;
                        span{
                            width:40%;
                            line-height: 30px;
                            text-align: left;
                            text-indent: 2em;
                            display: inline-block;
                        }
                        .time{
                            background: url('../../../assets/Clock.png') left no-repeat;
                            margin-right: 20px;
                        }
                        span.browseVolume{
                            background: url('../../../assets/eye.png') left no-repeat;
                        }
                    }
                    a{
                        display: block;
                        cursor: pointer;
                        width: 100px;
                        font-size: 14px;
                        height: 30px;
                        line-height: 30px;
                        text-align: center;
                        box-shadow: 0 0 5px #aeaeae;
                        margin: 15px auto;
                    }
                }
            }
        }
    }
</style>


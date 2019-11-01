<template>
    <div class="essentialInformationContainer">
        <div class="info">
            <h2>
                <span>基本资料</span>
                <router-link to="/changeInfo">修改资料</router-link>
            </h2>
            <h4>基本信息</h4>
            <p>昵称：<span>{{ dataInfos.name == ''?'暂无':dataInfos.name }}</span></p>
            <p>真实姓名：<span>{{ dataInfos.nickName == ''?'暂无':dataInfos.nickName }}</span></p>
            <p>个性签名：<span>{{ dataInfos.signature == ''?'暂无':dataInfos.signature }}</span></p>
            <p>职业：<span>{{ dataInfos.occupation == ''?'暂无':dataInfos.occupation }}</span></p>
            <p>星座：<span>{{ dataInfos.constellation | formateConstellation }}</span></p>
            <p>生日：<span>{{ dataInfos.birthday == ''?'暂无':dataInfos.birthday }}</span></p>
            <h4>兴趣爱好</h4> 
            <p v-if="hobbyList == ''"><span>暂无数据</span></p>
            <p v-else v-for="(itemOne,indexOne) in hobbyList" :key="indexOne+'one'"><span>{{ itemOne }}</span></p>
            <!-- <p><span>游戏</span></p>
            <p><span>听歌</span></p>
            <p><span>徒步</span></p> -->
            <h4>音乐</h4>  
            <p v-if="musicList == ''"><span>暂无数据</span> </p>
            <p v-for="(itemTwo,indexTwo) in musicList" :key="indexTwo+'two'"><span>{{ itemTwo.songName }}</span>——<span>{{ itemTwo.singer }}</span></p>
            <h4>游戏</h4>
            <p v-if="ganmeList == ''"><span>暂无数据</span></p>
            <p v-for="(item,index) in ganmeList" :key="index"><span>{{ item }}</span></p>
            <!-- <p><span>DNF</span></p>
            <p><span>英雄杀</span></p> -->
        </div>
    </div>
</template>
<script>
import jwt_decode from "jwt-decode";
export default {
    name:'essentialInformation',
    data(){
        return {
            dataInfos:{
                name:'',
                nickName:'',
                signature:'',
                occupation:'',
                constellation:'',
                birthday:''
            },
            ganmeList:'',
            hobbyList:'',
            musicList:'',
            userId:'',
        }
    },
    filters:{
        formateConstellation(val){
            switch (val){
                    case '' :
                        return '暂无';
                    case '1' :
                        return '白羊座';
                    case '2' :
                        return '金牛座';
                    case '3' :
                        return '双子座';
                    case '4' :
                        return '巨蟹座';    
                    case '5' :
                        return '狮子座';
                    case '6' :
                        return '处女座'; 
                    case '7' :
                        return '天秤座';      
                    case '8' :
                        return '天蝎座';
                    case '9' :
                        return '射手座'; 
                    case '10' :
                        return '摩羯座'; 
                    case '11' :
                        return '水瓶座';
                    case '12' :
                        return '双鱼座';            

                }
        }
    },
    created(){
        this.userId = jwt_decode(window.localStorage.getItem('token')).userId;
    },
    mounted(){
        console.log(this.$store.state.count,'count')
        // 查询个人信息
        this.$http.post(`/api/user/personalInformation`,{
            userId:this.userId
        })
            .then((res) => {
                console.log(res)
                if(res.data.code == 0){
                    this.dataInfos = res.data.data;
                    this.ganmeList = this.dataInfos.favoriteGames.split(',');
                    this.hobbyList = this.dataInfos.checkList.split(',');
                    this.dataInfos.birthday = res.data.data.birthday.substr(0,10);
                }
                console.log(this.hobbyList=='','this.hobbyList')
            })
        
        // 查询已选音乐列表
        this.$http.post(`/api/user/musicId`,{
            userId:jwt_decode(window.localStorage.getItem('token')).userId
        })
            .then((res) => {
                console.log(res);
                this.musicList = res.data
                
            })
    }
}
</script>
<style lang="scss" scoped>
    .essentialInformationContainer{
        .info{
            width: 100%;
            height:100vh;
            overflow-y: scroll;
            margin: 0;
            float: right;
            padding: 15px;
            background-image: linear-gradient(to top, #6a85b6 0%, #bac8e0 100%);
            box-sizing: border-box;
            h2{
                border-bottom: solid 1px #ddd;
                font-weight: 500;
                height: 50px;
                line-height: 50px;
                padding: 20px 0;
                a{
                    float: right;
                    height: 40px;
                    line-height: 40px;
                    margin-right: 40px;
                    font-size: 14px;
                    border-radius: 5px;
                    background: #16c2ea;
                    color: #fafafa;
                    padding:0 10px; 
                }
            }
            p{
                // display: block;
                text-indent: 2em;
                margin:10px 0;
                height: 40px;
                line-height: 40px;
                span{
                    background-image: linear-gradient(to right, #1488cc, #2b32b2);
                    -webkit-background-clip: text;
                    color: transparent;
                }
            }
        }
    }
</style>



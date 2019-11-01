<template>
 <div class="welcomeWrap" :class="{active:type}">
   <!-- 欢迎页 -->
   <div class="welcomePos">
     <div class="welcomePosContent" @click="showClick">
       <div class="imgPic"></div>
       <p class="welcomePosContentText">Welcome To The New World</p>
     </div>
   </div>
 </div>
</template>

<script>
import { setTimeout } from 'timers';
 export default {
   name: 'welcome',
   data () {
     return {
       type:false
     }
   },
   methods:{
     showClick(){
       this.type = true;
       setTimeout(function(){
         this.type = false;
       },1000)
       console.log(this.type)
     }
   },
  //  components: {

  //  }
 }
</script>

<style lang="scss" scoped>
  html,body{
     width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .welcomeWrap{
    width: 100%;
    height: 100vh;
    overflow: hidden;
    position: relative;
    
    .welcomePos{
      width: 100%;
      height: 100%;
      overflow: hidden;
      position: absolute;
      left: 0;
      top: 0;
      .welcomePosContent{
        cursor: pointer;
        display: block;
        width: 500px;
        height: 200px;
        position: absolute;
        left: 50%;
        top: 50%;
        margin-left: -250px;
        margin-top: -100px;
        
        .imgPic{
          width: 100px;
          height: 100px;
          margin: 0 auto;
          background: url(../../../assets/hongxin.jpg) center no-repeat;
          background-size: 100%;
        }
        .welcomePosContentText{
          height: 60px;
          line-height: 60px;
          padding: 20px 0;
          margin: 0;
          text-align: center;
          font-size:26px;
          font-weight: bold;
          background-image: linear-gradient(to right, #1488cc, #2b32b2);
          -webkit-background-clip: text;
          color: transparent;
          // transform:  translateX(-1000px);
          animation: move 2s ease;
          // animation-delay:1s;
        }
        @keyframes move{
          0% {
            transform:  translateX(-1000px);
          }
          100% {
            transform:  translateX(0);
          }
        }
        @keyframes show{
          0% {
            opacity:  1;
          }
          100% {
            opacity:  0;
          }
        }
      }
    }

  }
  .welcomeWrap.active{
    animation: show 2s ease;
  }
 
</style>

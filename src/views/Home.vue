<template>
  <div class="home">
    <!-- 顶部导航 -->
    <div class="nav-top">
      <router-link  to="/essentialInformation">个人中心</router-link>
      <p class="login">
        <router-link v-if="this.username === undefined || this.username === ''"  to="/login">注册/登录</router-link>
        <el-popover
        v-else
        placement="top-start"
        width="50"
        trigger="hover">
          <p><router-link to="/login">注销账户</router-link></p>
          <span  slot="reference">您好 &nbsp;<a>{{username}}</a></span>
        </el-popover>
      </p>
    </div>
    <!-- 背景 -->
    <div class="backgrounds">
      <el-carousel :interval="3000" :autoplay="false"  type="card" height="400px">
        <el-carousel-item >
          <div class="picWrap">
            <img src="../assets/banner1.jpg" alt="">
          </div>
        </el-carousel-item>
        <el-carousel-item >
          <div class="picWrap">
            <img src="../assets/banner2.jpg" alt="">
          </div>
        </el-carousel-item>
        <el-carousel-item >
          <div class="picWrap">
            <img src="../assets/banner3.jpg" alt="">
          </div>
        </el-carousel-item>
        <el-carousel-item >
          <div class="picWrap">
            <img src="../assets/banner4.jpg" alt="">
          </div>
        </el-carousel-item>
        <el-carousel-item >
          <div class="picWrap">
            <img src="../assets/banner5.jpg" alt="">
          </div>
        </el-carousel-item>
      </el-carousel>
      
      <!-- <el-carousel :interval="3000" arrow="always" :autoplay="false">
        <el-carousel-item v-for="(item,index) in bannerList" :key="index">
          <img :src="item.imgUrl" alt="">
        </el-carousel-item>
      </el-carousel> -->
    </div>
    
    <!-- 分类导航 -->
    <div class="classifiedNav">
      <el-menu
        :default-active="activeIndex2"
        class="el-menu-demo"
        mode="horizontal"
        style="border:none;"
        @select="handleSelect"
        >
        <el-menu-item index="1">音乐</el-menu-item>
        <el-menu-item index="2">话剧</el-menu-item>
        <el-menu-item index="3" >舞蹈</el-menu-item>
        <el-menu-item index="4" >书法</el-menu-item>
        <el-menu-item index="5"><a href="https://www.ele.me" target="_blank">悄悄话</a></el-menu-item>
      </el-menu>
    </div>
    <!-- 具体内容 -->
    <div class="contents">
      <ul>
        <li>
          <div>
            <a><img src="./../assets/content1.jpg" alt=""></a>
            <h4>这里是标题</h4>
            <p>这里是内容简述</p>
          </div>
        </li>
        <li>
          <div>
            <a><img src="./../assets/content1.jpg" alt=""></a>
            <h4>这里是标题</h4>
            <p>这里是内容简述</p>
          </div>
        </li>
        <li>
          <div>
            <a><img src="./../assets/content1.jpg" alt=""></a>
            <h4>这里是标题</h4>
            <p>这里是内容简述</p>
          </div>
        </li>
        <li>
          <div>
            <a><img src="./../assets/content1.jpg" alt=""></a>
            <h4>这里是标题</h4>
            <p>这里是内容简述</p>
          </div>
        </li>
      </ul>
      <a class="more" @click="moreClick">more</a>
    </div>
  </div>
</template>

<script>

export default {
  name:"home",
  data() {
    return {
      activeIndex2: '1',
      username:'',
      bannerList:[
        {
          imgUrl:'../assets/banner1.jpg',
        },
        {
          imgUrl:'../assets/banner2.jpg',
        },
        {
          imgUrl:'../assets/banner3.jpg',
        }
      ]
    };
  },
  methods: {
    // 更多
    moreClick(){
      this.$router.push({
          name:"welcome"
      })
    },
    // 分类导航点击事件
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    
  },
  mounted:function() {
    // vuex state
    this.$store.commit("count",1); 

    if(window.localStorage.username){
      this.username = window.localStorage.username.replace("\"","").replace("\"","");

    }
    console.log(this.username)
    // this.$http.get(`/api/user/useall`)
    //   .then((res) => {
    //       console.log(res)
    //   })
  }
  
}
</script>
<style lang="scss" scoped>
  html,body{
    width: 100%;
    height: 100%;
    overflow-y: scroll;
  }
  ul{
    list-style: none;
    padding: 0;
    }
  
  .nav-top{
    width: 100%;
    height: 50px;
    line-height: 50px;
    background-color: #000;
    color: #f0f0f0;
    padding: 0 10px;
    box-sizing: border-box;
    font-size: 14px;
    a{
      text-decoration:none;
      cursor: pointer;
      color: #fff;
    }
  }
  .login{
      float: right;
      margin: 0;
      a{
        line-height: 50px;
      }
  }
  .backgrounds{
    display: block;
    width: 100%;
    margin: 0 auto;
    height: 400px;
    padding: 20px;
    box-sizing: border-box;
    margin-bottom: 30px;
    // background:#05121a url(./../assets/bg1.jpg) no-repeat center;
    // background-size:60%;
    /* margin-bottom: -50px;   */
    .el-carousel{
      width: 100%;
      overflow: hidden;
      // height: 400px;
      .el-carousel__container,.el-carousel__item.is-animating{
        width: 100%;
        overflow: hidden;
        // height: 400px;
      }
      
      .picWrap{
        background-color: #000;
        img{
          opacity:0.6; 
          filter: alpha(opacity=60);
          display: block;
          margin: 0 auto;
          width: 1024px;
          height: 400px;
        }
      }
      .el-carousel__item.is-active.el-carousel__item--card.is-in-stage{
        .picWrap{
          background-color: transparent;
          img{
             opacity:1;
          }
        }
      }
    }
  }
  .classifiedNav{
    width: 100%;
    margin-top: 10px;
    height: 50px;
    background: #fff;
    .el-menu-demo{
      width: 1200px;
      height: 50px;
      margin: 0 auto;
    }
  }
  .contents{
    width: 100%;
    margin: 10px auto;
    background: #f4f4f4;
    min-height: 300px;
    overflow: hidden;
    ul{
      display: block;
      width: 1200px;
      margin: 20px auto;
      li{
        display: inline-block;
        height: 300px;
        background: #fff;
        border: solid 1px #ddd;
        width: 22%;
        margin: 0 8px;
        h4{
          font-weight: normal;
          line-height: 30px;
        }
        div{
          display: inline-block;
          width: 100%;
          height: 100%;
          padding: 10px;
          box-sizing: border-box;
          img{
            width: 100%;
            height: 150px;
          }
          a{
            display: block;
            width: 100%;
            height: 150px;
          }
        }
      }
    }
    a{
      display: block;
      width: 100px;
      height: 30px;
      border-radius: 5px;
      margin: 20px auto;
      background: #fff;
      color: #000;
      box-shadow: 0 0 5px #aeaeae;
      cursor: pointer;
      text-align: center;
      line-height: 30px;
    }
  }
</style>


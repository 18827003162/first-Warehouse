<template>
    <div class="container">
        <h2>我的动态</h2>
        <div class="infoList">
            <ul>
                <li>
                    <div class="listItem">
                        <!-- 动态标题 -->
                        <div class="dynamicHeadings">
                            <img src="../../../assets/man.jpg" alt="">
                            <span class="participantsName"><a href="">史珍香</a> @你</span>
                        </div>
                        <!-- 参与的动态内容 -->
                        <div class="dynamicContent">
                            <div class="contentTexts">
                                <p>今天天气很不错啊，有一起去外面逛逛的吗</p>
                                <div>
                                    <img src="../../../assets/clearSky.jpg" alt="">
                                </div>
                            </div>
                            <div class="picList">
                                <a href="" class="headPortrait"><img src="../../../assets/women.jpg" alt=""></a>
                                <div class="comment">
                                    <p>
                                        <a  href="">发小——史珍香</a>
                                        <span class="times">2018年6月6日 12:10</span>
                                    </p>
                                    <p>好啊，什么时间</p>
                                    <!-- <p>回复    <a href="">我</a> 现在就出门</p> -->
                                </div>
                            </div>
                            <div class="picList">
                                <a href="" class="headPortrait"><img src="../../../assets/women.jpg" alt=""></a>
                                <div class="comment">
                                    <p>
                                        <a  href="">小明</a>
                                        <span class="times">2018年6月6日 12:10</span>
                                    </p>
                                    <p>回复    <a href="">我</a> 现在就出门</p>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    name:"myDynamics",
    data(){
        return{

        }
    },
    methods:{

    }
}
</script>
<style lang="scss" scoped>
    .container{
        width: 100%;
        height:100vh;
        overflow-y: scroll;
        margin: 0;
        float: right;
        padding:0 15px;
        box-sizing: border-box;
        background-image: linear-gradient(to top, #0c3483 0%, #a2b6df 100%, #6b8cce 100%, #a2b6df 100%);
        h2{
            margin:  10px 0;
        }
        .infoList{
            width: 100%;
            overflow: hidden;
            ul{
                width: 100%;
                overflow: hidden;
                box-sizing: border-box;
                padding: 0;
                margin: 0;
                li{
                    width: 100%;
                    overflow: hidden;
                    padding: 0 20px;
                    margin-bottom: 30px;
                    border-bottom: solid 1px #ccc;
                    box-sizing: border-box;
                    .listItem{
                        width: 100%;
                        overflow: hidden;
                        .dynamicHeadings{
                            width: 100%;
                            overflow: hidden;
                            img{
                                width: 60px;
                                height: 60px;
                                float: left;
                            }
                            span{
                                float: left;
                                padding: 0 20px;
                                height: 60px;
                                line-height: 60px;
                                font-size: 22px;
                                box-sizing: border-box;
                                overflow: hidden;
                            }
                        }
                        .dynamicContent{
                            width: 100%;
                            overflow: hidden;
                            .contentTexts{
                                width: 100%;
                                overflow: hidden;
                                margin-bottom: 10px;
                                line-height: 40px;
                                font-size: 20px;
                                color: #666;
                                p{
                                    margin:10px 0;
                                }
                                div{
                                    width: 50%;
                                    overflow: hidden;
                                    img{
                                        width: 100%;
                                        height: 200px;
                                    }
                                }
                            }
                            .picList{
                                width: 100%;
                                overflow: hidden;
                                margin-bottom: 10px;
                                .headPortrait{
                                    float: left;
                                    width: 60px;
                                    height: 60px;
                                    margin-right: 20px;
                                    img{
                                        width: 60px;
                                        height: 60px;
                                    }
                                }
                                .comment{
                                    width: 90%;
                                    // padding-left: 80px;
                                    box-sizing: border-box;
                                    height: 60px;
                                    float: left;
                                    overflow: hidden;
                                    p{
                                        height: 30px;
                                        line-height: 30px;
                                        margin: 0;
                                    }
                                    .times{
                                        display: block;
                                        float: right;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }    
    }
</style>

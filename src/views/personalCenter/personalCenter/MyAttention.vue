<template>
    <div class="myAttentionContainer">
        <h2>
            <span>我的关注</span>
            <a class="addFriends" @click="addFriends"></a>
            <el-dialog
                title="列表"
                :visible.sync="centerDialogVisible"
                width="800px"
                center>
                <div class="add">
                    <div class="searchInfo">
                        <el-input v-model="names" maxlength="20"></el-input>
                        <el-button type="primary" @click="search">搜 索</el-button>
                    </div>
                    <el-table
                    :data="tableData"
                    tooltip-effect="dark"
                    @selection-change="handleSelectionChange"
                    style="width: 100%"
                    >
                        <el-table-column
                        type="selection"
                        width="55">
                        </el-table-column>
                        <el-table-column
                        prop="nickName"
                        label="昵称"
                        width="180">
                        </el-table-column>
                        <el-table-column
                        prop="personalLabel"
                        label="个人标签"
                        width="180">
                        </el-table-column>
                        <el-table-column
                        prop="starClass"
                        label="星级"
                        >
                        </el-table-column>
                    </el-table>  
                  
                </div>
                <span slot="footer" class="dialog-footer">
                    <el-button @click="centerDialogVisible = false">取 消</el-button>
                    <el-button type="primary" @click="addInfos">提 交</el-button>
                </span>
            </el-dialog>
        </h2>
         <ul v-for="(item,index) in friendsList" :key="index">
            <li>
                <img src="../../../assets/head.jpg" alt="">
                <span>{{item.name}}</span>
                <el-button type="text" @click="removeConcerns">取消关注</el-button>
                <router-link to="/">Go</router-link>
            </li>
            
        </ul>
    </div>
</template>
<script>
export default {
    name:"myAttention",
    data(){
        return{
            names:'',
            tableData:[
                {
                    nickName:'夜言',
                    personalLabel:'冷傲',
                    starClass:'心灵大师',
                },
                {
                    nickName:'夜言',
                    personalLabel:'冷傲',
                    starClass:'心灵大师',
                }
            ],
            friendsList:[
                {
                    name:'张三',
                    img:'',
                },
                {
                    name:'李四',
                    img:'',
                },
                {
                    name:'jack',
                    img:'',
                },
                {
                    name:'Marks Evans',
                    img:'',
                },
                {
                    name:'xiaoshi',
                    img:'',
                },
            ],
            centerDialogVisible:false,

        }
    },
    methods:{
        // 取消关注
        removeConcerns(){

        },
        // 添加关注好友
        addFriends(){
            this.centerDialogVisible = true;

        },
        // 弹出层搜索
        search(){

        },
        // 弹出层勾选事件
        handleSelectionChange(val){
            console.log(val)
        },
        // 弹出层提交
        addInfos(){

        },
    }
}
</script>
<style lang="scss" scoped>
    .myAttentionContainer{
            width: 100%;
            height:100vh;
            overflow-y: scroll;
            margin: 0;
            float: right;
            padding: 15px;
            box-sizing: border-box;
            overflow: hidden;
            background-image: linear-gradient(to top, #accbee 0%, #e7f0fd 100%);
            h2{
                height: 50px;
                line-height: 50px;
                text-indent: 2em;
                border-bottom: solid 1px #eee;
                .addFriends{
                    width: 30px;
                    height: 30px;
                    cursor: pointer;
                    margin-top: 10px;
                    border-radius: 100%;
                    margin-right: 30px;
                    background: url('../../../assets/add.png') center no-repeat #ff781a;
                    background-size: 50%;
                    float: right;
                }
            }
            .searchInfo{
                .el-input{
                    display: inline-block;
                    width: 50%;
                    margin-right: 80PX;
                }
                .el-button{
                    display: inline-block;
                }
            }
            ul{
                width: 100%;
                overflow: hidden;
                margin-top: 30px;
                li{
                    display: block;
                    width: 80%;
                    float: left;
                    height: 50px;
                    line-height: 50px;
                    background: #fff;
                    margin-bottom: 20px;
                    padding: 10px 20px;
                    img{
                        display: inline-block;
                        width: 40px;
                        height: 40px;
                        border-radius: 50%;
                        margin-right: 20px;
                        vertical-align: middle;
                    }
                    span{
                        height: 40px;
                        line-height: 40px;
                        font-size: 14px;
                        color: #000;
                    }
                    a{
                        width: 80px;
                        height: 40px;
                        float: right;
                        line-height: 40px;
                        margin-right: 20px;
                        margin-top: 5px;
                        vertical-align: bottom;
                        text-align: center;
                        background: #8fa4af;
                        color: #fff;
                        border-radius:20px; 
                    }
                    .el-button{
                        text-align: center;
                        float: right;
                        margin-top: 5px;
                        margin-right: 8%;
                        span{
                            width: 60px;
                            height: 50px;
                            line-height: 50px;
                        }
                    }
                }
            }
    }
</style>



<template>
    <div class="ChangeInfoContainer">
        <div class="info">
            <h2>修改资料</h2>
            <div class="contents">
                <h3>基本信息</h3>
                <p>
                    <span>真实姓名：</span>
                    <el-input v-model="name" placeholder="请输入您的真实姓名"></el-input>
                </p>
                <p>
                    <span>昵称：</span>
                    <el-input v-model="nickName" placeholder="请输入昵称"></el-input>
                </p>
                <p>
                    <span>个性签名：</span>
                    <el-input v-model="signature" placeholder="请输入个性签名"></el-input>
                </p>
                <p>
                    <span>职业：</span>
                    <el-input v-model="occupation" placeholder="请输入职业"></el-input>
                    <!-- <el-autocomplete
                    class="inline-input"
                    v-model="occupation"
                    :fetch-suggestions="querySearch"
                    placeholder="请输入内容"
                    @select="handleSelect"
                    ></el-autocomplete> -->
                </p>
                <p>
                    <span>星座：</span>
                    <el-select v-model="constellation" placeholder="请选择">
                        <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                </p>
                <p>
                    <span>生日：</span>
                    <el-date-picker
                    v-model="birthday"
                    type="date"
                    placeholder="选择日期">
                    </el-date-picker>
                </p>
                <h3>兴趣爱好</h3>
                <p>
                    <el-checkbox-group v-model="checkList" @change="hobby">
                        <el-checkbox label="唱歌"></el-checkbox>
                        <el-checkbox label="打游戏"></el-checkbox>
                        <el-checkbox label="看电影"></el-checkbox>
                        <!-- <el-checkbox label="桌球" disabled></el-checkbox> -->
                    </el-checkbox-group>
                    <!-- 喝茶 绘画 围棋 收藏 集邮 游泳 斗地主 养小动物 书法 跑步 旅游 唱歌（戏）养花草 做饭 剪纸 雕刻 羽毛球、 篮球、足球、自行车、 乒乓球 网球 保龄球 高尔夫球 -->
                </p>
                <h3>音乐 <el-button type="primary" icon="el-icon-plus" @click="centerDialogVisible = true">添加音乐</el-button></h3>
                <p>
                    
                    <el-dialog
                    title="请勾选您最喜欢的三首曲目"
                    :visible.sync="centerDialogVisible"
                    width="50%"
                    center>
                    <div class="tableWraper">
                        <el-table
                            ref="multipleTable"
                            :data="tableData"
                            tooltip-effect="light"
                            style="width: 100%"
                            @selection-change="handleSelectionChange">
                            <el-table-column
                            type="selection"
                            width="80">
                            </el-table-column>
                            <el-table-column
                            label="歌曲"
                            prop="songName"
                            width="220">
                            </el-table-column>
                            <el-table-column
                            prop="singer"
                            label="歌手"
                            width="220">
                            </el-table-column>
                            <el-table-column
                            prop="lssueTime"
                            label="发行时间"
                            show-overflow-tooltip>
                            <template slot-scope="scope">{{ scope.row.lssueTime.substr(0,10)  }}</template>
                            </el-table-column>
                        </el-table>
                    </div>
                    <div slot="footer" class="dialog-footer">
                        <el-button @click="cancelMusic">取 消</el-button>
                        <el-button type="primary" @click="addMusic">确 定</el-button>
                    </div>
                    </el-dialog>
                    <el-table
                    :data="tableDataChosen"
                    border
                    class="tableDataChosen"
                    style="width: 80%">
                        <el-table-column
                        type="index"
                        width="50">
                        </el-table-column>
                        <el-table-column
                            prop="songName"
                            label="歌曲"
                            width="180">
                        </el-table-column>
                        <el-table-column
                            prop="singer"
                            label="歌手"
                            width="180">
                        </el-table-column>
                        <el-table-column
                            prop="lssueTime"
                            width="180"
                            label="发行日期">
                            <template slot-scope="scope">{{ scope.row.lssueTime.substr(0,10)  }}</template>
                        </el-table-column>
                        <el-table-column
                            label="操作">
                            <template slot-scope="scope">
                                <el-button type="text" size="small" @click="deleteMusic(scope.$index)">删除</el-button>
                            </template> 
                        </el-table-column>
                    </el-table>
                </p>
                <h3>游戏<el-button type="primary" icon="el-icon-plus" @click="gamePopupType = true">添加游戏</el-button></h3>
                <p>
                    <ul class="favoriteGamesList">
                        <li v-for="(item,index) in favoriteGames" :key="index">
                            <el-button type="success" >{{item}} <i class="el-icon-close el-icon--right" @click="deleteGame(index)"></i></el-button>
                        </li>
                    </ul>
                    <el-dialog
                        title="请勾选您最喜欢的三种游戏"
                        :visible.sync="gamePopupType"
                        width="50%"
                        center>
                        <div class="gameList">
                            <el-checkbox-group v-model="checkboxGroup" size="mini" @change="gameChosen">
                                <el-checkbox  label="英雄联盟" border></el-checkbox>
                                <el-checkbox  label="荒野求生" border></el-checkbox>
                                <el-checkbox  label="王者荣耀" border></el-checkbox>
                                <el-checkbox  label="劲舞团" border></el-checkbox>
                                <el-checkbox  label="魔兽世界" border></el-checkbox>
                            </el-checkbox-group>
                        </div>
                        <div slot="footer" class="dialog-footer">
                            <el-button @click="cancelGames">取 消</el-button>
                            <el-button type="primary" @click="addGames">确 定</el-button>
                        </div>
                    </el-dialog>
                    
                </p>
                <div class="btns">
                    <el-button @click="goBack">返回</el-button>
                    <el-button type="primary" @click="submit">提交</el-button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { Message } from 'element-ui';
import { formatDate } from "../common/fordate.js";
import jwt_decode from "jwt-decode";
export default {
    name:'changeInfo',
    data(){
        return{
            userId:'',//用户ID
            userListId:'',//用户列表id
            tableDataChosen: [],
            tableData: [],
            multipleSelection: [],
            checkList:['唱歌'],
            restaurants: [],
            name:'',
            nickName:'',
            signature:'',
            occupation:'',
            constellation: '',
            birthday:'',
            centerDialogVisible:false,
            gamePopupType:false,
            options: [{
                value: '1',
                label: '白羊座 （3.21-4.20）'
                }, {
                value: '2',
                label: '金牛座 （4.21-5.20）'
                }, {
                value: '3',
                label: '双子座 （5.21-6.21）'
                }, {
                value: '4',
                label: '巨蟹座 （6.22-7.22）'
                }, {
                value: '5',
                label: '狮子座  （7.23-8.22）'
                }, {
                value: '6',
                label: '处女座 （8.23-9.22）'
                }, {
                value: '7',
                label: '天秤座 （9.23-10.23）'
                }, {
                value: '8',
                label: '天蝎座 （10.24-11.21）'
                }, {
                value: '9',
                label: '射手座 （11.22-12.21）'
                }, {
                value: '10',
                label: '摩羯座 （12.22-1.19）'
                }, {
                value: '11',
                label: '水瓶座 （1.20-2.18）'
                }, {
                value: '12',
                label: '双鱼座 （2.19-3.20）'
                }
                ],
            checkboxGroup:[],
            favoriteGames:[],
            musicId:[],
            games:[],
        }
    },
    methods:{
        // 兴趣爱好勾选事件
        hobby(val){
            console.log(val)
            this.checkList = val;
        },
        // 删除音乐
        deleteMusic(index){
            this.tableDataChosen.splice(index,1)
        },
        // 添加音乐
        addMusic(){
            this.centerDialogVisible = false;
            this.tableDataChosen = this.multipleSelection;
            console.log(this.tableDataChosen,'tableDataChosen')
            this.musicId = [];
            for(let i in this.multipleSelection){
                this.musicId.push(this.multipleSelection[i].id)
            }
            console.log(this.musicId,'this.musicId')
            this.$refs.multipleTable.clearSelection();
        },
        // 取消选择音乐
        cancelMusic(){
            this.centerDialogVisible = false;
            this.$refs.multipleTable.clearSelection();
        },
        // 弹出层勾选音乐曲目事件
        handleSelectionChange(val){
            if(val.length > 3){
                alert('最多只可选择三首曲目哦~');
                this.$refs.multipleTable.clearSelection();
                return false;
            }
            this.multipleSelection = val;
            
            // console.log(this.multipleSelection)
        },
        // 弹出层勾选游戏
        gameChosen(value){
            console.log(value)
            this.games = value;
        },
        // 添加游戏弹出层取消事件
        cancelGames(){
            this.gamePopupType = false;
            this.checkboxGroup = this.favoriteGames;
        },
        // 添加游戏弹出层确认事件
        addGames(){
            this.favoriteGames = this.games;
            this.gamePopupType = false;
            this.checkboxGroup = this.favoriteGames;
        },
        // 游戏删除事件
        deleteGame(index){
            console.log(index);
            this.favoriteGames.splice(index, 1);
        },
        // 返回上一步
        goBack(){
            this.$router.go(-1);
        },
        // 提交
        submit(){
            let dateTime = '';
            // console.log(this.birthday,'this.musicId');
            if(this.birthday == null){
                dateTime = '';
            }else{
                dateTime = this.birthday;
            }
            // console.log(formatDate(this.birthday,'yyyy-MM-dd hh:mm'),'this.birthday')
            // return false;
            const checkList = this.checkList.join(',');
            const favoriteGames = this.favoriteGames.join(',');
            this.$http.post('/api/user/changUserInfo',{
                name:this.name,
                nickName:this.nickName,
                signature:this.signature,
                occupation:this.occupation,
                constellation:this.constellation,
                birthday: dateTime.length == 10? dateTime:formatDate(dateTime,'yyyy-MM-dd'),
                checkList:checkList,
                favoriteGames:favoriteGames,
                musicList:this.musicId,
                userId:this.userId,
                userListId:this.userListId
            })
            .then((res) => {
                Message({
                    type: 'info',
                    message: res.data.msg
                });  
                if(res.data.code == '0'){
                    this.$router.push({
                        name:"essentialInformation"
                    })
                }
            })
        },
    },
    mounted() {
        // 查询用户id
        this.$http.post(`/api/user/userInfo`,{
            username:window.localStorage.getItem('username')
        })
            .then((res) => {
                // console.log(res)
                this.userId = res.data.results.userId;
                this.userListId = res.data.results.id;
            })

        // 查询所有音乐列表
        this.$http.get(`/api/user/musicLists`)
            .then((res) => {
                // console.log(res,'音乐列表')
                this.tableData = res.data;
            })
            
        
        // 查询基本信息
        this.$http.post(`/api/user/personalInformation`,{
            userId:jwt_decode(window.localStorage.getItem('token')).userId
        })
            .then((res) => {
                // console.log(res)
                if(res.data.code == '0'){
                    this.name = res.data.data.name;
                    this.nickName = res.data.data.nickName; 
                    this.signature = res.data.data.signature;
                    this.occupation = res.data.data.occupation;
                    this.constellation = res.data.data.constellation;
                    this.birthday = res.data.data.birthday.substr(0,10); 
                    this.checkList = res.data.data.checkList.split(',');
                    this.favoriteGames = res.data.data.favoriteGames.split(',');
                }
            })
        
        // 查询已选音乐列表
        this.$http.post(`/api/user/musicId`,{
            userId:jwt_decode(window.localStorage.getItem('token')).userId
        })
            .then((res) => {
                // console.log(res);
                this.tableDataChosen = res.data
                
            })
            
    },
}
</script>
<style lang="scss">
    .ChangeInfoContainer{
        .el-input{
            display: inline-block;
            margin: 0;
            padding: 0;
            width: 400px;
        }
        .gameList{
                .el-checkbox{
                    display: inline-block;
                    margin:10px;
                }
            }
    }

    
</style>

<style lang="scss" scoped>
    .ChangeInfoContainer{
        .info{
            width: 100%;
            height:100vh;
            overflow-y: scroll;
            margin: 0;
            float: right;
            padding: 15px;
            // background: #f3f5f7;
            box-sizing: border-box;
            background-color:#fff;
            padding:20px;
            
            h2{
                border-bottom: solid 1px #ddd;
                font-weight: 500;
                height: 50px;
                line-height: 50px;
                padding: 20px 0;
                
            }
            h3{
                height: 40px;
                line-height: 40px;
                .el-button{
                    float:right;
                    text-align:center;
                    margin-right:20px;
                }
            }
            p{
                overflow: hidden;
                margin: 30px 0;
                padding-left: 10%;
                overflow: hidden;
                .tableDataChosen{
                    margin:20px 0;
                }
                span{
                    display: inline-block;
                    min-width: 100px;
                    text-align:right;
                    height: 40px;
                    line-height: 40px;
                    padding-right: 10px;
                }
                .el-input{
                    display: inline-block;
                    margin: 0;
                    padding: 0;
                    width: 400px;
                }
                
            }
            .btns{
                text-align:center;
                margin:30px 0;
                .el-button{
                    display: inline-block;
                    margin-right:20px;
                    width:150px;
                }
            }
            
            .favoriteGamesList{
                width: 100%;
                overflow: hidden;
                box-sizing: border-box;
                li{
                    display: inline-block;
                    .el-button{
                        display: inline-block;
                        margin:0 10px;
                    }
                }
                
            }
        }
        .tableWraper{
            height: 400px;
            overflow-y: scroll;
        }
    }
</style>



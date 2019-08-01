
<template>
    <Menu active-name="1-2" class="sliderBar" theme="light" width="auto" :open-names="[navList[0].name]" @on-select="toggleNav">
        <!-- <Submenu name="1">
            <template slot="title">
                IPV4地址管理
            </template>
            <Submenu name="1-1">
                <template slot="title">
                    子网维护功能
                </template>
                <Submenu name="1-1-1">
                    <template slot="title">
                        公网地址管理
                    </template>
                    <MenuItem name="1-1-1-1" @click="toggleNav('网段管理')">网段管理</MenuItem>
                    <MenuItem name="1-1-1-2" @click="toggleNav('IP地址管理')">IP地址管理</MenuItem>
                </Submenu>
            </Submenu>
            <MenuItem name="1-2" @click="toggleNav('AS号管理')">AS号管理</MenuItem>
            <Submenu name="1-3">
                <template slot="title">
                    导入管理
                </template>
                <MenuItem name="1-3-1" @click="toggleNav('IP业务导入')">IP业务导入</MenuItem>
                <MenuItem name="1-3-2" @click="toggleNav('导入历史查看')">导入历史查看</MenuItem>
                <MenuItem name="1-3-3" @click="toggleNav('导入日志查看')">导入日志查看</MenuItem>
            </Submenu>
            <Submenu name="1-4">
                <template slot="title">
                    报表管理
                </template>
                <MenuItem name="1-4-1" @click="toggleNav('业务类型统计表')">业务类型统计表</MenuItem>
                <MenuItem name="1-4-2" @click="toggleNav('导入进度表')">导入进度表</MenuItem>
            </Submenu>
        </Submenu> -->
        <Submenu :name="item.name" v-for="(item,index) in navList">
            <template slot="title">
                {{item.name}}
            </template>
            <Submenu :name="item1.name" v-for="(item1,index1) in item.children" v-if="item1.children.length">
                <template slot="title">
                    {{item1.name}}
                </template>
                <Submenu :name="item2.name" v-for="(item2,index2) in item1.children" v-if="item2.children.length">
                    <template slot="title">
                        {{item2.name}}
                    </template>
                    <Submenu :name="item3.name" v-for="(item3,index3) in item2.children" v-if="item3.children.length">
                        <template slot="title">
                            {{item3.name}}
                        </template>
                    </Submenu>
                    <MenuItem :name="item3.name" v-else @click="toggleNav(item3.name)">{{item3.name}}</MenuItem>
                </Submenu>
                <MenuItem :name="item2.name" v-else @click="toggleNav(item2.name)">{{item2.name}}</MenuItem>
            </Submenu>
            <MenuItem :name="item1.name" v-else @on-select="toggleNav(item1.name)">{{item1.name}}</MenuItem>
        </Submenu>
    </Menu>
</template>
<script>
    export default {
        data(){
            return{
                navList:[
                    {
                        name:'IPV4地址管理',
                        children:[
                            {
                            name:'子网维护功能',
                            children:[
                                {
                                    name:'公网地址管理',
                                    children:[{
                                        name:'网段管理',
                                        children:[]
                                    },{
                                        name:'IP地址管理',
                                        children:[]
                                    },]
                                }
                            ]
                        },
                            {
                                name:'AS号管理',
                                children:[]
                            },
                            {
                                name:'导入管理',
                                children:[
                                    {
                                        name:'IP业务导入',
                                        children:[]
                                    },
                                    {
                                        name:'导入历史查看',
                                        children:[]
                                    },
                                    {
                                        name:'导入日志查看',
                                        children:[]
                                    },
                                ]
                            },
                            {
                                name:'报表管理',
                                children:[
                                    {
                                        name:'业务类型统计表',
                                        children:[]
                                    },
                                    {
                                        name:'导入进度表',
                                        children:[]
                                    }
                                ]
                            },
                            {
                                name: '物联网',
                                children:[
                                    {
                                        name:'APN数据基础维护',
                                        children: []
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        },
        methods:{
            toggleNav(e){
                console.log(e);
                var pageName = e
                this.$root.eventHub.$emit("changePage",pageName)
            }
        }
    }
</script>
<style scoped>
    .sliderBar > > > li {
        font-family: PingFangSC-Regular, sans-serif;
        font-size: 14px;
        color: #36474F;
    }
</style>

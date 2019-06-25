<template>
    <Tabs type="card" :closable="tabs.length != 1" @on-tab-remove="handleTabRemove" v-model="name" class="tabs">
        <TabPane v-for="(tab,index) in tabs" :key="tab.name" :label="tab.name" :name="tab.name">
            <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
                <component :is="tab.url" :name="tab.name"></component>
            </Content>
        </TabPane>
    </Tabs>
</template>
<script>
    import ASmanage from './ASmanage.vue'
    import sonNetManage  from './sonNetManage.vue'
    import ipBusImport  from './ipBusImport.vue'

    export default {
        components: {
            ASmanage,
            sonNetManage,
            ipBusImport
        },
        created(){
            const self = this
            this.$root.eventHub.$on("changePage",(pageName) => {
                //$on是监听事件，如果组件一得$emit触发了，$on就会触发this.fn事件
                console.log(self , this);
                if(self.name == pageName) return
                self.name = pageName
                var hasPage = self.tabs.some(item => {
                    if(item.name == pageName){
                        return true
                    }
                })
                if(!hasPage){
                    self.tabs.push({
                        name:pageName,
                        url:self.keys[pageName]||'',
                    })
                }
            })
        },
        data(){
            return{
                name:'网段管理',                 //控制当前显示的name
                keys:{                          //键与模板对应表
                    '网段管理':'sonNetManage',
                    'AS号管理':'ASmanage',
                    "IP业务导入":"ipBusImport",
                    "IP地址管理":'sonNetManage'
                },
                tabs:[{                         //初始化要显示的tab
                    name:'网段管理',
                    url:'sonNetManage'
                }],
            }
        },
        mounted(){

        },
        methods: {
            handleTabRemove(name) {
                this.tabs.forEach((item,index) => {
                    if(item.name == name){
                        this.tabs.splice(index,1)
                    }
                })
                return false
            }
        }
    }
</script>
<style>
.tabs{
    height: 100%;
}

</style>

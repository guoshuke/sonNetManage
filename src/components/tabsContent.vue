<template>
    <Tabs type="card" :closable="tabs.length != 1" @on-tab-remove="handleTabRemove" v-model="name" class="tabs">
        <TabPane v-for="(tab,index) in tabs" :key="tab.name" :label="tab.name" :name="tab.name">
            <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
                <component :is="tab.url"></component>
            </Content>
        </TabPane>
        <Button @click="handleTabsAdd" size="small" slot="extra">增加</Button>
    </Tabs>
</template>
<script>
    import ASmanage from './ASmanage.vue'
    import sonNetManage  from './sonNetManage.vue'

    export default {
        components: {
            ASmanage,
            sonNetManage
        },
        data(){
            return{
                name:'子网管理',
                tabs:[{
                    name:'子网管理',
                    url:'ASmanage',
                    isShow:true
                },{
                    name:'IP地址管理',
                    url:'sonNetManage',
                    isShow:true
                }],
            }
        },
        mouted(){

        },
        methods: {
            handleTabRemove(name) {
                this.tabs.forEach((item,index) => {
                    if(item.name==name){
                        this.tabs.splice(index,1)
                    }
                })
                console.log(this.tabs);
                return false
            },
            handleTabsAdd(){
                var creatItem = {
                    name:'AS号管理',
                    url:'',
                    isShow:true
                }
                var needCreat = true
                this.tabs.forEach(item => {
                    if(item.name == creatItem.name){
                        needCreat = false
                    }
                })
                if(needCreat) this.tabs.push(creatItem);
                this.name =creatItem.name
                console.log(this.tabs);
            },
        }
    }
</script>
<style>
.tabs{
    height: 100%;
}

</style>

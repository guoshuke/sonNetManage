<template>
    <Tabs type="card" :closable="tabs.length != 1" @on-tab-remove="handleTabRemove">
        <TabPane v-for="(tab,index) in tabs" :key="index" :label="tab.name" v-if="tab.isShow">
            <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
                <component :is="tab.url"></component>
            </Content>
        </TabPane>
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
                tabs:[{
                    name:'子网管理',
                    url:'ASmanage',
                    isShow:true
                },{
                    name:'IP地址管理',
                    url:'sonNetManage',
                    isShow:true
                },{
                    name:'AS号管理',
                    url:'',
                    isShow:true
                }],
            }
        },
        mouted(){

        },
        methods: {
            handleTabRemove(index) {
                if(this.tabs.length == 1){
                    this.$Message.warning('最少有一个窗口');
                }else {
                    this.tabs.splice(index,1)
                }
            }
        }
    }
</script>
<style>

</style>
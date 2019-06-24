<template>
    <div id="app">
        <div class="layout">
            <Layout>
                <Sider collapsible hide-trigger :style="{background: '#fff',height:'100vh'}" class="slider" collapsed-width="0" v-model="status">
                    <img :src="status?require('./assets/icon/sliderShow.svg'):require('./assets/icon/sliderHidn.svg')" alt="" @click="status=!status">
                    <navBar></navBar>
                </Sider>
                <Layout :style="{padding: '20px'}">
                    <tabsContent></tabsContent>
                </Layout>
            </Layout>
        </div>
    </div>
</template>

<script>
    //public
    import navBar from './public_components/navBar.vue'
    import tabsContent from './components/tabsContent.vue'


    export default {
        name: 'App',
        components: {
            tabsContent,
            navBar
        },
        data() {
            return {
                status:false    //左侧按钮是否导航条是否关闭
            }
        },
        methods: {
            toggleSliderBar(){
                this.status=!this.status
            }
        }
    }
</script>

<style  lang="less">
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
        .slider{
            position: relative;
            img{
                position: absolute;
                z-index: 1;
                width: 16px;
                height: 64px;
                left: 100%;
                top: 50%;
                margin-top: -32px;
            }
        }
        /deep/ .ivu-menu-light.ivu-menu-vertical .ivu-menu-item-active:not(.ivu-menu-submenu):after{
            background: url("./assets/icon/Shape.png") no-repeat left;
            background-size: 8px 100%;
            width: 8px;
        }
    }

    @deep: ~">>>";
    @{deep} {
        .ivu-layout{
            background-color: #f0f2f5;
            overflow: hidden;
            /*height: 100vh;*/
        }
        .ivu-tabs-bar {
            margin-bottom: 5px;
        }
        .ivu-tabs {
            background-color: #fff;
        }
    }

    .layout {
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
        .layout-logo {
            width: 100px;
            height: 30px;
            background: #5b6270;
            border-radius: 3px;
            float: left;
            position: relative;
            top: 15px;
            left: 20px;
        }
        .layout-nav {
            width: 420px;
            margin: 0 auto;
            margin-right: 20px;
        }
    }

    .primaryModal{
        display: flex;
        align-items: center;
        justify-content: center;

        .ivu-modal{
            top: 0;
        }
        .ivu-modal-header {
            background-color: #4285F4;
            * {
                color: #fff;
            }
        }
        .ivu-modal-close{
            i{
                color: #fff;
            }
        }
        .ivu-modal-body{
            border: none;
        }
        .ivu-modal-footer{
            height:50px;
            background:rgba(250,250,250,1);
            box-shadow:0px -1px 0px 0px rgba(237,237,237,1);
            border-radius:0px 0px 4px 4px;
            padding: 7px 18px;
            text-align:center;
            button{
                width: 86px;
            }
            button:first-child{
                border:1px solid #dcdee2;
                margin-right: 2px;
            }
        }

    }

</style>

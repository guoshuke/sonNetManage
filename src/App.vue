<template>
    <div id="app">
        <div class="layout">
            <Layout>
                <Sider collapsible hide-trigger :style="{background: '#fff',height:'100vh'}" class="slider" collapsed-width="0" v-model="status">
                    <img :src="status?require('./assets/sliderShow.svg'):require('./assets/sliderHidn.svg')" alt="" @click="status=!status">
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
                status:false
            }
        },
        methods: {
            tiggerSliderBar(){
                this.status=!this.status
            }
        }
    }
</script>

<style scoped lang="less">
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
    }

    @deep: ~">>>";
    @{deep} {
        .ivu-layout{
            background-color: #f0f2f5;
            overflow: hidden;
            height: 100vh;
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

</style>

<template>
  <div id="app">
    <div class="layout">
      <Layout>
          <Sider hide-trigger :style="{background: '#fff',height:'100vh'}">
            <Menu active-name="1-2" theme="light" width="auto" :open-names="['1']">
              <Submenu name="1">
                <template slot="title">
                  <Icon type="ios-navigate"></Icon>
                  Item 1
                </template>
                <MenuItem name="1-1">Option 1</MenuItem>
                <MenuItem name="1-2">Option 2</MenuItem>
                <MenuItem name="1-3">Option 3</MenuItem>
              </Submenu>
              <Submenu name="2">
                <template slot="title">
                  <Icon type="ios-keypad"></Icon>
                  Item 2
                </template>
                <MenuItem name="2-1">Option 1</MenuItem>
                <MenuItem name="2-2">Option 2</MenuItem>
              </Submenu>
              <Submenu name="3">
                <template slot="title">
                  <Icon type="ios-analytics"></Icon>
                  Item 3
                </template>
                <MenuItem name="3-1">Option 1</MenuItem>
                <MenuItem name="3-2">Option 2</MenuItem>
              </Submenu>
            </Menu>
          </Sider>
          <Layout :style="{padding: '24px'}">
            <Tabs type="card" closable @on-tab-remove="handleTabRemove">
              <TabPane label="标签一" v-if="tab0">
                <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
                  <ASmanage></ASmanage>
                </Content>
              </TabPane>
              <TabPane label="标签二" v-if="tab1">
                <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
                  标签二的内容
                </Content>
              </TabPane>
              <TabPane label="标签三" v-if="tab2">
                <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
                  标签三的内容
                </Content>
              </TabPane>
            </Tabs>
          </Layout>
        </Layout>
    </div>
  </div>
</template>

<script>
  import ASmanage from './components/ASmanage.vue'

export default {
    name: 'App',
    components:{
        ASmanage:ASmanage
    },
    data () {
        return {
            tab0: true,
            tab1: true,
            tab2: true
        }
    },
    methods: {
        handleTabRemove (name) {
            this['tab' + name] = false;
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
}
@deep: ~">>>";
@{deep} {
  .ivu-tabs-bar{
    margin-bottom:5px;
  }
  .ivu-tabs{
    background-color: #fff;
  }
}
 .layout{
   border: 1px solid #d7dde4;
   background: #f5f7f9;
   position: relative;
   border-radius: 4px;
   overflow: hidden;
   .layout-logo{
     width: 100px;
     height: 30px;
     background: #5b6270;
     border-radius: 3px;
     float: left;
     position: relative;
     top: 15px;
     left: 20px;
   }
   .layout-nav{
     width: 420px;
     margin: 0 auto;
     margin-right: 20px;
   }
 }

</style>

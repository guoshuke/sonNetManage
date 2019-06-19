<template>
    <Menu active-name="1-2" class="sliderBar" theme="light" width="auto" :open-names="['1']">

        <Submenu name="1">
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
                    <MenuItem name="1-1-1-1">子网管理</MenuItem>
                    <MenuItem name="1-1-1-2">IP地址管理</MenuItem>
                </Submenu>
            </Submenu>
            <MenuItem name="2">AS号管理</MenuItem>
            <Submenu name="3">
                <template slot="title">
                   导入管理
                </template>
                <MenuItem name="3-1">IP业务导入</MenuItem>
                <MenuItem name="3-2">导入历史查看</MenuItem>
                <MenuItem name="3-3">导入日志查看</MenuItem>
            </Submenu>
            <Submenu name="4">
                <template slot="title">
                    报表管理
                </template>
                <MenuItem name="4-1">业务类型统计表</MenuItem>
                <MenuItem name="4-2">导入进度表</MenuItem>
            </Submenu>
        </Submenu>
    </Menu>
</template>
<script>
    export default {}
</script>
<style scoped>
    .sliderBar > > > li {
        font-family: PingFangSC-Regular, sans-serif;
        font-size: 14px;
        color: #36474F;
    }
</style>
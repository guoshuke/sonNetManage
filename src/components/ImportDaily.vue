<!--  -->
<template>
  <div>
        <span>总需要导入{{tNumber}},已导入{{hNumber}},待导入{{wNmber}}</span>
        <Table style="margin-top:10px" border :columns="unusualColumns" :data="unusualData" class="dailyTable">
            <template slot-scope="{ row }" slot="name">
                <strong>{{ row.name }}</strong>
            </template>
            <template slot-scope="{ row, index }" slot="action">
                <span style="cursor: pointer">河南</span>
            </template>
        </Table>
        <div style="margin-top:20px; overflow:hidden">
            <div class="page" style="float:right">
                <Page :total="100" :current="1" show-elevator show-total show-sizer :page-size-opts='[15,30,45,60]' :page-size='15' id="page" />
           </div>
        </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
        tNumber:1000,
        hNumber:1222,
        wNumber:9999,
          unusualColumns: [

            {
                title: '序号',
                key: 'name',
                align:'center',
                width:70

            },
            {
                title: '部门',
                key: 'age',
                width:70,
                slot:'action'

            },
            {
                title: '上传时间',
                key: 'address',
                align:'center',

            },
            {
                title: '规划',
                key: 'address',
                align:'center',
            },
            {
                title: '文件名',
                key: 'address',
                align:'center',
            },
            {
                title: '业务信息',
                key: 'address',
                align:'center',
                width:100
            },
            {
                title: '已导入数量',
                key: 'address',
                align:'center',
            },
            {
                title: '未导入数量',
                key: 'address',
                align:'center',
            },
            {
                title: '当次导入数量占总数百分比',
                key: 'address',
                align:'center',
            },
            {
                title: '总导入数量占总数百分比',
                key: 'address',
                align:'center',
            },
        ],
        unusualData: [
            {
                name: 'John Brown',
                age: 18,
                address: 'New York No. 1 Lake Park',
                date: '2016-10-03'
            },
            {
                name: 'Jim Green',
                age: 24,
                address: 'London No. 1 Lake Park',
                date: '2016-10-01'
            },
            {
                name: 'Joe Black',
                age: 30,
                address: 'Sydney No. 1 Lake Park',
                date: '2016-10-02'
            },
            {
                name: 'Jon Snow',
                age: 26,
                address: 'Ottawa No. 2 Lake Park',
                date: '2016-10-04'
            }
        ],
    }
  },

  methods: {}
}

</script>
<style lang='less' scoped>
</style>

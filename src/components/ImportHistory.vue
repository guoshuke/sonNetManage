<!--  -->
<template>
    <div>
       <span class="top">导入历史</span>
        <Card style="width:100%;margin-top:13px;height:60px;line-height:25px">
            <span>总需要导入{{tNumber}},已导入{{hNumber}},待导入{{wNmber}}</span>
        </Card>
        <!-- 表格 -->
        <Table border ref="selection" style="margin-top:10px" :columns="importColumns" :data="importData" @on-row-dblclick="IsShowModal">
            <template slot-scope="{ row }" slot="name">
                <strong>{{ row.name }}</strong>
            </template>
            <template slot-scope="{ row, index }" slot="action">
                <span style="color:rgba(66, 133, 244, 1);cursor: pointer">查看</span>
            </template>
        </Table>
         <!-- 城市弹出框 -->
        <Modal
            v-model="showModal"
            title="城市导入历史查看"
            class-name="primaryModal"
            class="citymodal"
            width="50%"
            >
            <div>
                <Table :columns="cityColumns" border :data="cityData"></Table>
            </div>
        </Modal>
    </div>
</template>

<script>
export default {
  data () {
    return {
        showModal: false,
        tNumber:1000,
        hNumber:99,
        wNmber:99999,
        importColumns: [
                {
                    title: '所属省份',
                    width:150,
                    key: 'name',
                    align: 'center',
                },
                {
                    title: '规划',
                    width:150,
                    key: 'age',
                    align: 'right'
                },
                {
                    title: '已导入数量',
                    key: 'address',
                    width:300,
                    align: 'right'
                },
                {
                    title: '总导入占比',
                    key: 'address',
                    width:300,
                    align: 'right'
                },
                {
                    title: '操作',
                    slot: 'action',

                }
            ],
        importData: [
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
        cityColumns: [

            {
                title: '所属省份',
                key: 'name',
                align:'center',
                width:150
            },
            {
                title: '所属城市',
                key: 'age',
                align:'right',
                width:150
            },
            {
                title: '规划',
                key: 'address',
                align:'right',

            },
            {
                title: '已导入数量',
                key: 'address',
                align:'right',
            },
            {
                title: '总导入数量占比',
                key: 'address',
                align:'right',
            }
        ],
        cityData: [
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

  methods: {
      IsShowModal() {
        if (this.cityColumns.title  == '所属省份') {
            this.showModal = true
        }

     }
  }
}

</script>
<style lang='less' scoped>
    .top{
        margin-left: 10px;
    }
    .top::after{
    content:"";
    width: 4px;
    height: 10px;
    display: block;
    height:10px;
    background:rgba(66,133,244,1);
    border-radius:2px;
    position: absolute;
    top:29px;
    }
    .citymodal{
        /deep/.ivu-modal-footer{
          display: none;
        }
    }

</style>

<template>
    <div>
        <Row :gutter="60">
            <Col span="12" class="i-inputs">
                {{exportsWay.lable}}
                <span class="must">{{exportsWay.must?'*':' '}}</span>
                <Select class="i-input" v-model="exportsWay.value"  size="small">
                    <Option v-for="i in exportsWay.options" :value="i" :key="i">{{ i }}</Option>
                </Select>
            </Col>
            <Col span="12" class="i-inputs" v-if="exportsWay.value=='按模板导出'">
                {{templateData.lable}}
                <span class="must">{{templateData.must?'*':' '}}</span>
                <Select class="i-input" v-model="templateData.value"  size="small">
                    <Option v-for="i in templateData.options" :value="i" :key="i">{{ i }}</Option>
                </Select>
            </Col>
        </Row>
        <div v-if="exportsWay.value=='按列导出'">
            <p class="exportsTitle"> <span class="ml10">选择列</span></p>
            <Transfer
                    class="netTransfer"
                    :titles="['可选','已选']"
                    :data="data1"
                    :target-keys="targetKeys1"
                    :render-format="render1"
                    @on-change="handleChange1"></Transfer>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                exportsWay:{
                    lable: '导出方式',
                    must:true,
                    type: 'select',
                    value: '请选择',
                    options:['按列导出','按模板导出']
                },
                templateData:{
                    lable: '选择模板',
                    must:true,
                    type: 'select',
                    value: '备案格式',
                    options:['备案格式','其他格式']
                },
                data1: this.getMockData(),
                targetKeys1: this.getTargetKeys()
            }
        },
        methods:{
            getMockData () {
                let mockData = [];
                for (let i = 1; i <= 20; i++) {
                    mockData.push({
                        key: i.toString(),
                        label: 'Content ' + i,
                        description: 'The desc of content  ' + i
                    });
                }
                return mockData;
            },
            getTargetKeys () {
                return this.getMockData()
                    .filter(() => Math.random() * 2 > 1)
                    .map(item => item.key);
            },
            render1 (item) {
                return item.label;
            },
            handleChange1 (newTargetKeys, direction, moveKeys) {
                console.log(newTargetKeys);
                console.log(direction);
                console.log(moveKeys);
                this.targetKeys1 = newTargetKeys;
            }
        }
    }
</script>
<style scoped lang="less">
    .ml10{
        margin-left:10px;
    }
    .i-inputs {
        text-align: right;
        margin: 8px 0;
        .i-input {
            width: 200px;
            margin-left: 10px;
            text-align: left;
        }
    }
    .exportsTitle{
        margin: 11px 0;
        &:before{
            content: '';                 /*CSS伪类用法*/
            position: absolute;
            width:4px;
            height:15px;
            background:rgba(66,133,244,1);
            border-radius:2px;
        }
    }
    .netTransfer{
        width: 100%;
        display: flex;
        /deep/ .ivu-transfer-list{
            flex: 1;
        }
    }
</style>
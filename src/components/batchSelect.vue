<template>
    <Row :gutter="60">
        <Col span="12" class="i-inputs">
            起始序号
            <span class="must">*</span>
            <InputNumber class="i-input" v-model="selectData.start"  size="small" :min="1" />
        </Col>
        <Col span="12" class="i-inputs">
            结束序号
            <span class="must">*</span>
            <InputNumber class="i-input" v-model="selectData.end"  size="small" :max="10"/>
        </Col>
    </Row>
</template>
<script>
    export default {
        data(){
            return{
                selectData:{
                    start:0,
                    end:10
                }
            }
        }
    }
</script>
<style scoped lang="less">
    .i-inputs {
        text-align: right;
        margin: 8px 0;
        .i-input {
            width: 200px;
            margin-left: 10px;
            text-align: left;
        }
    }
</style>
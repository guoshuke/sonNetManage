<template>
    <div>
        <Form  inline :label-width="100">
            <FormItem label="网段名称">
                <Input  placeholder="Enter something..."></Input>
            </FormItem>
            <FormItem label="子网容量">
                <Input placeholder="Enter something..."  ></Input>
            </FormItem>
            <div>
                <FormItem label="起始IP地址">
                    <Input placeholder="Enter something..."  ></Input>
                </FormItem>
                <FormItem label="结束IP地址">
                    <Input placeholder="Enter something..."  ></Input>
                </FormItem>
            </div>
        </Form>
        <div>
            <div class="typetitle">
                <p class="title">选择拆分方式</p>
                <div class="checktype">
                    <RadioGroup v-model="splittype" @on-change="checkSplitType">
                        <Radio label="等分"></Radio>
                        <Radio label="打散成IP地址" style="margin-left: 10px"></Radio>
                    </RadioGroup>
                    <div class="importSplit" v-if="splitStyle">
                        <span>请选择掩码位长</span>
                        <Select style="width:200px">
                            <Option v-for="item in numberList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                        </Select>
                    </div>
                    <div class="scatterOver" v-if="!splitStyle">
                        <span>将IP子网打散为其包含的全部IP地址</span>
                    </div>
                </div>
            </div>
            <div class="splitOver">
                <Button type="primary" >拆分子网</Button>
                <div class="typetitle">
                    <p class="title">拆分结果</p>
                    <div>
                        <div class="checktype" v-if="splitData">当前子网不能再进行拆分子网操作。</div>
                        <div v-if="!splitData">
                            <ul>
                                <li>
                                    <span>1</span><span>此网段一共可拆分2个掩码为25的子网点确定保存拆分结果</span>
                                </li>
                                <li>
                                    <span>2</span><span>211.130.215.0/25</span>
                                </li>
                                <li>
                                    <span>3</span><span>211.130.215.0/25</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SplitElement",
        data(){
            return{
                splittype:'等分',
                splitStyle:true,
                splitData:false,
                numberList:[{
                    value:1,
                    label:1
                }]
            }
        },
        methods:{
            checkSplitType(value){
                if(value==='等分'){
                    this.splitStyle=true
                }else if(value==='打散成IP地址'){
                    this.splitStyle=false
                }
            }
        }
    }
</script>

<style lang="less" scoped>
.typetitle {
   .title{
        border-left: 4px solid #4285F4;
        padding-left: 3px;
    }
    .checktype{
        padding: 20px;
        margin-top: 10px;
        border:1px solid rgba(239,243,247,1);
        .importSplit{
            margin-top: 10px;
            span{
                display: inline-block;
                margin-right: 20px;
            }
        }
        .scatterOver{
            margin-top: 20px;
            span{
                font-size:12px;
                color:rgba(66,133,244,1);
                line-height:20px;
                background:rgba(227,237,254,1);
                border-radius:4px;
                border:1px solid rgba(66,133,244,0.3);
                padding: 5px;
            }
        }
    }
    ul{
        list-style: none;
        margin-top: 10px;
        border:1px solid rgba(239,243,247,1);
        border-bottom: none;
        li{
            border-bottom:1px solid rgba(239,243,247,1);
            height: 36px;
            line-height: 36px;
            span:first-child{
                display: inline-block;
                width: 36px;
                text-align: center;
                border-right:1px solid rgba(239,243,247,1);
                margin-right: 10px;
            }
        }
        li:first-child{
            background:rgba(250,251,253,1);
        }
    }
}
    .splitOver{
        margin-top: 10px;
        .typetitle{
            margin-top: 10px;
        }
    }
</style>

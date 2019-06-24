<template>
    <Modal v-model="show" draggable scrollable :title="title" :width="width||954" class-name="primaryModal" okText="提交" @on-ok="func" @on-cancel="func" >
        <slot></slot>
    </Modal>
</template>
<script>
    export default {
        name:'publicModal',
        props:['isShow','width','title','toSubmit'],
        data(){
            return{
                show:this.isShow
            }
        },
        watch: {
            isShow(val) {
                this.show = this.isShow;
            }
        },
        methods:{
            func(){
                this.$emit("update:isShow", false);
                this.toSubmit()
            },
        }
    }
</script>
<style>

</style>
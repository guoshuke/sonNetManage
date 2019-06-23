<template>
    <Modal v-model="isShow" draggable scrollable title="新增" :width="width||954" class-name="primaryModal" okText="提交">
        <slot></slot>
    </Modal>
</template>
<script>
    export default {
        name:'publicModal',
        props:['isShow','width'],
        data(){
            return{}
        }
    }
</script>
<style>

</style>
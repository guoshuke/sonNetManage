<template>
    <div>
        <sonSearch :name="name"></sonSearch>
        <sonTable :name="name"></sonTable>
    </div>
</template>
<script>
    import sonSearch from './sonSearch.vue'
    import sonTable    from '../public_components/public_table.vue'
    export default {
        props:['name'],
        components: {
            sonSearch,
            sonTable,

        },
        data(){
            return{
                showModal:true,
            }
        },
        methods:{

        }
    }
</script>
<style>

</style>
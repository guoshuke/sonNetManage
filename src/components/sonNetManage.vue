<template>
    <div>
        <sonSearch></sonSearch>
        <sonTable></sonTable>
    </div>
</template>
<script>
    import sonSearch from './sonSearch.vue'
    import sonTable    from '../public_components/public_table.vue'
    export default {
        components: {
            sonSearch,
            sonTable
        },
    }
</script>
<style>

</style>
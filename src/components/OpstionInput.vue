<template>
    <div class="itemShowOpstion">{{ data.name }} <button @click="deleteItem" class="itemShowOpstion__button">x</button></div>    
</template>
<script>


export default {
    props: {
        data: {
            type: Object,
        }
    },
    data() {
        return {}
    },
    methods: {
        deleteItem() {
            this.$emit('deleteItem', this.data.key)
        }
    }
}
</script>

<style>
.itemShowOpstion {
    background-color: #ccc;
    border: 1px solid #ccc;
    border-radius: 10px;
    padding: 5px;
    margin-right: 5px;
}
.itemShowOpstion__button {
    border: none;
    background-color: inherit;
}
</style>
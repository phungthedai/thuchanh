<template>
    <div>
        <button>{{ lable }}</button>
    </div>
</template>

<script>

export default {
    name: 'BtnConfirm',
    props: {
        borderRadius: {
            type: String,
        },
        borderRadius: {
            type: String,
        },
        backgroundColor: {
            type: String,
        },
        lable: {
            type: String,
            default: 'btton'
        }
    },
    data() {
        return {

        }
    },
    computed: {
        
    },
    methods: {
        
    },
}

</script>
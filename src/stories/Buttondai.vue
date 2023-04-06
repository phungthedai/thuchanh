<template>
    <div>
        <input :class="class2" :style="style" @click="onclick"  v-model="value">
    </div>
</template>

<script>

export default  {
    name: 'Btdai',
    components: {},
    props: {
        label: {
            type : String,
            required: true,
        },
        // size: {
        //     type: String || Number,
        //     default: 'medium',
        //     validate: (value) => {
        //         return [ 'smail', 'medium', 'large'].indexOf(value) !== -1
        //     }
        // },
        backgroundColor: {
            type : String,
            default: 'black',
        },
        textClolor: {
            type: String,
            default: '#fff',
        }
    },
    data() {
        return {
            value : '',
        }
    },
    computed: {
        class2() {
            return {

            }
        },
        style() {
            return {
                backgroundColor: this.backgroundColor,
                color: this.textClolor,
                border: '1px solid #ccc',
            }
        }
    },
    watch: {

    },
    methods: {
        onclick() {
            this.$emit('onClick')
        }
    },
}
</script>
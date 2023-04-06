<template>
    <div>
        <input :type="typeInput" v-model="valueInput" :style="style">
    </div>
</template>

<script>

export default {
    name: 'imput',
    props: {
        border: {
            type: String,
            default: '1px solid #ccc'
        },
        borderRadius: {
            type: String,
            default: '0px'
        },
        backgroundColor: {
            type: String,
            default: '#fff'
        },
        typeInput: {
            type: String,
            default: 'text'
        },
    },
    data() {
        return {
            valueInput: '',
        }
    },
    computed: {
        style() {
            return {
                border: this.border,
                borderRadius: this.borderRadius,
                backgroundColor: this.backgroundColor,
            }
        }
    },
    watch: {
        valueInput(newValue, oldValue) {
            this.$emit('value', newValue)
        }
    }
}
</script>
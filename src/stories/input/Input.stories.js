import InputCusstom from './Input.vue'

export default {
    title: 'Input/InputCusstom',
    component : InputCusstom,
    tag: ['autodocs'],
    render: (args, { argTypes }) => ({
        props: Object.keys(argTypes),
        components: {InputCusstom},
        template: '<input v-bind="$props"/>'
    }),
    argTypes: {
        backgroundColor: { control: 'color' },
  },
}

export const inputText = {
    args : {
        borderRadius: '5px',
        backgroundColor: 'red',
        typeInput: 'text'
    }
    // border: '1px solid #ccc',
    
}

export const inputNumber = {
    args: {
        border: '1px solid #ccc',
        borderRadius: '5px',
        backgroundColor: 'blue',
        typeInput: 'number'
    }
    
}
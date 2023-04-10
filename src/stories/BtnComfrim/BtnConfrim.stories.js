import BtnConfirm from './BtnConfrim.vue'

export default {
    title: 'BtnConfirm',
    comments: BtnConfirm,
    tag: ['atuodocs'],
    render: (args, {argType}) => ({
        props: Object.keys(argType),
        components: {BtnConfirm},
        template: '<BtnConfirm $props/>',
    }),
    argType : {
        backgroundColor: {}
    }
}

export const BtnPrimary = {
    args : {
        borderRadius: '5px',
        backgroundColor: 'red',
        lable: 'daiphung'
    }
    // border: '1px solid #ccc',
    
}
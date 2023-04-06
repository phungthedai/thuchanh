// import Mybutton2 from './Buttondai.vue' 

// export default {
//     title: 'Mybutton2',
//     component : DaiButton,
//     tags: ['autodocs'],
//     render: (args, { argTypes }) => ({
//         props: Object.keys(argTypes),
//         components: { DaiButton },
//         template: '<my-button2 v-bind="$props" />',
//       }),
//     argTypes: {
//     // backgroundColor: { control: 'color' },
//     // size: {
//     //   control: { type: 'select' },
//     //   options: ['small', 'medium', 'large'],
//     // },
//   },
// }

// export const Small = {
//     args: {
//         label: 'Button small',
//       },
// }

import Btdai from './Buttondai.vue';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/vue/writing-stories/introduction
export default {
  title: 'Example/Btdai',
  component: Btdai,
  tags: ['autodocs'],
  render: (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { Btdai },
    template: '<Btdai @onClick="onClick" v-bind="$props" />',
  }),
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  //   size: {
  //     control: { type: 'select' },
  //     options: ['small', 'medium', 'large'],
  //   },
  // },
};

// More on writing stories with args: https://storybook.js.org/docs/7.0/vue/writing-stories/args
export const Primary2 = {
  args: {
    primary: true,
    label: 'Button',
  },
};

export const Secondary2 = {
  args: {
    label: 'Button',
  },
};

export const Large2 = {
  args: {
    // size: 'large',
    label: 'Button',
  },
};

export const Small2 = {
  args: {
    // size: 'small',
    label: 'Button',
  },
};

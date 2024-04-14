import Button from '../components/Button';

export default {
    title: 'Example/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export const Primary = {
    args: {
        children: 'Button',
        type: "primary",
        block: false,
        danger: false,
        disabled: false,
        ghost: false,
        loading: false,
        shape: 'default',
        size: 'middle',
    },
};

export const Secondary = {
    args: {
        ...Primary.args,
        type: "secondary",
    },
};

export const Large = {
    args: {
        ...Primary.args,
        size: 'large',
    },
};

export const Small = {
    args: {
        ...Primary.args,
        size: 'small',
    },
};

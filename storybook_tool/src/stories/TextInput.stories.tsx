import type { Meta, StoryObj } from '@storybook/react';
import ItextInput from '../input_item/ItextInput'

const meta: Meta<typeof ItextInput> = {
    component: ItextInput,
    title: 'UI/InputText'
}
export default meta;

export const FirstComponent: StoryObj<typeof ItextInput> = {
    args: {
        label: 'Fullfdgfgfdg Name',
        backgroundColor: '#1f1f1f',
        padding: '10px',
        placeholder: 'enter name please..'
    }
}

export const LastComponent: StoryObj<typeof ItextInput> = {
    args: {
        label: 'Address',
        backgroundColor: '#519090ff',
        padding: '10px',
        placeholder: 'enter name address..',
        value: 'Delhi'
    }
}
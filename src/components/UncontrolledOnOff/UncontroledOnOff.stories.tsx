import React, {useState} from 'react';
import {Story, Meta} from '@storybook/react';
import {action} from "@storybook/addon-actions";
import {UncontrolledOnOff, UncontrolledOnOffPropsType} from "./UncontrolledOnOff";


export default {
    title: 'UncontrolledOnOff',
    component: UncontrolledOnOff
} as Meta;

const Template: Story<UncontrolledOnOffPropsType> = (args) => <UncontrolledOnOff {...args} />
const callback = action('clicked on or off')

export const OnMode = Template.bind({})
OnMode.args = {
    onClick: callback,
    defaultOn: true
}

export const OffMode = Template.bind({})
OffMode.args = {
    onClick: callback,
    defaultOn: false
}




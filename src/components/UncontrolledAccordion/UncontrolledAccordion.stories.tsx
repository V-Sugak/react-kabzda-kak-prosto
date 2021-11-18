import React, {useState} from 'react';
import {Story, Meta} from '@storybook/react';
import {action} from "@storybook/addon-actions";
import UncontrolledAccordion, {UncontrolledAccordionPropsType} from "./UncontrolledAccordion";


export default {
    title: 'UncontrolledAccordion',
    component: UncontrolledAccordion
} as Meta;

const Template: Story<UncontrolledAccordionPropsType> = (args) => <UncontrolledAccordion {...args} />

export const UncontrolledAccordionChanging = Template.bind({})
UncontrolledAccordionChanging.args = {
    title: 'Users',
}


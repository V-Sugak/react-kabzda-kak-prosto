import React, {useState} from 'react';
import {Story, Meta} from '@storybook/react';
import {action} from "@storybook/addon-actions";
import Accordion, {AccordionPropsType} from "./Accordion";


export default {
    title: 'Accordion',
    component: Accordion
} as Meta;

const Template: Story<AccordionPropsType> = (arg) => <Accordion {...arg} />
const callback = action('accordion mode changed event fired')

export const CollapsedMode = Template.bind({})
CollapsedMode.args = {
    title: 'Menu',
    collapsed: true,
    setAccordionCollapsed: callback,
}

export const UncollapsedMode = Template.bind({})
UncollapsedMode.args = {
    title: 'Users',
    collapsed: false,
    setAccordionCollapsed: callback,
}



export const AccordionChanging = () => {
    const [value, setValue] = useState<boolean>(false)
    return <Accordion  title='Users' collapsed={value} setAccordionCollapsed={() => setValue(!value)}/>
}

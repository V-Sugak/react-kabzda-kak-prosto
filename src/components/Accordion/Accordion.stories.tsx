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
const onClickCallback = action('some item was clicked')
const items = [
    {title: 'Dima', value: 1},
    {title: 'Bob', value: 2},
    {title: 'Ira', value: 3}
]
export const CollapsedMode = Template.bind({})
CollapsedMode.args = {
    title: 'Menu',
    collapsed: true,
    setAccordionCollapsed: callback,
    items: items,
    onClick: onClickCallback,
}

export const UncollapsedMode = Template.bind({})
UncollapsedMode.args = {
    title: 'Users',
    collapsed: false,
    setAccordionCollapsed: callback,
    items: items,
    onClick: onClickCallback,
}


export const AccordionChanging = () => {
    const [value, setValue] = useState<boolean>(false)
    return <Accordion onClick={onClickCallback} items={items} title='Users' collapsed={value} setAccordionCollapsed={() => setValue(!value)}/>
}

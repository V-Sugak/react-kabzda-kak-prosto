import React, {useState} from 'react';
import {Story, Meta} from '@storybook/react';
import {action} from "@storybook/addon-actions";
import Accordion, {AccordionPropsType} from "./Accordion";

const GetCategoryObg = (categoryName: string) => ({
    table: {
        category: categoryName
    }
})

export default {
    title: 'components/Accordion',
    component: Accordion,
    argTypes: {
        onClick: {
            ...GetCategoryObg('Events')
        },
        setAccordionCollapsed: {
            ...GetCategoryObg('Events')
        },
        items: {...GetCategoryObg('Main')},

    },
};

const callback = action('accordion mode changed event fired')
const onClickCallback = action('some item was clicked')
const items = [
    {title: 'Dima', value: 1},
    {title: 'Bob', value: 2},
    {title: 'Ira', value: 3}
]
const callbacksProps = {
    setAccordionCollapsed: callback,
    items: items,
    onClick: onClickCallback,
}

const Template: Story<AccordionPropsType> = (arg) => <Accordion {...arg} />

export const CollapsedMode = Template.bind({})
CollapsedMode.args = {
    ...callbacksProps,
    title: 'Menu',
    collapsed: true,
}

export const UncollapsedMode = Template.bind({})
UncollapsedMode.args = {
    ...callbacksProps,
    title: 'Users',
    collapsed: false,
}


export const AccordionChanging: Story<AccordionPropsType> = (args) => {
    const [value, setValue] = useState<boolean>(true)
    return <Accordion
        title={'Users'}
        onClick={onClickCallback}
        items={items}
        collapsed={value}
        setAccordionCollapsed={() => setValue(!value)}/>
}


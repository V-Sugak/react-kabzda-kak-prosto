import React, {useState} from 'react';
import {Story, Meta} from '@storybook/react';
import {OnOff, OnOffPropsType} from "./OnOff";
import {action} from "@storybook/addon-actions";


export default {
    title: 'OnOff',
    component: OnOff
} as Meta;

const Template: Story<OnOffPropsType> = (arg) => <OnOff {...arg} />
const callback = action('clicked on or off')

export const OnMode = Template.bind({})
OnMode.args = {
    on: true,
    setOn: callback
}

export const OffMode = Template.bind({})
OffMode.args = {
    on: false,
    setOn: callback
}



export const RatingChanging = () => {
    const [value, setValue] = useState<boolean>(false)
    return <OnOff on={value} setOn={() => setValue(value)}/>
}

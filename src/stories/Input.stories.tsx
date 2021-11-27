import React, {useState, ChangeEvent, useRef} from 'react';
import {ComponentStory} from '@storybook/react';
import {action} from "@storybook/addon-actions";

export default {
    title: 'input',
    // component: Button,
};


export const UncontrolledInput = () => <input/>

export const TrackValueOfUncontrolledInput = () => {
    const [value, setValue] = useState<string>('');
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }

    return <><input onChange={onChangeHandler}/>-{value}</>
}

export const GetValueOfUncontrolledInput = () => {
    const [value, setValue] = useState<string>('');
    const inputRef = useRef<HTMLInputElement>(null)
    const onClickHandler = () => {
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }

    return <><input ref={inputRef}/>
        <button onClick={onClickHandler}>save</button>
        actual value-{value}</>
}

export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState('')
    const onChange =(e:ChangeEvent<HTMLInputElement>) => {setParentValue(e.currentTarget.value)}
    return <input value={parentValue} onChange={onChange}/>
}
export const ControlledCheckbox = () => {
    const [checkedValue, setCheckedValue] = useState(true)
    const onChange =(e:ChangeEvent<HTMLInputElement>) => {setCheckedValue(e.currentTarget.checked)}
    return <input type={"checkbox"} checked={checkedValue} onChange={onChange}/>
}
export const ControlledSelect = () => {
    const [parentValue, setParentValue] = useState<string|undefined>('1')
    const onChange =(e:ChangeEvent<HTMLSelectElement>) => {setParentValue(e.currentTarget.value)}
    return <select value={parentValue} onChange={onChange}>
        <option>none</option>
        <option value={'1'}>Minsk</option>
        <option value={'2'}>Kiev</option>
        <option value={'3'}>Mosсow</option>
    </select>
}

export const ControlledInputWithFixedValue = () => <input value={'hi'}/>
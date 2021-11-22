import React, {useState, ChangeEvent, useRef} from 'react';
import {ComponentStory} from '@storybook/react';

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

export const ControlledInputWithFixedValue = () => <input value={'hi'}/>
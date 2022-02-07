import React, {useState} from "react";
import s from './Select.module.css'

type ItemType = {
    title: string
    value: any
}

export type SelectPropsType = {
    items: ItemType[]
    value?: any
    onChange: (value: any) => void
}

export const Select = (props: SelectPropsType) => {


    const [active, setActive] = useState(false)
    const selectedItem = props.items.find(i => i.value === props.value)

    return (<div className={s.select + ' ' + (active ? s.active : '')}>
            <span className={s.main} onClick={() => setActive(!active)}>{selectedItem && selectedItem.title}</span>
            <div className={s.items}>
                {props.items.map(i => <div key={props.value} onClick={() => {
                    props.onChange(i.value)
                    setActive(!active)
                }}>{i.title}</div>)}
            </div>
        </div>

    )
}
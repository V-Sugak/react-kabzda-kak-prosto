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
    const [hoveredItemValue, setHoveredItemValue] = useState(props.value)

    const selectedItem = props.items.find(i => i.value === props.value)
    const hoveredItem = props.items.find(i => i.value === hoveredItemValue)

    const toggleItems = () => setActive(!active)
    const onItemClick = (value: any) => {
        props.onChange(value)
        toggleItems()
    }

    return (<div className={s.select + ' ' + (active ? s.active : '')}>
            <span className={s.main} onClick={toggleItems}>{selectedItem && selectedItem.title}</span>

            {active && <div className={s.items}>
                {props.items.map(i => <div
                    className={s.item + ' ' + (hoveredItem === i ? s.selected : '')}
                    onMouseEnter={() => setHoveredItemValue(i.value)}
                    key={props.value} onClick={() => {
                    onItemClick(i.value)
                }}>{i.title}</div>)}
            </div>}
        </div>

    )
}
import React, {useState} from "react";
import s from "./UncontrolledOnOff.module.css"

export type UncontrolledOnOffPropsType = {
//    on:boolean
    onClick: ( on:boolean) => void
    defaultOn?:boolean
}

export const UncontrolledOnOff = (props: UncontrolledOnOffPropsType) => {
    const [on, setOn] = useState<boolean>(props.defaultOn ? props.defaultOn : false)
    const onClicked = () => {
        setOn(true);
        props.onClick(true)
    }
    const offClicked = () => {
        setOn(false)
        props.onClick(false)
    }
    return (
        <div className={s.contenes}>
            <div onClick={onClicked} className={`${on ? `${s.on}` : ''}  ${s.button}`}>on</div>
            <div onClick={offClicked} className={`${on ? '' : `${s.off}`} ${s.button}`}>off</div>
            <div className={`${on ? `${s.on}` : `${s.off}`} ${s.bulb} `}/>
        </div>
    )
}
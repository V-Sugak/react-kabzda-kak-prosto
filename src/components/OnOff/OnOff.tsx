import React, {useState} from "react";
import s from "./OnOff.module.css"

export type OnOffPropsType = {
    on: boolean
    setOn: (on: boolean) => void
}

export const OnOff = ({on,setOn,...props}: OnOffPropsType) => {

    return (
        <div className={s.contenes}>
            <div onClick={() => setOn(true)} className={`${on ? `${s.on}` : ''}  ${s.button}`}>on</div>
            <div onClick={() => setOn(false)} className={`${on ? '' : `${s.off}`} ${s.button}`}>off</div>
            <div className={`${on ? `${s.on}` : `${s.off}`} ${s.bulb} `}/>
        </div>
    )
}
import React, {useState} from "react";
import s from "./OnOff.module.css"

type OnOffPropsType = {
//    on:boolean
}

export const OnOff = (props: OnOffPropsType) => {
    const [on, setOn] = useState<boolean>(false)
    return (
        <div className={s.contenes}>
            <div onClick={() => setOn(true)} className={`${on ? `${s.on}` : ''}  ${s.button}`}>on</div>
            <div onClick={() => setOn(false)} className={`${on ? '' : `${s.off}`} ${s.button}`}>off</div>
            <div className={`${on ? `${s.on}` : `${s.off}`} ${s.bulb} `}/>
        </div>
    )
}
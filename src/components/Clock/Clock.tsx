import React, {useEffect, useState} from "react";
import {DigitalClockView} from "./DigitalClockView";
import {AnalogClockView} from "./AnalogClockView";

type ClockPropsType = {
    mode?: 'analog' | 'digital'
}

export type ClockViewProps = { date: Date }

export const Clock = (props: ClockPropsType) => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {

        const intervalId = setInterval(() => {
            console.log('tick')
            setDate(new Date());
        }, 1000)

        return () => {
            clearInterval(intervalId);
        }

    }, []);

    let view;

    switch (props.mode) {
        case 'analog':
            view = <AnalogClockView date={date}/>;
            break;
        case 'digital':
        default:
            view = <DigitalClockView date={date}/>
    }

    return <div>
        {view}
    </div>
}




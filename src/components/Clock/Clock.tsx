import React, {useEffect, useState} from "react";

type ClockPropsType = {}

const get2digitalString = (date: number) => {
    return date < 10 ? '0' + date : date
};

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

    return <div>
        <span>{get2digitalString(date.getHours())}</span>
        :
        <span>{get2digitalString(date.getMinutes())}</span>
        :
        <span>{get2digitalString(date.getSeconds())}</span>
    </div>
}
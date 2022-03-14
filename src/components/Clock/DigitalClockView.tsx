import React from "react";
import {ClockViewProps} from "./Clock";

const get2digitalString = (date: number) => {
    return date < 10 ? '0' + date : date
};
export const DigitalClockView = (props: ClockViewProps) => {
    return <>
        <span>{get2digitalString(props.date.getHours())}</span>
        :
        <span>{get2digitalString(props.date.getMinutes())}</span>
        :
        <span>{get2digitalString(props.date.getSeconds())}</span>
    </>
}
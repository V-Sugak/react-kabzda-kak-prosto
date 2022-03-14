import {Clock} from "./Clock";

export default {
    title: 'Clock'
}

export const BaseAnalogExample = () => {
    return <Clock mode={'analog'}/>
}

export const BaseDigitalExample = () => {
    return <Clock mode={'digital'}/>
}
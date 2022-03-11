import React, {useMemo, useState} from 'react';

export default {
    title: 'UseState demo'
}

const generateDate = () => {
    console.log('generateDate')
    return 35154659
}

export const Example1 = () => {
    console.log('Example1')
    //  const initValue = useMemo(generateDate, []);
    const [counter, setCounter] = useState(generateDate);  //сохраняет не функцию, а то, что возвращает
    const changer = (state: number) => {
        return state + 1; //в функцию передается state, который есть на данный момент в useState
    }

    return <>
        {/*<button onClick={() => setCounter(counter + 1)}>+</button>*/}
        <button onClick={() => setCounter(changer)}>+</button>
        {counter}
    </>
}
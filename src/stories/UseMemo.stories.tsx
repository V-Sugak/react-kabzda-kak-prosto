import {useMemo, useState} from "react";

export default {
    title: 'useMemo'
}

export const Example1 = () => {
    const [a, setA] = useState<number>(5);
    const [b, setB] = useState<number>(5);

    let resultA = 1;
    let resultB = 1;

    resultA = useMemo(() => {
        let tempResultA = 1
        for (let i = 1; i <= a; i++) {
            tempResultA = tempResultA * i;
        }
        return tempResultA;
    }, [a])

    resultB = useMemo(() => {
        let tempResultB = 1
        for (let i = 1; i <= a; i++) {
            tempResultB = tempResultB * i;
        }
        return tempResultB;
    }, [b])


    return <>
        <input value={a} onChange={(e) => setA(Number(e.currentTarget.value))}/>
        <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
        <div>
            Result for a: {resultA}
        </div>
        <div>
            Result for b: {resultB}
        </div>
    </>
}
import React, {useEffect, useState} from 'react';

export default {
    title: 'useEffect demo'
}

export const SimpleExample = () => {
    console.log('SimpleExample')

    const [fake, setFake] = useState(1);
    const [counter, setCounter] = useState(1);


    useEffect(() => {
        console.log('useEffect first render and every counter change')
        document.title = counter.toString();
        //api.getUsers().then('')
        //setInterval
        //indexedDB
        //document.getElementById()
        //document.title = 'Users'
    }, [counter])


    useEffect(() => {
        console.log('useEffect only first render (componentDidMount)')
        document.title = counter.toString();
    }, [])   // если [] пустой массив зависимостей, то срабатывает один раз при вмонтировании!!!

    useEffect(() => {
        console.log('useEffect every render')
        document.title = counter.toString();
    })   // если зависимостей нет (без скобок) - при обновлении запускается постоянно


    return <>
        Hello, {counter} {fake}
        <button onClick={() => setFake(fake + 1)}>Fake+</button>
        <button onClick={() => setCounter(counter + 1)}>Counter+</button>
    </>
}

export const SetTimeoutExample = () => {
    console.log('SetTimeoutExample')

    const [fake, setFake] = useState(1);
    const [counter, setCounter] = useState(1);


    useEffect(() => {

        const timeoutId = setTimeout(() => {
            console.log('setTimeout')
            document.title = counter.toString();
        }, 1000)

        return () => {
            clearTimeout(timeoutId)
        }
    }, [counter])


    return <>
        Hello, {counter} {fake}
        <button onClick={() => setFake(fake + 1)}>Fake+</button>
        <button onClick={() => setCounter(counter + 1)}>Counter+</button>
    </>
}

export const SetIntervalExample = () => {
    console.log('SetIntervalExample')

    const [fake, setFake] = useState(1);
    const [counter, setCounter] = useState(1);


    useEffect(() => {

        const interval = setInterval(() => {
            setCounter((state) => state + 1);
        }, 1000)

        return () => {
            clearInterval(interval)
        }
    }, [])


    return <>
        Hello, counter: {counter} - fake: {fake}
    </>
}

export const ResetEffectExample = () => {
    console.log('ResetEffectExample')

    const [counter, setCounter] = useState(1);


    useEffect(() => {
        console.log('useEffect')

        return () => {
            console.log('RESET Effect')
        }
    }, [])


    return <>
        Hello, counter: {counter}
        <button onClick={() => setCounter(counter + 1)}>+</button>
    </>
}

export const KeysTrackerExample = () => {
    console.log('KeysTrackerExample')
    const [text, setText] = useState('');

    useEffect(() => {
        console.log('useEffect');

        const handler = (e: KeyboardEvent) => {
            console.log(e.key);
            setText(text + e.key)
        };

        window.addEventListener('keypress', handler)

        return () => {
            window.removeEventListener('keypress', handler)
        }
    }, [text])

    return <>
        Typed text: {text}
    </>
}

export const SetTimeout = () => {
    console.log('SetTimeout')
    const [text, setText] = useState('');

    useEffect(() => {
        console.log('useEffect');
        const timeoutId = setTimeout(() => {
            setText('3 seconds passed');
        }, 3000)

        return () => {
            clearTimeout(timeoutId)
        }
    }, [text])

    return <>
        Typed text: {text}
    </>
}
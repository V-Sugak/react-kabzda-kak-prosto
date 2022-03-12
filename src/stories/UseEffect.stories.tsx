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
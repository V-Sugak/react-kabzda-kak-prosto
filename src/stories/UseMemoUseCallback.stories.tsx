import React, {useCallback, useMemo, useState} from "react";
import {UsersPropsType} from "./ReactMemo.stories";

export default {
    title: 'useMemo'
}

export const DifficultCounting = () => {
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

const UsersSecret = (props: UsersPropsType) => {
    console.log('USERS SECRET')
    return <div>
        {props.users.map((u, i) => {
            return <div key={i}>{u}</div>
        })}
    </div>
}

const Users = React.memo(UsersSecret)

export const HelpsForReactMemo = () => {
    console.log('HelpsForReactMemo')
    const [count, setCount] = useState(0)
    const [users, setUsers] = useState(['Kat', 'Ira', 'Dimych'])

    const newArray = useMemo(() => {
        return users.filter(u => u.toLowerCase().indexOf('a') > -1)
    }, [users])

    const addUser = () => {
        return setUsers([...users, 'Sveta'])
    }

    return <>
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={addUser}>add user</button>
        {count}
        <Users users={newArray}/>
    </>
}

type BooksPropsType = {
    addBook: () => void
}

const BooksSecret = (props: BooksPropsType) => {
    console.log('BooksSecret')
    return <div>
        <button onClick={props.addBook}>add book</button>
    </div>
}

const Books = React.memo(BooksSecret)


export const LikeUseCallback = () => {
    console.log('LikeUseCallback')
    const [count, setCount] = useState(0)
    const [books, setBooks] = useState(['JS', 'CSS', 'React'])

    const memoizedAddBook = useMemo(() => {
        return () => {
            setBooks([...books, 'Angular'])
        }
    }, [books])

    const memoizedAddBook2 = useCallback(() => {
         setBooks([...books, 'Angular'])
    }, [books])

    return <>
        <button onClick={() => setCount(count + 1)}>+</button>
        {count}
        <Books addBook={memoizedAddBook2}/>
    </>
}
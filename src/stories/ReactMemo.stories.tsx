import React, {useState} from 'react';

export default {
    title: 'React.memo demo'
}

type CounterPropsType = { count: number }
export type UsersPropsType = { users: Array<string> }

const Counter = (props: CounterPropsType) => {
    return <div>{props.count}</div>
}

const UsersSecret = (props: UsersPropsType) => {
    console.log('USERS')
    return <div>
        {props.users.map((u, i) => {
            return <div key={i}>{u}</div>
        })}
    </div>
}

const Users = React.memo(UsersSecret)

export const Example1 = () => {
    const [count, setCount] = useState(0)
    const [users, setUsers] = useState(['Kat', 'Ira', 'Ann'])

    const addUser = () => {
        return setUsers([...users, 'Sveta'])
    }

    return <>
        <button onClick={addUser}>add user</button>
        <button onClick={() => setCount(count + 1)}>+</button>
        <Counter count={count}/>
        <Users users={users}/>
    </>
}
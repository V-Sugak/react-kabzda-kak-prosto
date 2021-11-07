import React, {useState} from "react";

type UncontrolledRatingPropsType = {}

export function UncontrolledRating(props: UncontrolledRatingPropsType) {

    const [value, setValue] = useState<number>(0)


    return (
        <div>
            <Star selected={value > 0}/>
            <button onClick={() => setValue(1)}>1</button>

            <Star selected={value > 1}/>
            <button onClick={() => setValue(2)}>2</button>

            <Star selected={value > 2}/>
            <button onClick={() => setValue(3)}>3</button>

            <Star selected={value > 3}/>
            <button onClick={() => setValue(4)}>4</button>

            <Star selected={value > 4}/>
            <button onClick={() => setValue(5)}>5</button>
        </div>
    )


}

type StarPropsType = {
    selected: boolean
}

function Star(props: StarPropsType) {


    console.log('Star rendering')
    return <span> {props.selected ? <b>star </b> : 'star'}</span>
}


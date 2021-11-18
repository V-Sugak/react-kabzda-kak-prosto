import React from "react";

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5

export type RatingPropsType = {
    value: RatingValueType
    setRatingValue: (value: RatingValueType) => void
}

function Rating(props: RatingPropsType) {
    console.log('Rating rendering')

    return (
        <div>
            <Star selected={props.value > 0} setRatingValue={() => props.setRatingValue(1)}/>
            <Star selected={props.value > 1} setRatingValue={() => props.setRatingValue(2)}/>
            <Star selected={props.value > 2} setRatingValue={() => props.setRatingValue(3)}/>
            <Star selected={props.value > 3} setRatingValue={() => props.setRatingValue(4)}/>
            <Star selected={props.value > 4} setRatingValue={() => props.setRatingValue(5)}/>
        </div>
    )


}

type StarPropsType = {
    selected: boolean
    setRatingValue: () => void
}

function Star(props: StarPropsType) {
    console.log('Star rendering')
    return <span onClick={props.setRatingValue}> {props.selected ? <b>star </b> : 'star'}</span>
}

export default Rating;
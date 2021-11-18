import React, {useState} from 'react';
import {Story, Meta} from '@storybook/react';
import Rating, {RatingPropsType, RatingValueType} from "./Rating";

export default {
    title: 'Rating',
    component: Rating
} as Meta;

const Template: Story<RatingPropsType> = (arg) => <Rating {...arg} />

export const EmptyRating = Template.bind({})
EmptyRating.args = {
    value: 0,
    setRatingValue: x => x
}

export const Rating1 = Template.bind({})
Rating1.args = {
    value: 1,
    setRatingValue: x => x
}

export const Rating2 = Template.bind({})
Rating2.args = {
    value: 2,
    setRatingValue: x => x
}

export const Rating3 = Template.bind({})
Rating3.args = {
    value: 3,
    setRatingValue: x => x
}

export const Rating4 = Template.bind({})
Rating4.args = {
    value: 4,
    setRatingValue: x => x
}

export const Rating5 = Template.bind({})
Rating5.args = {
    value: 5,
    setRatingValue: x => x
}



export const RatingChanging = () => {
    const [rating, setRating] = useState<RatingValueType>(3)
    return <Rating value={rating} setRatingValue={setRating}/>
}
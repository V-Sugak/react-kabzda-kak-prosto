import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import Rating from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";


function App() {
    console.log('App rendering')
    return (
        <div>
            {/* <PageTitle title={'This is App component'}/>
            <PageTitle title={'My friends'}/>
            <Rating value={3}/>*/}
            {/*<Accordion title={'Menu'} collapsed={true}/>
            <Accordion title={'Books'} collapsed={false}/>
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>*/}
            <OnOff/>
            <OnOff/>
        </div>
    )
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    console.log('PageTitle rendering')
    return <h1>{props.title}</h1>
}

export default App;

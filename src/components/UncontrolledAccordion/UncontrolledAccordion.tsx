import React, {useReducer} from "react";
import {reducer, TOGGLE_COLLAPSED} from "./reducer";

export type UncontrolledAccordionPropsType = {
    title: string
}

function UncontrolledAccordion(props: UncontrolledAccordionPropsType) {
//    const [collapsed, setCollapsed] = useState<boolean>(false);
    const [state, dispatch] = useReducer(reducer, {collapsed: false});
    return (
        <div>
            { /*  <AccordionTitle title={props.title} setCollapsed={() => setCollapsed(!collapsed)}/> */}
            <AccordionTitle title={props.title} setCollapsed={() => dispatch({type: TOGGLE_COLLAPSED})}/>

            {!state.collapsed && <AccordionBody/>}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
    setCollapsed: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering')
    return <h3 onClick={props.setCollapsed}>{props.title}</h3>
}

function AccordionBody() {
    console.log('AccordionBody rendering')
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}

export default UncontrolledAccordion;
import React, {useState} from "react";

type UncontrolledAccordionPropsType = {
    title: string
    // collapsed:boolean
}


function UncontrolledAccordion(props: UncontrolledAccordionPropsType) {
    const [collapsed, setCollapsed] = useState<boolean>(false);
    return (
        <div>
            <AccordionTitle title={props.title}/>
            <button onClick={() => {
                setCollapsed(!collapsed)
            }}>TOGGLE
            </button>
            {!collapsed && <AccordionBody/>}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering')
    return <h3>{props.title}</h3>
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
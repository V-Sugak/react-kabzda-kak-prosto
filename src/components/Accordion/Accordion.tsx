import React from "react";

type ItemType = {
    title: string
    value: any
}

export type AccordionPropsType = {
    title: string
    collapsed: boolean
    setAccordionCollapsed: (collapsed: boolean) => void
    /**
     * Element that showed when it is open (not collapsed)
     */
    items: ItemType[]
    /**
     * Callback that is called when some item clicked
     * @param value is value of clicked item
     */
    onClick: (value: any) => void
}

function Accordion(props: AccordionPropsType) {
    console.log('Accordion rendering')
    return (
        <div>
            <AccordionTitle title={props.title}
                            setAccordionCollapsed={() => props.setAccordionCollapsed(!props.collapsed)}/>
            {!props.collapsed && <AccordionBody onClick={props.onClick} items={props.items}/>}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
    setAccordionCollapsed: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering')
    return <h3 onClick={() => props.setAccordionCollapsed()}>{props.title}</h3>
}

export type AccordionBodyPropsType = {
    items: ItemType[]
    onClick: (value: any) => void
}

function AccordionBody(props: AccordionBodyPropsType) {

    return (<ul>
        {props.items.map((i, index) => <li onClick={() => props.onClick(i.value)} key={index}>{i.title}</li>)}
    </ul>)
}

export default Accordion;
import React from 'react'
import SidebarData from './SidebarData'


/* Renders sublist */
const SubListItem = (props) => {
    return (
        <li>{props.subItem.icon}{props.subItem.subTitle}</li>
    );
}

/* Renders list */
const ListItem = (props) => {

    return (
        <li>
        {props.item.icon}
        {props.item.title}
            <ul>
                {props.item.hasSubNav ? props.item.subNav.map((subItem, index) => {
                    return <SubListItem subItem={subItem} key={index}/>
                }) : null}
            </ul>
        </li>
    );
}

/* Renders sidebar */
function Sidebar(){
    const listItems = SidebarData.map((item, index) =>
        <ListItem item={item} key={index} />
    );
    return (
      <ul>{listItems}</ul>
    );
}

export default Sidebar

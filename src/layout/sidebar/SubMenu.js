import React, {Fragment, useState} from 'react'
import styled from 'styled-components'

const ItemBar = styled.div`
    display: flex;
    color: #e1e9fc;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    list-style: none;
    height: 40px;
    text-decoration: none;
    font-size: 18px;

    &:hover {
        background: #0c7bc4;
        cursor: pointer;
        transform: scale(0.9);
        border-radius: 8px;
    }

`
const ItemLabel = styled.span`
    color: white;
    margin-left: 16px;
`

const DropDownItem = styled.a`
    background: #414757;
    height: 60px;
    padding-left: 1rem;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #f5f5f5;
    font-size: 18px;

    &:hover {
        background: #632ce4;
        cursor: pointer;
    }

    &:active {
        background: #632ce4;
        transform: scale(0.9);
        border-radius: 8px;
        margin-bottom: 5px;
        margin-top: 5px;
    }
`

const SubMenu = (props) => {
    const [subMenuOpen, SetSubMenuOpen] = useState(false);
    const toggleSubMenuOpen = () => SetSubMenuOpen(!subMenuOpen);

    //TODO: select button
    const [btnSelected, SetBtnSelected] = useState(false);
    const toggleBtnSelected = () => {
        SetSubBtnSelected(!subBtnSelected);
    } 

    //TODO: select subButton
    const [subBtnSelected, SetSubBtnSelected] = useState(false);
    const toggleSubBtnSelected = () => {
        SetSubBtnSelected(!subBtnSelected);
        
    } 
    let subBtnStyle = subBtnSelected ? {background: "#632ce4"} : null;

    return (
        <Fragment>
        <ItemBar onClick={(props.item.subNav && toggleSubMenuOpen)} >
            <div>
                {props.item.icon}
                <ItemLabel>{props.item.title}</ItemLabel>
            </div>
            <div>
                {props.item.subNav && subMenuOpen ? 
                props.item.onOpenSubMenu : props.item.subNav ?
                props.item.onCloseSubMenu : null}
            </div>
        </ItemBar>

        {subMenuOpen && props.item.subNav.map((item, index) => {
            return (
                <DropDownItem key={index} onClick = {toggleSubBtnSelected} style={subBtnStyle} >
                    {item.icon}
                    <ItemLabel >{item.subTitle}</ItemLabel>
                </DropDownItem>
            )
        })}
        </Fragment>
    )

}

export default SubMenu;
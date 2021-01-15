import React, {Fragment, useState} from 'react'
import styled from 'styled-components'

const ItemBar = styled.div`
    display: flex;
    color: #e1e9fc;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    list-style: none;
    height: 60px;
    text-decoration: none;
    font-size: 18px;
`
const ItemLabel = styled.span`
    color: white;
    margin-left: 16px;
`

const  DropDownItem = styled.a`
    background: #414757;
    height: 60px;
    padding-left: 2rem;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #f5f5f5;
    font-size: 18px;

    &:hover {
        background: #632ce4;
        cursor: pointer;
    }
`

const SubMenu = (props) => {
    const [subMenuOpen, SetSubMenuOpen] = useState(false);
    const toggleSubMenuOpen = () => SetSubMenuOpen(!subMenuOpen);

    return (
        <Fragment>
        <ItemBar onClick={props.item.subNav && toggleSubMenuOpen}>
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
                <DropDownItem key={index}>
                    {item.icon}
                    <ItemLabel>{item.subTitle}</ItemLabel>
                </DropDownItem>
            )
        })}
        </Fragment>
    )

}

export default SubMenu;
import React, {Fragment, useState} from 'react'
import styled from 'styled-components'

const ItemBar = styled.a`
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

const Item = styled.a``

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




    // Handle which maze user clicked and pass information to parent
    const algorithmBtnHandler = (event) => {
        const algorithmChoice = event.target.closest('a').childNodes[1].textContent;
        switch(algorithmChoice) {
            case "Kruskal's Algorithm":
                props.setMazeAlgorithm('Kruskal');
              break;
            case "Prim's Algorithm":
                props.setMazeAlgorithm('Prim');
              break;
            case "A*":
                props.setPathAlgorithm('A*');
              break;
            case "Dijkstra":
                props.setPathAlgorithm('Dijkstra');
              break;
            case "Breath First Search (BFS)":
                props.setPathAlgorithm('BFS');
              break;
            case "Depth First Search (DFS)":
                props.setPathAlgorithm('DFS');
              break;
            default:
                console.log("Bad Alogrithm Choice")
          }
    } 

    const functionBtnChoose = (event) => {
        const btnChoice = event.target.closest('a').childNodes[1].textContent;
        switch(btnChoice) {
            case "Generate Walls":
                props.buttonSelected('Walls');
              break;
            case "Clean Path":
                props.buttonSelected('Clean');
              break;
            case "Reset":
                props.buttonSelected('Reset');
              break;
            default:
                console.log("Bad Button Choice")
          }
    } 

    return (
        <Fragment>
        <ItemBar onClick={(props.item.subNav && toggleSubMenuOpen) 
                            || (!props.item.subNav && functionBtnChoose)} >
                {props.item.icon}
                <ItemLabel>{props.item.title}</ItemLabel>
            <div>
                {props.item.subNav && subMenuOpen ? 
                props.item.onOpenSubMenu : props.item.subNav ?
                props.item.onCloseSubMenu : null}
            </div>
        </ItemBar>

        {subMenuOpen && props.item.subNav.map((item, index) => {
            return (
                <DropDownItem key={index} onClick={algorithmBtnHandler} >
                    {item.icon}
                    <ItemLabel>{item.subTitle}</ItemLabel>
                </DropDownItem>
            )
        }, this)}
        
        </Fragment>
    )

}

export default SubMenu;
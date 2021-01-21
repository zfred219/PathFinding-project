import React, {Fragment} from 'react'
import styled from 'styled-components'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import SidebarData from './SidebarData'
import SubMenu from './SubMenu'

const Nav = styled.div`
    background: #15171c;
    height: 50px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

const NavIcon = styled.a`
    margin-left: 2rem;
    font-size: 2rem;
    height: 60px;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    &:hover {
        cursor: pointer;
    }
`;

const SidebarNav = styled.nav`
    background: #15171c;    
    width: 250px;
    height: 100vh;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    left: ${({ sidebarShow }) => (sidebarShow ? '0' : '-100%')};
    transition: 500ms;
    z-index: 10;
`;

const SidebarWrap = styled.div`
    width: 100%;
`


const Sidebar = (props) => {
    return(
        <Fragment>
            <Nav>
                <NavIcon to='#'>
                    <FaIcons.FaBars style={{color: "white"}} onClick={props.handleSidebar}/>
                </NavIcon>
             </Nav>
            <SidebarNav sidebarShow={props.sidebar}>
                <SidebarWrap>
                    <NavIcon to='#'>
                        <AiIcons.AiOutlineClose style={{color: "white"}} onClick={props.handleSidebar}/>
                    </NavIcon>
                    {SidebarData.map((item, index)=>{
                        return <SubMenu item={item} key ={index}/>
                    })}
                </SidebarWrap>
            </SidebarNav>
        </Fragment>
        
    );
};

export default Sidebar

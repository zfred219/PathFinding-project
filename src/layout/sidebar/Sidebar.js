import React, {Fragment, useState} from 'react'
import styled from 'styled-components'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import SidebarData from './SidebarData'
import SubMenu from './SubMenu'

const Nav = styled.div`
    background: #15171c;
    height: 60px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

const NavIcon = styled.a`
    margin-left: 2rem;
    font-size: 2rem;
    height: 80px;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    //TODO: Area too large
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
    transition: 350ms;
    z-index: 10;
`;

const SidebarWrap = styled.div`
    width: 100%;
`


const Sidebar = () => {
    const [sidebar, setSidebar] = useState(true);
    const showSidebar = () => setSidebar(!sidebar);

    return(
        <Fragment>
            <Nav>
                <NavIcon to='#'>
                    <FaIcons.FaBars style={{color: "white"}} onClick={showSidebar}/>
                </NavIcon>
             </Nav>
            <SidebarNav sidebarShow={sidebar}>
                <SidebarWrap>
                    <NavIcon to='#'>
                        <AiIcons.AiOutlineClose style={{color: "white"}} onClick={showSidebar}/>
                    </NavIcon>
                    {SidebarData.map((item, index)=>{
                        return <SubMenu item={item} index={index} />
                    })}
                </SidebarWrap>
            </SidebarNav>
        </Fragment>
        
    );
};

export default Sidebar

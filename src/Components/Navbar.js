import React, { useState } from "react";
import { Link } from "react-scroll";
import styled from "styled-components";

const List = styled.ul`

    display:flex;
    align-items:center;
    justify-content:center;
    

    @media (max-width:768px){
        display:flex;
        flex-direction:column;
        align-items:flex-start;
        justify-content:flex-start;
        position:fixed;
        margin:-20px;
        width:200px;
        height:100vh;
        background:black;
        box-shadow: 0 40px 60px rgba(0,0,0,0.1);
        padding: 100px 0 0 10px;
        transition: 0.3s ease-in-out
    }

`

const ListItem = styled.li`
    list-style:none;
    padding:0 20px;
    position:relative;

    @media (max-width:768px){
        margin-bottom:25px;

    }
    

`


const NavbarContainer = styled.nav`

    padding: 0.5em 0.5em;
    display:flex;
    align-items:center;
    justify-content:space-between;

`

const MobileMode = styled.div`
    display:none;
    @media (max-width:768px){
        display:block
    }
    

`

const Icons = styled.i`
    // color: #006ea9;
    position:fixed;
    right:1em;
    top:1em;
    @media (max-width:768px){
        font-size:24px;
        cursor:pointer;
    }

`


const NavBar = (props) => {

    const [state, changeState] = useState(false);

    const handleClick = () => changeState(!state)

    const LinkStyle = {
        textDdecoration: "none",
        fontSize:"1.3rem",
        fontWeight:600,
        color:"Black",
    }


    return (
        <NavbarContainer>
            <div>
                <List>
                    <ListItem><Link style={LinkStyle} smooth={true} duration={500} onClick={handleClick} to="about">Search.</Link></ListItem>
                    <ListItem><Link style={LinkStyle} smooth={true} duration={500} onClick={handleClick} to="skills">Favorites.</Link></ListItem>
                    <ListItem><Link style={LinkStyle} smooth={true} duration={500} onClick={handleClick} to="work">Nearby.</Link></ListItem>
                    <ListItem><Link style={LinkStyle} smooth={true} duration={500} onClick={handleClick} to="contact">Login.</Link></ListItem>
                </List>
            </div>
            <MobileMode>
                <Icons onClick={handleClick}  className={state ? "fas fa-times" : "fas fa-bars"} />
            </MobileMode>
        </NavbarContainer>
    )

}

export default NavBar
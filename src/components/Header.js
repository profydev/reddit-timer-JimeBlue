import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Logo from '../assets/logo.svg';

const StyledHeader = styled.header`
  padding: 0 5rem;

  @media screen and (max-width: 768px) {
    padding: 1.5rem 1rem;
  }
`;


const Nav = styled.div`
  padding-top: 2rem;
  display: flex;
  justify-content: space-between;
  align-itmes: center;
  flex-wrap: wrap;
`;

const StyledLogo = styled.div`
  img {
    display: block;
  }

  a {
    height: 19px;
  }
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: poiner;

  span {
    height: 2px;
    width: 25px;
    background: #000;
    margin-bottom: 0.25rem;
    border-radius: 0.313rem;
  }

  @media screen and (max-width: 768px) {
    display: flex;
  }
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-itmes: center;
  padding-top: 0.406rem;
  marging-right: 1.188rem;
  } 

 
  

  @media screen and (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;
    max-height: ${({ isOpen }) => (isOpen ? '300px' : '0')};
    transition: max-height 0.3s ease-in;
    width: 100%;
  }
`;
const MenuLink = styled.div`
  padding-left: 1.625rem;
  cursor: pointer;
  text-align: center;

  a {
    text-decoration: none;
    color: #636363;
  }
`;

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <StyledHeader>
      <Nav>
        <StyledLogo>
          <Link to="/">
            <img src={Logo} alt="Application Logo" />
          </Link>
        </StyledLogo>
        <Hamburger onClick={() => setIsOpen(!isOpen)}>
          <span />
          <span />
          <span />
        </Hamburger>
        <Menu isOpen={isOpen}>
          <MenuLink>
            <Link to="/search/javascript">Search</Link>
          </MenuLink>
          <MenuLink>
            <Link to="/#how-it-works">How it works</Link>
          </MenuLink>
          <MenuLink>
            <Link to="/#about">About</Link>
          </MenuLink>
        </Menu>
      </Nav>
    </StyledHeader>
  );
};

export default Header;

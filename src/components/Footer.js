import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import sign from '../assets/sign.svg';

const StyledFooter = styled.footer`
  color: blue;
`;

const Footer = () => (
  <StyledFooter>
    <ul>
      <li>
        <a href="https://profy.dev/employers">profy.dev</a>
      </li>
      <li>
        <Link to="/">
          <img src={sign} alt="footer logo" />
        </Link>
      </li>
      <li>
        <Link to="/terms">Terms & Privacy</Link>
      </li>
    </ul>
  </StyledFooter>
);
export default Footer;

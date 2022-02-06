import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import sign from '../assets/sign.svg';

const StyledFooter = styled.footer`
  width: 100%;

  ul {
    list-style-type: none;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }

  li:not(:last-child) {
    margin-bottom: 1rem;
  }

  li:nth-child(1) {
    padding-left: 1rem;
  }

  li:nth-child(2) {
    padding-left: 1.625rem;
  }

  li:nth-child(3) {
    padding-left: 0.9rem;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  @media screen and (min-width: 480px) {
    padding: 0.5rem 0 0.5rem;

    ul {
      flex-direction: row;
      align-items: flex-start;
    }
  }
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
        <Link to="/terms">Terms and Privacy</Link>
      </li>
    </ul>
  </StyledFooter>
);
export default Footer;

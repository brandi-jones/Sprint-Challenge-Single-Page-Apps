import React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";

const HeaderDiv = styled.h1`
  
  font-family: 'Sigmar One', cursive;
  font-size: 3rem;
  background-color: #a2f2d8
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  font-family: 'Amatic SC', cursive;
  font-size: 2rem;
  background-color: lightblue;
  padding: .5rem;
  margin-top: -2rem;
  font-weight: bold;
`;



export default function Header() {
  return (
    <header className="ui centered">
      <HeaderDiv>Rick &amp; Morty Fan Page</HeaderDiv>
      <Nav>
        <Link className="link" to="/">Home</Link>
        <Link className="link" to="/characters">Characters</Link>
      </Nav>
    </header>
  );
}

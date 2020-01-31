import React from "react";
import styled from "styled-components";

const Header = styled.h2`
  font-family: 'Amatic SC', cursive;
  font-size: 3rem;
  text-align: center;
`;

const WelcomeImg = styled.div`
  display: flex;
  justify-content: center;
`;

export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <header>
        <Header>Welcome to the ultimate fan site!</Header>
        <WelcomeImg>
          <img
            className="main-img"
            src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
            alt="rick"
          />
        </WelcomeImg>
  
      </header>
    </section>
  );
}

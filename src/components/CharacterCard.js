import React from "react";
import styled from "styled-components";


const CardBody = styled.h2`
  font-family: 'Amatic SC', cursive;
  font-size: 2rem;
  margin: 1rem;
`;
const Card = styled.div`
  background-color: #a2f2d8;
  border: 2px solid black;
  text-align: center;
  margin: 1rem;
`;

export default function CharacterCard(props) {
  return (
    <Card>
      <CardBody>{props.name}</CardBody>
    </Card>
  );
}

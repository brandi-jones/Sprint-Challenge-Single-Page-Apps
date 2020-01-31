import React, { useState, useEffect } from "react";
import CharacterCard from "./CharacterCard.js";
import styled from "styled-components";

const SearchDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 25%;
`;

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export default function SearchForm(props) {
  console.log(props.characters)
  const [searchCharacters, setSearchCharacters] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = event => {
    setSearchCharacters(event.target.value);
  }

  //get an array of character names of characters passed in props
  const namesArray = props.characters.map(character => {
    return character.name;
  })

  //to filter out search results
  useEffect(() => {
    const results = namesArray.filter(character => 
      character.toLowerCase().includes(searchCharacters.toLowerCase())
    )

    setSearchResults(results);

  }, [searchCharacters, props.characters]);

  return (
    <SearchContainer>
    <SearchDiv>
      <input
          type="text"
          placeholder="Search"
          value={searchCharacters}
          onChange={handleChange}
        />

        
        {searchResults.map(name => {
          return <CharacterCard key={name} name={name} />
        })}
        

    </SearchDiv>
    </SearchContainer>
  );
}

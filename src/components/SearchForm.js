import React, { useState, useEffect } from "react";
import CharacterCard from "./CharacterCard.js";
import styled from "styled-components";

const SearchInputDiv = styled.div`
  display: flex;
  justify-content: center;
  font-family: 'Sigmar One', cursive;
  font-size: 1.5rem;
  
`;

const SearchContainer = styled.div`
  margin: 3rem 10rem 3rem 10rem;
  display: flex;
  flex-direction: column;
`;

const SearchResultsDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
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

      <SearchInputDiv>
        <label htmlFor="search">Search for Characters:</label>
        <input
            name="search"
            type="text"
            value={searchCharacters}
            onChange={handleChange}
          />
      </SearchInputDiv>
          
      <SearchResultsDiv>
          {searchResults.map(name => {
            return <CharacterCard key={name} name={name} />
          })}
      </SearchResultsDiv>

   
    </SearchContainer>
  );
}

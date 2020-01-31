import React, { useState, useEffect } from "react";

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

  }, [searchCharacters]);

  return (
    <section className="search-form">
      <input
          type="text"
          placeholder="Search"
          value={searchCharacters}
          onChange={handleChange}
        />

        <ul>
          {searchResults.map(name => (
            <li>{name}</li>
          ))}
        </ul>

    </section>
  );
}

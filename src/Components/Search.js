import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  margin-bottom: 2em;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Input = styled.input`
  font-size: 1.5em;
  border: 1px solid #aaa;
  border-radius: 5px;
  margin-right: 5px;
  padding: 0.2em 0.5em;
`;

const Search = ({ onSearch }) => {
  const [searchText, setSearchText] = useState("");
  return (
    <Wrapper>
      <Input
        type="text"
        placeholder="search..."
        onChange={e => setSearchText(e.target.value)}
      />
      <button onClick={() => onSearch(searchText)}>Search</button>
    </Wrapper>
  );
};

export default Search;

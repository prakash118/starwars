import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  margin-bottom: 2em;
`;

const Table = styled.table`
  margin: 0 auto;
  text-align: left;
  min-width: 400px;

  tr:nth-child(odd) {
    background-color: #ddd;
  }

  td,
  th {
    padding: 5px 8px;
  }
`;

const List = ({ data = [] }) => {  
  return (
    <Wrapper>
      <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Gender</th>
            <th>Birth year</th>
          </tr>
        </thead>
        <tbody>
          {data.map(({ name, gender, birth_year }) => (
            <tr key={name.replace(" ", "").trim()}>
              <td>{name}</td>
              <td>{gender}</td>
              <td>{birth_year}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Wrapper>
  );
};

export default List;

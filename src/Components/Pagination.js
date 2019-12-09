import React from "react";
import styled from "styled-components";

const Button = styled.button`
  border-radius: 50%;
  width: 50px;
  height: 50px;
  margin: 5px 10px;
`;

const Pagination = ({ total, next, previous, onClick }) => {
  const handlePrevious = () => previous && onClick(previous);
  const handleNext = () => next && onClick(next);
  return (
    <div>
      {total && <p>{`Total characters: ${total}`}</p>}
      <div>
        <Button onClick={handlePrevious}>&larr;</Button>
        <Button onClick={handleNext}>&rarr;</Button>
      </div>
    </div>
  );
};

export default Pagination;

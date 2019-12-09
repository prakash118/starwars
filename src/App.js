import React, { useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { asyncFetchData } from "./action";
import { apiURL } from "./const";

import Search from "./Components/Search";
import List from "./Components/List";
import Pagination from "./Components/Pagination";

const Wrapper = styled.div`
  text-align: center;
`;

const App = ({
  asyncFetchData,
  data,
  nextPageURL,
  previousPageURL,
  totalPages,
  loading
}) => {
  useEffect(() => {
    asyncFetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSearch = text => asyncFetchData(`${apiURL}?search=${text}`);

  return (
    <Wrapper>
      <h1>Star Wars: Characters</h1>
      <Search onSearch={handleSearch} />
      {!loading ? <List data={data} /> : <div>Loading...</div>}
      <Pagination
        loading={loading}
        total={totalPages}
        next={nextPageURL}
        previous={previousPageURL}
        onClick={asyncFetchData}
      />
    </Wrapper>
  );
};

const mapStateToProps = state => state;

const mapDispatchToProps = { asyncFetchData };

export default connect(mapStateToProps, mapDispatchToProps)(App);

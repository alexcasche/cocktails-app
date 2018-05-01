import React from 'react';
import CardGridContainer from 'containers/CardGridContainer';
import SearchBar from 'components/organisms/SubHeader/SearchBar/SearchBar';

const SearchPage = () => {
  
  return (
    <div>
      <SearchBar />
      <CardGridContainer />
    </div>
  )
}

export default SearchPage;
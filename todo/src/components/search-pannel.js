import React from 'react';

const SearchPannel = () => {
  const searchText = 'Search here!';
  const searchStyle = {
    fontSize: '20px'
  }
  return <input placeholder={searchText} className={'foo'} style={searchStyle}/>;
}

export default SearchPannel;
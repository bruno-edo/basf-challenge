import React, { useState } from 'react';

import SearchBarMaterial from 'material-ui-search-bar';

const SearchBar = ({ submitCallback, loading }) => {
  const [query, setQuery] = useState('');

  return (
    <SearchBarMaterial
      style={{ width: '100%' }}
      value={query}
      onChange={setQuery}
      onRequestSearch={submitCallback}
      disabled={loading}
    />
  );
};

export default SearchBar;

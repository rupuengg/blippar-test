import React from 'react';
import { connect } from 'react-redux';
import { SearchActionTypes } from '../../actions/search.action';

export const Search = ({ filterLists }) => {
  const [searchText, setSearchText] = React.useState('');

  const handleChange = (e) => {
    const txt = e.target.value;

    setSearchText(txt);

    if (txt.length >= 3) {
      filterLists(txt);
    } else {
      filterLists('');
    }
  }

  return (
    <div>
      <input type="text" value={searchText} onChange={e => handleChange(e)} />
    </div>
  );
}

const maptDispatchToProps = (dispatch) => {
  return {
    filterLists: (searchTerm) => dispatch({ type: SearchActionTypes.SET_SEARCH_DATA, payload: searchTerm }),
  }
}

export default connect(null, maptDispatchToProps)(Search);
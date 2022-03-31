import React from 'react';
import { connect } from 'react-redux';

export const Result = ({ filterLists }) => {
  return (
    <div>
      <ul>
        {filterLists.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
    </div>
  );
}

const mapStateToProps = (store) => {
  return {
    filterLists: store.search.filterLists
  }
}

export default connect(mapStateToProps)(Result);
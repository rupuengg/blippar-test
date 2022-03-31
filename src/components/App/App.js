import React from 'react';
import { connect } from 'react-redux';
import { fetchList } from '../../actions/search.action';
import Result from '../Result/Result';
import Search from '../Search/Search';
import './App.css';

const App = (props) => {
  React.useEffect(() => {
    props.fetchList();
  });

  return (
    <div className="App">
      <Search />
      <Result />
    </div>
  );
}

const maptDispatchToProps = (dispatch) => {
  return {
    fetchList: () => dispatch(fetchList()),
  }
}

export default connect(null, maptDispatchToProps)(App);

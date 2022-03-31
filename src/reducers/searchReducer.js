import { SearchActionTypes } from "../actions/search.action";

const initialState = {
  searchLists: [],
  filterLists: []
}

export const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SearchActionTypes.SET_SEARCH_LIST_DATA:
      return { ...state, searchLists: action.payload };
    case SearchActionTypes.SET_SEARCH_DATA:
      let filterLists = [];
      if (action.payload !== '') {
        filterLists = state.searchLists.filter(item => item.indexOf(action.payload) >= 0);
      }
      return { ...state, filterLists: filterLists };
    default:
      return state;
  }
}

export default searchReducer;
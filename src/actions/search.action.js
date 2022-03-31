import searchApi from "../api/search";

export const SearchActionTypes = {
  SET_SEARCH_LIST_DATA: 'search/SET_SEARCH_LIST_DATA',
  SET_SEARCH_LIST_NO_DATA: 'search/SET_SEARCH_LIST_NO_DATA',
  SET_SEARCH_DATA: 'search/SET_SEARCH_DATA',
}

export const fetchList = () => async (dispatch) => {
  await searchApi.fetchList()
    .then(res => {
      if (res.length > 0) {
        dispatch({
          type: SearchActionTypes.SET_SEARCH_LIST_DATA,
          payload: res.split(/\r?\n/)
        })
      } else {
        dispatch({
          type: SearchActionTypes.SET_SEARCH_LIST_NO_DATA,
          payload: res
        })
      }
    });
};
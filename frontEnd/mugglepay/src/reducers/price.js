const initState = { isFetching: false, data: {}, err: null };

const reducer = (state = initState, action) => {
  // console.log(action);
  switch (action.type) {
    case 'PRICE_FETCH_START':
      return {
        ...state,
        isFetching: true
      };
    case 'PRICE_FETCH_FAIL':
      return {
        ...state,
        err: action.error,
        isFetching: false
      };
    case 'PRICE_FETCH_SUCCESS':
      return {
        ...state,
        isFetching: false,
        err: null,
        data: action.data
      };
    default:
      return state;
  }
};

export default reducer;
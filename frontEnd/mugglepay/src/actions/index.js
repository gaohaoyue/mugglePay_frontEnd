import axios from "axios";
const uri = "http://localhost:8080";
function requestStart() {
  return {
    type: "PRICE_FETCH_START",
  };
}

function requestSuccess(response) {
  return {
    type: "PRICE_FETCH_SUCCESS",
    data: response.data
  };
}

function requestFail(error) {
  return {
    type: "PRICE_FETCH_FAIL",
    error,
  };
}

export const getData = () => {
  return (dispatch) => {
    console.log("loading start....");
    dispatch(requestStart());
    axios
      .get(uri)
      .then((response) => {
        console.log("loading success!");
        dispatch(requestSuccess(response));
      })
      .catch((err) => {
        console.log("loading failed!");
        dispatch(requestFail(err));
      });
  };
};

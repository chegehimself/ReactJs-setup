import CONSTANTS from "../constants/index";
import api from "../api";

const { FETCH_HOME } = CONSTANTS;

const home = () => dispatch => api({
  url: '/api/v1/auth/',
  method: 'GET',
})
  .then((data) => {
    console.log(data)
    dispatch({
      type: FETCH_HOME,
      payload: data,
    });
  }).catch((err) => {
    console.log(err)
    dispatch({
      type: "ERROR",
      payload: err.response.data,
    });
  });

export default home;
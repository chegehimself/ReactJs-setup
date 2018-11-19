import api from '../api';

const SignUp = (email, username, password) => dispatch => api({
  url: `/api/v1/auth/signup`,
  method: 'POST',
  data: { email, username, password },
})
  .then((response) => {
    dispatch({
      type: 'SIGNUP_SUCCESS',
      payload: response.data,
    });
  }).catch((err) => {
    dispatch({
      type: 'SIGNUP_ERROR',
      payload: err.response.data.message
    });
  });

export default SignUp;
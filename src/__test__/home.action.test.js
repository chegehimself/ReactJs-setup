import expect from 'expect';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import home from '../actions/home.action';
import CONSTANTS from '../constants/index'

import RESPONSES from '../mock/responses';

const { FETCH_HOME } = CONSTANTS;
const middleware = [thunk];
const mockStore = configureMockStore(middleware);
let store;

describe('Signup Action tests', () => {

  store = mockStore({});
  afterEach(() => {
    store.clearActions();
  });

  it('should dispatch RESETTING_PASSWORD_ACTION when reseting password', () => {
    const data = RESPONSES.SUCCESSFUL_RESPONSE;
    store.dispatch(home()).then(() => {
      expect(store.getActions()).toContainEqual({
        payload: data,
        type: FETCH_HOME,
      });
    });
  });

  it('should dispatch RESETTING_ERROR_ACTION when reseting password', () => {
    const data = RESPONSES.ERROR_RESPONSE;
    store.dispatch(home()).then(() => {
      expect(store.getActions()).toContainEqual({
        payload: data.user.message,
        type: "ERROR",
      });
    });
  });
});
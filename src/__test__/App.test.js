
import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Home from '../components/Home';

configure({ adapter: new Adapter() });

const mockStore = configureMockStore([thunk]);
const store = mockStore({});

describe('Renders <Home/> correctly', () => {

  const props = {
    data: {
      user: '',
    },
    loading: true,
    resetPassword: expect.any(Function),
    onSubmit: jest.fn(),
  };

  const wrapper = shallow(
    <Provider store={store}>
      <Home {...props} />
    </Provider>,
  ).dive({ context: { store: mockStore() } });

  it('renders without crashing', () => {
    expect(() =>wrapper).not.toThrow();
  });

  it('renders ForgotPasswordComponent component', () => {
    expect(wrapper.find('Home').length).toBe(1);
  });

});
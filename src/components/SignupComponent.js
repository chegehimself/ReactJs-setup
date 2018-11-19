import React, {Component} from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'proptypes';
import { connect } from 'react-redux';
import SignUp from "../actions/signup.action";
import '../App.scss';
import InlineError from '../components/messages/InlineError'

class SignupComponent extends Component {
  state = {
    data: {
      username: '',
      email: '',
      password: '',
    },
    errors: {},
  };

  onChange = (e) => {
    const { data } = this.state;
    this.setState({
      data: { ...data, [e.target.name]: e.target.value },
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { data } = this.state;
    const { sign_user } = this.props;
    console.log(this.props)
    const { password } = data;
    const { username } = data;
    const { email } = data;
    sign_user(email, username, password);
    console.log(this.state)

  };

  render() {

    const { data } = this.state;
    let { errors } = this.state;
    errors = { ...errors, ...this.props };
    console.log(this.props)
    return (
      <div>
        <header id="top" className="section_top">
          <h2 id="title-header">Thriller Diary</h2>
          <nav>
            <ul>
              <li><a href="/">
                <button className="btn-toHome">Home</button>
              </a></li>
              <Link to="login">
                <li>
                  <button className="btn-toSign">Sign-In</button>
                </li>
              </Link>
            </ul>
          </nav>
        </header>

        <main>
          <section className="sign wrap-content">
            <form id="signup-form" onSubmit={this.onSubmit}>
              <div>

              </div>
              <div id="return" className="group-form">

              </div>
              <div className="group-form">
                <input type="text" name="username" id="username" className="form-input" placeholder="username" value={data.username} onChange={this.onChange}  />
                {errors.username && <InlineError text={errors.username} />}
              </div>
              <div className="group-form">
                <input id="email" name="email" className="form-input" placeholder="Email" onChange={this.onChange}  />
                <p>{errors.email && <InlineError text={errors.email} />}</p>
              </div>
              <div className="group-form">
                <input type="password" name='password' id="password" className="form-input" placeholder="Password" onChange={this.onChange}  />
                {errors.password && <InlineError text={errors.password} />}
              </div>
              <div className="group-form">
                <button className="btn-reg">Register</button>
              </div>
            </form>
          </section>

          <footer className="section_footer home_footer">
            <div className="wrap-content">
              <p>&copy; 2018 Thriller Diary</p>
            </div>
          </footer>
        </main>
      </div>
    );
  }
}

SignupComponent.propTypes = {
  sign_user: PropTypes.func.isRequired,
};

const mapStateToProps = ({ signup }) => ({ ...signup });

export default connect(mapStateToProps, {
  sign_user: SignUp,
})(SignupComponent);

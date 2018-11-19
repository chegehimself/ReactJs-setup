import React, {Component} from 'react';
import '../App.scss';
import { Link } from 'react-router-dom';
import login from "../actions/login.action";

class LoginComponent extends Component {

  render() {
    return (
      <div>
        <header id="top" className="section_top">
          <h2 id="title-header">Thriller Diary</h2>
          <nav>
            <ul>
              <li><a href="/">
                <button className="btn-toHome">Home</button>
              </a></li>
              <Link to="signup">
              <li><a href="/signup">
                <button className="btn-toSign">Sign-Up</button>
              </a></li>
              </Link>
            </ul>
          </nav>
        </header>

        <main>
          <section className="sign wrap-content">
            <form id="signin-form">
              <div id="return" className="group-form">

              </div>
              <div className="group-form">
                <input type="email" id="email" className="form-input" placeholder="Email" required />
              </div>
              <div className="group-form">
                <input type="password" id="password" className="form-input" placeholder="Passowrd" required />
              </div>
              <div className="group-form">
                <button onClick="signIn()" className="btn-reg">Sign In</button>
              </div>
            </form>
          </section>
        </main>
        <footer className="section_footer home_footer">
          <div className="wrap-content">
            <p>&copy; 2018 Thriller Diary</p>
          </div>
        </footer>
      </div>
    );
  }
}


export default LoginComponent;
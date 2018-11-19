import React, {Component} from 'react';
// import '../App.scss';
import { connect } from 'react-redux';
import PropTypes from 'proptypes';
import home from "../actions/home.action";
import { Link } from 'react-router-dom';

class Home extends Component {

  componentDidMount() {
    const { homeFetch } = this.props;
    homeFetch();
  }

  render() {
    return (
       <div>
        <header id="top" className="section_top">
          <h1 id="title-header">Thriller Diary</h1>
          <nav>
            <ul>
              <a href="/signin">
                <Link to="login">
                  <button className="btn-toHome">Sign-In</button>
                </Link>
              </a>
              <a href="/signup">
                <Link to="signup">
                <li>
                  <button className="btn-toSign">Sign-Up</button>
                </li>
                </Link>
              </a>
            </ul>
          </nav>
        </header>

        <main>
          <section className="section" id="marketing">
            <div className="wrap-content">
              <p className="text-white">
                <p className="text-white">
                Are you tired of writing your dairy on paper and having to carry the book everywhere you go?
                </p>
                <p>
                Imagine of accessing your Dairy from everywhere you want, at anytime you want and suprisingly, not only with a computer but also a mobile device readily available from your pocket or handbag..Or just borrow from a friend for a second.
                </p>
                <p>
                Your Struggle Ends right now, right here! Click the button below to join us and get a chance to enjoy our free services</p>
                <a href="/signup">
                  <button id="join-btn" className="text-white">Join for Free</button>
                </a>
              </p>
            </div>
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

Home.propTypes = {
  homeFetch: PropTypes.func.isRequired,
};

export const mapStateToProps = ({ home }) => ({ ...home });

export default connect(mapStateToProps, {
  homeFetch: home,
})(Home);
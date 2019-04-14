import React, { Component } from 'react';
import styled from 'styled-components';
// import Snackbar from 'material-ui/Snackbar';
// import PropTypes from 'prop-types';
// import { withRouter } from 'react-router';
// import { authActions } from '../../actions';
// import { connect } from 'react-redux';
import { CarboniteLoader } from 'carbonite';

const theme = {
  primary: '#ff7058',
  secondary: '#f1543f',
  light: '#c7c7c7',
  underTone: '#ffcbb2',
};


// import TextField from 'material-ui/TextField';

const SubmitButton = styled.button`

`;

const CarboniteInput = styled.input`
  width:100%;
  padding:5px 7px;
  border: none;
  border-bottom: 2px solid ${theme.primary};
  &:focus {
    border-bottom: 2px solid ${theme.secondary};
  }
`;

class LoginContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      open: false,
      message: '',
    };
    this.onLogin = this.onLogin.bind(this);
    // this.handleRequestClose = this.handleRequestClose.bind(this);
  }

  onEmailBlur() {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(this.state.email)) {
      this.setState({ email: '' });
      this.setState({
        open: true,
        message: 'The email entered is invalid',
      });
    }
  }

  onLogin() {
    const { email, password } = this.state;
    if (!(this.state.email || this.state.password)) {
      this.setState({
        open: true,
        message: 'There was a problem logging in, please try again',
      });
    } else {
      this.props.history.push('/form');
      this.setState({ error: '' });
    }
  }

  // handleRequestClose() {
  //   this.setState({
  //     open: false,
  //   });
  // }

  render() {
    const loader = (
      <div>{this.props.loading ? (<CarboniteLoader />) : ''}</div>
    );
    return (
			<LoginContainer>
        <ul className="input__list">
           <li>
            <CarboniteInput
              placeholder="Enter your Email"
              value={this.state.email}
              onChange={e => this.setState({ email: e.target.value })}
              onBlur={() => this.onEmailBlur()}
            />
          </li>
          <li>
            <CarboniteInput
              type="password"
              placeholder="Enter your Password"
              floatingLabelText="Password"
              value={this.state.password}
              onChange={e => this.setState({ password: e.target.value })}
            />
          </li>
          <li>
            <SubmitButton
              label="Submit"
              onClick={this.onLogin}
            />
          </li>
          {loader}
        </ul>
      </LoginContainer>
    );
  }
}


// const mapStateToProps = state => ({
//   loggedIn: state.auth.loggedIn,
//   loading: state.auth.loading,
//   error: state.auth.error,
// });

// const mapDispatchToProps = dispatch => ({
//   loginUser: data => dispatch(authActions.loginUser(data)),
// });

// LoginContainer.propTypes = {
//   loading: PropTypes.bool.isRequired,
//   error: PropTypes.string.isRequired,
//   history: PropTypes.object.isRequired,
// };

// const LoginWithRouter = withRouter(connect(mapStateToProps,
//   mapDispatchToProps)(LoginContainer));

export default LoginContainer;

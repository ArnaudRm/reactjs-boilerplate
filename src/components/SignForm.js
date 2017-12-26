import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../actions';

class SignForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
        email: '',
      password: '',
      passwordConfirm:''
    };
  }

  renderErrorMessage = () => {
    if (this.props.error) {
      return (
        <div>
          {this.props.error}
        </div>
      );
    }
  };

  renderSubmitButton = () => {
    const { formType } = this.props;
    let buttonText = formType === 'register' ? 'Sign up' : 'Sign in';
    return (
      <button type="submit">
        {buttonText}
      </button>
    );
  };

  onEmailChange = (event) => {
    this.setState({
      email: event.target.value,
    });
  };

  onPasswordChange = (event) => {
    this.setState({
      password: event.target.value,
    });
  };

  onPasswordConfirmChange = (event) => {
    this.setState({
      passwordConfirm: event.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const {
      email,
      password,
    } = this.state;

    if (this.props.formType === 'register') {
      this.props.createUser({
        email,
        password,
      });
    } else {
      this.props.loginUser({
        email,
        password,
      });
    }
  };

  renderPasswordConfirm = () => {
    const { formType } = this.props;
    if (formType === 'register') {
      return (
        <input
          name="passwordConfirm"
          type="password"
          required
          placeholder="Confirm password"
          onChange={this.onPasswordConfirmChange}
          value={this.state.passwordConfirm}
        />
      );
    }
  };

  render() {
    return (
      <form  onSubmit={this.onSubmit}>
        <input
          name="email"
          type="email"
          required
          placeholder="Email"
          onChange={this.onEmailChange}
          value={this.state.email}
        />
        <input
          name="password"
          type="password"
          required
          placeholder="Password"
          onChange={this.onPasswordChange}
          value={this.state.password}
        />
        {this.renderPasswordConfirm()}
        {this.renderSubmitButton()}
        {this.renderErrorMessage()}
      </form>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  const { error } = auth;
  return { error };
};

export default connect(mapStateToProps, { loginUser })(SignForm);

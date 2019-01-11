import React, { Component } from 'react';
import Snackbar from '../Snackbar/Snackbar';
import mailicon from '../../../assets/mailicon.png';
import './Joinus.scss';

class JoinUs extends Component {
  snackbarRef = React.createRef();

  constructor() {
    super();
    this.state = { email: '' };
  }

  validate = () => {
    const { email } = this.state;
    const valid = !/^[a-zA-Z0-9]+(([a-zA-Z0-9]\.)*)+([a-zA-Z0-9]*)+@[a-zA-Z0-9]+(\.+[A-Za-z]+)+$/.test(
      email
    );

    return valid;
  };

  handleEmailChange = evt => {
    this.setState({ email: evt.target.value });
  };

  showSnackbarHandler = () => {
    this.snackbarRef.current.openSnackBar(
      'You are registered now :) Have a great shopping!'
    );
  };

  canBeSubmitted = () => {
    const { email } = this.state;
    const isDisabled = this.validate(email);

    return !isDisabled;
  };

  handleSubmit = () => {
    this.setState({ email: '' });
    const submit = !this.canBeSubmitted();

    return submit;
  };

  render() {
    const { email } = this.state;
    const isDisabled = this.validate(email);
    const error = '* Please enter valid e-mail: sample@samle.com!';

    return (
      <div className="joinus container">
        <div className="joinus-info col-6">
          <h2>NEWS LETTER</h2>
          <p>join us now to get all news and special offers</p>
        </div>
        <form onSubmit={this.handleSubmit} className="col-4">
          <div>
            <div className="mailfield col-4">
              <img src={mailicon} alt="mailicon" />
              <input
                type="text"
                placeholder="type your email here"
                value={email}
                required
                onChange={this.handleEmailChange}
              />
            </div>
            <button
              disabled={isDisabled}
              onClick={this.showSnackbarHandler}
              type="submit"
            >
              join us
            </button>
            <Snackbar ref={this.snackbarRef} />
          </div>
          <p className={!isDisabled || !email ? '' : 'showerror'}>{error}</p>
        </form>
      </div>
    );
  }
}
export default JoinUs;

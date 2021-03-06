import { Component } from 'react';
import { signIn, signUp } from '../utils/mixtape-api';
import './AuthPage.css';

export default class AuthPage extends Component {

  state = {
    isSignUp: true,
    name: '',
    email: '',
    password: '',
    error: ''
  }

  handleSwitch = () => {
    this.setState({ isSignUp: !this.state.isSignUp });
  }

  handleSubmit = async e => {
    const { isSignUp } = this.state;
    const { onUser, history } = this.props;
    e.preventDefault();
    this.setState({ error: '' });

    try {
      const action = isSignUp ? signUp : signIn;
      const user = await action(this.state);

      onUser(user);

      history.push('/profile-page');

    }
    catch (err) {
      this.setState({ error: err.error });
    }


  }

  handleNameChange = ({ target }) => {
    this.setState({ name: target.value });
  }
  handleEmailChange = ({ target }) => {
    this.setState({ email: target.value });
  }
  handlePasswordChange = ({ target }) => {
    this.setState({ password: target.value });
  }



  render() {
    const { isSignUp, name, email, password, error } = this.state;



    return (
      <div className="AuthPage">
        <h1>
          <div className="neon">Vibe Share</div>
        </h1>
        <form onSubmit={this.handleSubmit}>
          {isSignUp && <p>
            <label>
              <span>Name</span>
              <input name="name" value={name} required={true}
                onChange={this.handleNameChange} placeholder="Name"
              />
            </label>
          </p>}

          <p>
            <label>
              <span>Email</span>
              <input name="email" required={true}
                value={email} onChange={this.handleEmailChange} placeholder="Email Address" />
            </label>
          </p>

          <p>
            <label>
              <span>Password</span>
              <input name="password" type="password" required={true}
                value={password} onChange={this.handlePasswordChange} placeholder="Password" />
            </label>
          </p>

          <button type="submit">Sign {isSignUp ? 'Up' : 'In'}</button>
          <div type="button" className="switch" onClick={this.handleSwitch}>
            {isSignUp
              ? 'Already have an account?'
              : 'Need to create an account?'
            }
          </div>

          {error && <p className="Error">{error}</p>}
        </form>
      </div>
    );
  }

}
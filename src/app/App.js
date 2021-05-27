import { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
//import Home from '../home/Home';
import AuthPage from '../auth/AuthPage';
import PlaylistPage from '../playlist/PlaylistPage';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import './App.css';
import CreateMixTape from '../playlist/CreateMixTape';
import ProfilePage from '../Profile-Page/ProfilePage';
import MixtapeDetail from '../detail/MixtapeDetail';

class App extends Component {

  state = {
    token: window.localStorage.getItem('TOKEN'),
    userId: window.localStorage.getItem('USER_ID'),
    userName: window.localStorage.getItem('USER_NAME')
  }

  handleUser = user => {
    window.localStorage.setItem('USER_NAME', user.name);
    window.localStorage.setItem('USER_ID', user.id);
    window.localStorage.setItem('TOKEN', user.token);

    this.setState({ token: user.token });
  }

  render() {
    const { token, userName } = this.state;


    return (
      <div className="App">
        <Router>
          { token ? <Header userName={userName} /> : <div className="container">
            <div className="neon">Vibe Share</div>
          </div>}

          <main>

            <Switch>
              <Route path="/" exact={true}
                render={routerProps => (
                  <AuthPage {...routerProps}
                    onUser={this.handleUser} />
                )}
              />

              <Route path="/auth" exact={true}
                render={routerProps => (
                  <AuthPage {...routerProps}
                    onUser={this.handleUser} />
                )}
              />

              <Route path="/playlists" exact={true}
                render={routerProps => (
                  token
                    ? <PlaylistPage {...routerProps} />
                    : <Redirect to="/auth" />
                )}
              />

              <Route path="/create-mixtape" exact={true}
                render={routerProps => (
                  token
                    ? <CreateMixTape {...routerProps} />
                    : <Redirect to="/auth" />
                )}
              />

              <Route path="/mixtape/:id"
                render={routerProps => (
                  <MixtapeDetail {...routerProps} />
                )}
              />


              <Route path="/profile-page" exact={true}
                render={routerProps => (
                  token
                    ? <ProfilePage {...routerProps} userName={userName} />
                    : <Redirect to="/auth" />
                )}
              />

              <Redirect to="/" />

            </Switch>
          </main>
          <Footer />
        </Router>
      </div>
    );
  }

}


export default App;

import { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
//import Home from '../home/Home';
import AuthPage from '../auth/AuthPage';
//import Favorites from '../Profile-Page/ProfilePage';
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
          <Header userName={userName} />

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

              <Route path="/playlist/:id"
                render={routerProps => (
                  <div>Implement a page for id {routerProps.match.params.id}</div>
                )}
              />

              <Route path="/profile-page" exact={true}
                render={routerProps => (
                  token
                    ? <ProfilePage {...routerProps} />
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

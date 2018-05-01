import Auth0Lock from 'auth0-lock';
import { authClient, authDomain, authOptions } from 'services/AuthConfig';
import history from 'routes/history';
import store from 'redux/store';

import { getAppUser } from 'helpers/';
import { storeUserProfile, clearUserProfile } from 'actions/';

import './AuthLock.css'

export default class AuthLock {
  
  lock = new Auth0Lock(authClient, authDomain, authOptions);
  
  constructor() {
    this.handleAuthentication();
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
  }

  login() {
    this.lock.show();
  }

  handleAuthentication() {
    this.lock.on('authenticated', this.setSession.bind(this));
    this.lock.on('authorization_error', (err) => {
      console.log(err.error);
      history.replace('/');
    });
  }
  
  /* global localStorage */

  setSession(authResult) {
    if (authResult && authResult.accessToken && authResult.idToken) {
      let expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
      localStorage.setItem('access_token', authResult.accessToken);
      localStorage.setItem('id_token', authResult.idToken);
      localStorage.setItem('expires_at', expiresAt);
      this.lock.getUserInfo(authResult.accessToken, async function(error, profile) {
        if (!error) {
          localStorage.setItem("profile", JSON.stringify(profile));
          let appUser = await getAppUser();
          store.dispatch(storeUserProfile(appUser));
        }
      });
    }
  }

  logout() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    localStorage.removeItem('isAuthentiated');
    localStorage.removeItem('profile');
    store.dispatch(clearUserProfile());
    history.replace('/');
  }
  
  isAuthenticated() {
    let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  }
  
}
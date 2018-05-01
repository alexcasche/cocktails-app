import store from 'redux/store';

import { getAppUser, ensureAuthenticated, toggleDropDowns } from 'helpers/';
import { createAuthLock, storeUserProfile } from 'actions/';

export async function appSetup() {
  mockLocalStorage();
  addEventListeners();
  store.dispatch(createAuthLock());
  if(ensureAuthenticated()) {
    let appUser = await getAppUser();
    store.dispatch(storeUserProfile(appUser));
  }
};

function addEventListeners() {
  document.addEventListener("click", (e) => {
    toggleDropDowns(e)
  });
}

async function mockLocalStorage() {
  localStorage.setItem("profile",
  '{"sub":"auth0|5a7f7de86937c17375538152","nickname":"admin","name":"admin@pourguide.com","picture":"https://s.gravatar.com/avatar/6b9847678f0aeaa3e88b45b0190ddc3a?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fad.png","updated_at":"2018-03-09T19:51:56.692Z","https://pourguide.com/roles":["admin","user"]}'
  );
  var date = new Date();
  var expiresDate = date.setDate(date.getDate() + 1);
  localStorage.setItem('expires_at', expiresDate);
  let appUser = await getAppUser();
  store.dispatch(storeUserProfile(appUser));
}
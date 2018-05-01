import { 
  SET_ENV,
  STORE_ROUTE, 
  CREATE_AUTHLOCK, 
  DELETE_AUTHLOCK, 
  OPEN_MODAL, 
  CLOSE_MODAL 
} from './actionTypes';

import AuthLock from 'services/AuthLock';

/* global localStorage */

export function setEnv(payload) {
  return { type: SET_ENV, payload }
}

export function storeRoute(payload) {
  return { type: STORE_ROUTE, payload };
}

export function createAuthLock() {
  let payload = new AuthLock();
  return { type: CREATE_AUTHLOCK, payload };
}

export function deleteAuthLock() {
  return { type: DELETE_AUTHLOCK };
}

export function openModal(payload) {
  document.querySelector(".Modal").classList.remove("closed");
  document.querySelector(".Modal").classList.add("open");
  return { type: OPEN_MODAL, payload }
}

export function closeModal() {
  document.querySelector(".Modal").classList.remove("open");
  document.querySelector(".Modal").classList.add("closed");
  return { type: CLOSE_MODAL }
}
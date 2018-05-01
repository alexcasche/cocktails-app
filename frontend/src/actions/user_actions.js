import { 
  STORE_USER_PROFILE, 
  CLEAR_USER_PROFILE 
} from './actionTypes';

export function storeUserProfile(payload) {
  return { type: STORE_USER_PROFILE, payload }
}

export function clearUserProfile() {
  return { type: CLEAR_USER_PROFILE }
}
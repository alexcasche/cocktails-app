import { STORE_USER_PROFILE, CLEAR_USER_PROFILE } from 'actions/actionTypes';

const INITIAL_STATE = { profile: null };

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    
    case STORE_USER_PROFILE:
      return { ...state, profile: action.payload };
      
    case CLEAR_USER_PROFILE:
      return { ...state, profile: null };

    default:
      return state;

  }
}
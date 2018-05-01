import { SET_ENV, STORE_ROUTE, CREATE_AUTHLOCK, DELETE_AUTHLOCK, OPEN_MODAL, CLOSE_MODAL } from 'actions/actionTypes';

const INITIAL_STATE = { 
  env: null,
  routes: { current: null, previous: null },
  isReady: false,
  auth: { lock: null },
  modal: { isOpen: false, content: null }
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {

    case SET_ENV: 
      return {...state, env: action.payload };
    
    case STORE_ROUTE:
      return { ...state, routes: { previous: state.routes.current, current: action.payload } };
    
    case CREATE_AUTHLOCK:
      return { ...state, auth: action.payload };
      
    case DELETE_AUTHLOCK:
      return { ...state, auth: null };

    case OPEN_MODAL:
      return { ...state, modal: { isOpen: true, content: action.payload } };
      
    case CLOSE_MODAL:
      return { ...state, modal: { isOpen: false } };

    default:
      return state;

  }
}
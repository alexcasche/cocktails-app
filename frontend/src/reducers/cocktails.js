import { SELECT_COCKTAIL } from '../actions/cocktails';

const INITIAL_STATE = [];

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {

    case SELECT_COCKTAIL:
      return { ...state, state: action.payload }

    default:
      return state;

  }
}
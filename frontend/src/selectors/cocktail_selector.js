import { createSelector } from 'reselect';
import stopWord from ('stopword');

const cocktailsSelector = state => state.cocktails;
const searchTermSelector = state => state.searchTerm;

const searchCocktails = (cocktails, searchTerm, ignoreTerms) => {
  return cocktails.filter(cocktail => cocktail.name)
};

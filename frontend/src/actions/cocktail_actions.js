export const FETCH_COCKTAILS = 'FETCH_COCKTAILS';




export function fetchCocktails() {
  const cocktails = "Gin & Tonic";
  return {
    type: FETCH_COCKTAILS,
    payload: cocktails
  };
}
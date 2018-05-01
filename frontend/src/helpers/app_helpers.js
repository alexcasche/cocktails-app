/*  global localStorage  */

export const accessGranted = (role) => {
  let userRoles = getUserRoles();
  if (userRoles && ensureAuthenticated) {
    return userRoles.indexOf(role);
  }
  else return -1;
}

export const getUserRoles = () => {
  let userProfile = JSON.parse(localStorage.getItem("profile"));
  if (userProfile) {
    return userProfile["https://pourguide.com/roles"];
  }
}

export const ensureAuthenticated = () => {
  let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
  return new Date().getTime() < expiresAt;
}

export function loadingComplete() {
  document.body.classList.add("fixed");
  setTimeout(() => {
    document.querySelector(".LoadingPage.preload").style.display = "none";
    document.body.classList.remove("fixed");
  }, 2500);
}

export const getClassList = (e) => {
  return [...e.target.classList];
}

export function buildQuery(obj) {
  let queryArray = [];
  let queryString = "?";
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      queryArray.push({ key: key, value: obj[key] });
    }
  }
  queryArray.forEach((query) => {
    queryString = `${queryString}${query.key}=${query.value}&`;
  })
  return queryString.slice(0, -1);
}

export function getBaseRoute(route) {
  let paths = route.split('/');
  return paths[1];
}
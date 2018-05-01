import axios from 'axios';
const API_URL = process.env.REACT_APP_API_URL;

/*  global localStorage  */

export async function getAppUser() {
  const authUser = await getAuthUser();
  // if (authUser) {
  //   let mongoUser = await getMongoUser(authUser);
  //   mongoUser
  //     ? mongoUser = await matchUserProfiles(authUser, mongoUser)
  //     : mongoUser = await createMongoUser(authUser)
  //   return mongoUser;
  // }
  // return null;
  return authUser;
}

export function getAuthUser() {
  const authProfile = JSON.parse(localStorage.getItem("profile"));
  if (authProfile) {
    const authUser = {
      authID: authProfile.sub,
      username: authProfile.nickname,
      email: authProfile.name,
      picture: authProfile.picture,
      roles: authProfile["https://pourguide.com/roles"]
    }
    return authUser;
  }
  return null;
}

export function getMongoUser(authUser) {
  return axios.get(`${API_URL}/user/${authUser.authID}`)
    .then((response) => response.data.user)
    .catch((error) => {
      console.log(error);
      return null;
    });
}

export function matchUserProfiles(authUser, mongoUser) {
  // Update email + username if necessary
  if (authUser.email !== mongoUser.email || authUser.username !== mongoUser.username || authUser.roles !== mongoUser.roles) {
    const userProps = { email: authUser.email, username: authUser.username, roles: authUser.roles };
    axios.put(`${API_URL}/user/${authUser.authID}`, userProps)
      .then((response) => response.data.user)
      .catch((error) => {
        console.log(error);
        return mongoUser;
      });
  }
  return mongoUser;
}

export function createMongoUser(authUser) {
  return axios.post(`${API_URL}/users`, authUser)
    .then(response => response.data.user)
    .catch((error) => console.log(error));
}
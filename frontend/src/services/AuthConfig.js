import logo from 'assets/logo.svg';

export const authClient = "OOW2OZHVgfh8OYhVAohz7x5vZ0OfA6bY";
export const authDomain = "pourguide.auth0.com";

export const authOptions = {
  auth: {
    redirectUrl: `${process.env.REACT_APP_BASE_URL}/auth`,
    responseType: 'token id_token',
    sso: true,
    params: {
      scope: 'openid profile'
    }
  },
  languageDictionary: {
    title: ""
  },
  autoclose: true,
  theme: {
    logo: logo,
    primaryColor: "blue",
    labeledSubmitButton: false
  }
}
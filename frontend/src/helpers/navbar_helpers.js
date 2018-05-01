import React from 'react';
import { Link } from 'react-router-dom';

export function toggleDropDown() {
  document.querySelector(".dropdown").classList.toggle("active");
}

export function toggleMobileNav(e) {
  document.querySelector(".menu_icon").classList.toggle("active");
  document.querySelector(".main_nav").classList.toggle("open");
  document.querySelector(".BaseLayout").classList.toggle("mobile_nav_open");
  document.querySelector(".dropdown").classList.remove("active");
}

export function setAccountLinks(authLock, user) {
  let accountLinks = [];
  if (!user) {
    accountLinks[0] = <a onClick={authLock.login}>Login</a>
    accountLinks[1] = <a onClick={authLock.signup}>Sign Up</a>
  }
  else {
    accountLinks[0] = <Link to="/account">Account</Link>
    accountLinks[1] = <a onClick={authLock.logout}>Logout</a>
  }
  return accountLinks;
}
import React from 'react';

import { getClassList } from 'helpers/'

export const createOptions = (options, element) => {
  var output = [];
  options.forEach((option) => {
    element === "option" ?
      output.push(<option key={option}>{option}</option>) :
      output.push(<li key={option}>{option}</li>)
  });
  return output;
}

export function toggleDropDowns(e) {
  let classList = getClassList(e);
  if (classList.indexOf("dropdown") !== -1) {
    if(classList.indexOf("active") !==-1) {
      e.target.classList.toggle("active");
    }
    else {
      hideDropDowns();
      e.target.classList.add("active");
    }
  }
  else {
    hideDropDowns();
  }
}

function hideDropDowns() {
  let dropdowns = document.querySelectorAll('div.dropdown');
  if (dropdowns) {
    dropdowns.forEach((dropdown) => {
      dropdown.classList.remove("active");
    });
  }
}
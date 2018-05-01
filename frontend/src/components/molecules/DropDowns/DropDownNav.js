import React, { Component } from 'react';

import { NavLink } from 'components/atoms/Links';
import { DropDownStyled } from './DropDownList';
import DropDownHeader from './DropDownHeader';
import DropDownContent from './DropDownContent';

class DropDownNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDropDown: false,
      activeLink: ""
    }
  }
  updateActiveLink = (e) => {
    this.setState({activeLink: e.target.textContent});
  }
  openDropDown = () => {
    this.setState({showDropDown: !this.state.showDropDown});
  }
  componentDidMount() {
    this.setState({activeLink: document.querySelector(".DropDownContent .active").textContent})
  }
  render() {
    const dropDownLinks = this.props.links.map((link) => {
      return (
        <li key={link.name}>
          <NavLink to={link.url} onClick={this.updateActiveLink}>{link.name}</NavLink>
        </li>
      )
    });
    return (
      <DropDownStyled className="DropDown" onClick={this.openDropDown}>
        <DropDownHeader {...this.props} activeLink={this.state.activeLink} />
        <DropDownContent className={this.state.showDropDown ? 'DropDownContent open': 'DropDownContent'} {...this.props} >
          { dropDownLinks }
        </DropDownContent>
      </DropDownStyled>
    );
  }
}

export default DropDownNav;
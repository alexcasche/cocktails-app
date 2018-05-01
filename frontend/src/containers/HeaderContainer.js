import React from 'react';
import { connect } from 'react-redux';

import Header from 'components/organisms/Header/Header';

const HeaderContainer = (props) => {

  return (
    <Header {...props} />
  );
}

function mapStateToProps(state) {
  return {
    login: state.app.auth.login,
    user: state.user.profile,
    route: state.app.routes.current
  };
}

export default connect(mapStateToProps)(HeaderContainer);

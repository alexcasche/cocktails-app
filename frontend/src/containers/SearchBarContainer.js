import React, {Component} from 'react';
import { connect } from 'react-redux';

import SearchBar from 'components/organisms/structure/SearchBar';

class SearchBarContainer extends Component {

  render() {
    return (
      <SearchBar />
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.app.auth
  };
}

export default connect(mapStateToProps)(SearchBarContainer);

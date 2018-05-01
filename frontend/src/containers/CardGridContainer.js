import React, { Component } from 'react';
import { connect } from 'react-redux';

import CardGrid from 'components/organisms/CardGrid/CardGrid';

class CardGridContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cocktails: []
    }
  }

  componentWillMount() {
    this.setState({cocktails: this.props.cocktails});
  }

  render() {
    return (
      <CardGrid cards={this.state.cocktails} />
    );
  }
}

function mapStateToProps(state) {
  return {
    cocktails: state.cocktails
  };
}

export default connect(mapStateToProps)(CardGridContainer);

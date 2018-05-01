import React, { Component } from 'react';
import styled from 'styled-components';

import CardLink from './CardLink';
import CardImage from './CardImage';
import CardOverlay from './CardOverlay';
import CardFooter from './CardFooter';

import CardDetails from 'components/molecules/CardDetails';

const CardStyled = styled.div `
  position: relative;
  overflow: hidden;
`;

class Card extends Component {
  constructor(props) {
    super(props);
    this.card = props.card;
    this.toggleDetails = this.toggleDetails.bind(this);
    this.state = {
      showDetails: false
    }
  }
  toggleDetails(event) {
    event.preventDefault();
    this.setState({showDetails: !this.state.showDetails});
  }

  render() {
    return (
      <CardStyled className="Card">
        <CardLink to="/" visible={this.state}>
          <CardImage src={this.card.picture} alt={this.card.name} className="CardImage" />
          <CardOverlay className="CardOverlay" />
          <CardFooter card={this.card} toggleDetails={this.toggleDetails} />
        </CardLink>
        <CardDetails card={this.card} toggleDetails={this.toggleDetails} {...this.state} />
      </CardStyled>
    );
  }
}

export default Card;
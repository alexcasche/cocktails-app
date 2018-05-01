import React from 'react';
import TextField, { FieldStyled } from './TextField';

const TextAreaStyled = FieldStyled.withComponent('textarea');

class TextArea extends TextField {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    }
  }
  render() {
    return (
      <TextAreaStyled className="field" {...this.props} value={this.state.value} onChange={this.handleChange} />
    );
  }
}

export default TextArea;
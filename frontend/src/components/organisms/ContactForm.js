import React, { Component } from 'react';
import styled from 'styled-components';

import FieldGroup from 'components/atoms/FieldGroup';
import TextField from 'components/atoms/TextField';
import TextArea from 'components/atoms/TextArea';
import { ActionButton } from 'components/atoms/Buttons';

const FormStyled = styled.form `
  width: 100%;
  display: flex;
  flex-direction: column;
  & > * {
    width: calc(100% - 40px);
    max-width: calc(100% - 40px);
    min-width: calc(100% - 40px);
    margin: 0 auto 20px;
    &:last-child {
      width: 100%;
      max-width: none;
      margin-bottom: 0;
      height: 60px;
      font-size: 18px;
    }
  }
`

class ContactForm extends Component {
  
  handleSubmit(e) {
    const formID = e.target.id.replace("Button", "");
    const form = document.getElementById(formID);
    const requiredFields = form.querySelectorAll(".field:required");
    console.log(requiredFields);
  }
  
  render() {
    return (
      <FormStyled {...this.props} id="ContactForm">
        <FieldGroup>
          <TextField placeholder="First Name*" name="first-name" required />
          <TextField placeholder="Last Name*" name="last-name" required />
        </FieldGroup>
        <TextField placeholder="Subject*" name="subject" required />
        <TextArea rows="4" placeholder="Message*" name="message" required />
        <Button kind="action" primary fullWidth type="button" id="ContactFormButton" onClick={this.handleSubmit} >
          Submit
        </Button>
      </FormStyled>
    );
  }
}

export default ContactForm;
export { FormStyled };
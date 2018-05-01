import React from 'react';
import styled, { withTheme } from 'styled-components';

import ModalOverlay from 'components/atoms/overlays/ModalOverlay';
import ModalWrapper from 'components/atoms/wrappers/ModalWrapper';
import ModalHeader from 'components/atoms/headers/ModalHeader';
import ModalHeading from 'components/atoms/headings/ModalHeading';
import Button from 'components/atoms/Button';
import FontAwesome from 'components/atoms/FontAwesome';
import ContactForm from 'components/organisms/forms/ContactForm';

const ModalStyled = styled.div `
  position: absolute;
  top: 0;
  display: flex;
  padding: 50px 0;
  flex-direction: column;
  justify-content: center;
  width: 100vw;
  min-height: 100vh;
  overflow-y: scroll;
  z-index: 999;
`;

const FormModal = (props) => {
  
  return (
    <ModalStyled>
      <ModalOverlay/>
      <ModalWrapper>
        <ModalHeader>
          <Button kind="action" warning>
            <FontAwesome icon={props.theme.closeIcon} />
          </Button>
          <ModalHeading>Contact Us</ModalHeading>
        </ModalHeader>
        <ContactForm />
      </ModalWrapper>
    </ModalStyled>
  );
}

export default withTheme(FormModal);
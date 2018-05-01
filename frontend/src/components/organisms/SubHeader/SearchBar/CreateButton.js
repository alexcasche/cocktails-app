import { Button } from 'components/atoms/Buttons';

const CreateButton = Button.extend `
  background: #55ACEE;
  padding: 0 30px;
  height: 100%;
  font-size: 14px;
  border-radius: 0;
  i {
    font-size: 11px;
    position: relative;
    bottom: 1px;
  }
`;

export default CreateButton;
import styled from 'styled-components';

const SubmitButton = styled.input`
  width: 100%;
  border: none;
  border-radius: 3px;
  margin-top: 12px;
  background-color: ${(props) => props.theme.accentColor};
  color: white;
  text-align: center;
  padding: 8px 0px;
  font-weight: 700;
  opacity: ${(props) => (props.disabled ? '0.4' : '1')};
  cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
`;

export default SubmitButton;

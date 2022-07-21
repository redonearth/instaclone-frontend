import styled from 'styled-components';

interface IFormErrorProps {
  message?: string;
}

const SFormError = styled.span`
  color: tomato;
  font-weight: 700;
  font-size: 12px;
  margin: 5px 0px;
`;

function FormError({ message }: IFormErrorProps) {
  return message ? <SFormError>{message}</SFormError> : null;
}

export default FormError;

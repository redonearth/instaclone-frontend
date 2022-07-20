import styled from 'styled-components';

interface IInputProps {
  type?: string;
  placeholder: string;
}

const SInput = styled.input`
  width: 100%;
  border-radius: 3px;
  padding: 7px;
  background-color: #fafafa;
  border: 0.5px solid ${(props) => props.theme.borderColor};
  margin-top: 5px;
  box-sizing: border-box;
  &::placeholder {
    font-size: 12px;
  }
`;

function Input({ type = 'text', placeholder }: IInputProps) {
  return <SInput type={type} placeholder={placeholder} />;
}

export default Input;

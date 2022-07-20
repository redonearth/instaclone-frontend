import styled from 'styled-components';

interface ISubmitButton {
  value: string;
}

const SButton = styled.input`
  cursor: pointer;
  width: 100%;
  border: none;
  border-radius: 3px;
  margin-top: 12px;
  background-color: ${(props) => props.theme.accentColor};
  color: white;
  text-align: center;
  padding: 8px 0px;
  font-weight: 700;
`;

function SubmitButton({ value }: ISubmitButton) {
  return <SButton value={value} />;
}

export default SubmitButton;

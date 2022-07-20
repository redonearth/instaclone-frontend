import { ReactNode } from 'react';
import styled from 'styled-components';
import { BaseBox } from '../shared';

interface IFormBoxProps {
  children: ReactNode;
}

const Container = styled(BaseBox)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 35px 40px 25px 40px;
  margin-bottom: 10px;
  form {
    margin-top: 35px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

function FormBox({ children }: IFormBoxProps) {
  return <Container>{children}</Container>;
}
export default FormBox;
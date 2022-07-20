import { ReactNode } from 'react';
import styled from 'styled-components';

interface IHeaderContainerProps {
  children: ReactNode;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function HeaderContainer({ children }: IHeaderContainerProps) {
  return <Container>{children}</Container>;
}

export default HeaderContainer;

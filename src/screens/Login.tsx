import styled from 'styled-components';
import { darkModeVar, isLoggedInVar } from '../apollo';

const Container = styled.div``;

const Title = styled.h1`
  color: ${(props) => props.theme.fontColor};
`;

function Login() {
  return (
    <Container>
      <Title>로그인</Title>
      <button onClick={() => isLoggedInVar(true)}>지금 로그인!</button>
      <button onClick={() => darkModeVar(true)}>다크 모드</button>
      <button onClick={() => darkModeVar(false)}>라이트 모드</button>
    </Container>
  );
}

export default Login;

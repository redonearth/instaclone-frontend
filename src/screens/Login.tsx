import {
  faFacebookSquare,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
// import { darkModeVar, isLoggedInVar } from '../apollo';

const Container = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const WhiteBox = styled.div`
  background-color: white;
  border: 1px solid rgb(219, 219, 219);
  width: 100%;
`;

const TopBox = styled(WhiteBox)`
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
    input {
      width: 100%;
      border-radius: 3px;
      padding: 7px;
      background-color: #fafafa;
      border: 0.5px solid rgb(219, 219, 219);
      margin-top: 5px;
      box-sizing: border-box;
      &::placeholder {
        font-size: 12px;
      }
      &:last-child {
        border: none;
        margin-top: 12px;
        background-color: #0095f6;
        color: white;
        text-align: center;
        padding: 8px 0px;
        font-weight: 700;
      }
    }
  }
`;

const BottomBox = styled(WhiteBox)`
  padding: 20px 0px;
  text-align: center;
  a {
    font-weight: 700;
    color: #0095f6;
  }
`;

const Wrapper = styled.div`
  max-width: 350px;
  width: 100%;
`;

const Separator = styled.div`
  margin: 20px 0px 30px 0px;
  display: flex;
  justify-content: center;
  width: 100%;
  align-items: center;
  div {
    width: 100%;
    height: 2px;
    background-color: rgb(219, 219, 219);
  }
  span {
    margin: 0px 10px;
    color: rgb(219, 219, 219);
  }
`;

const FacebookLogin = styled.div`
  color: #385285;
  span {
    margin-left: 5px;
    font-weight: 700;
  }
`;

function Login() {
  return (
    <Container>
      <Wrapper>
        <TopBox>
          <div>
            <FontAwesomeIcon icon={faInstagram} size={'3x'} />
          </div>
          <h1>Instagram</h1>
          <form>
            <input type="text" placeholder="사용자 이름" />
            <input type="text" placeholder="비밀번호" />
            <input type="submit" placeholder="로그인" />
          </form>
          <Separator>
            <div />
            <span>또는</span>
            <div />
          </Separator>
          <FacebookLogin>
            <FontAwesomeIcon icon={faFacebookSquare} />
            <span>Facebook으로 로그인</span>
          </FacebookLogin>
          <span>비밀번호를 잊으셨나요?</span>
        </TopBox>
        <BottomBox>
          <span>계정이 없으신가요?</span> <a href="#">가입하기</a>
        </BottomBox>
      </Wrapper>
    </Container>
  );
}

export default Login;

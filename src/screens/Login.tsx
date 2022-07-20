import {
  faFacebookSquare,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import BottomBox from '../components/auth/BottomBox';
import AuthLayout from '../components/auth/Container';
import HeaderContainer from '../components/auth/HeaderContainer';
import FormBox from '../components/auth/FormBox';
import Input from '../components/auth/Input';
import Separator from '../components/auth/Separator';
import SubmitButton from '../components/auth/SubmitButton';
import routes from '../routes';

const FacebookLogin = styled.div`
  color: #385285;
  padding-block: 8px;
  span {
    margin-left: 5px;
    font-weight: 700;
  }
`;

/* const ForgotPassword = styled.span`
  margin-top: 12px;
  font-size: 12px;
`; */

function Login() {
  return (
    <AuthLayout>
      <FormBox>
        <HeaderContainer>
          <FontAwesomeIcon icon={faInstagram} size={'3x'} />
        </HeaderContainer>
        <form>
          <Input placeholder="사용자 이름" />
          <Input placeholder="비밀번호" />
          <SubmitButton value="로그인" />
        </form>
        <Separator />
        <FacebookLogin>
          <FontAwesomeIcon icon={faFacebookSquare} />
          <span>Facebook으로 로그인</span>
        </FacebookLogin>
        {/* <ForgotPassword>비밀번호를 잊으셨나요?</ForgotPassword> */}
      </FormBox>
      <BottomBox
        cta="계정이 없으신가요?"
        link={routes.signup}
        linkText="가입하기"
      />
    </AuthLayout>
  );
}

export default Login;

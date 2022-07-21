import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import BottomBox from '../components/auth/BottomBox';
import AuthLayout from '../components/auth/Container';
import HeaderContainer from '../components/auth/HeaderContainer';
import FormBox from '../components/auth/FormBox';
import Input from '../components/auth/Input';
import SubmitButton from '../components/auth/SubmitButton';
import { FatLink } from '../components/sharedStyles';
import routes from '../routes';
import PageTitle from '../components/PageTitle';

const Subtitle = styled(FatLink)`
  font-size: 17px;
  text-align: center;
  margin-top: 10px;
`;

function Signup() {
  return (
    <AuthLayout>
      <PageTitle title="가입" />
      <FormBox>
        <HeaderContainer>
          <FontAwesomeIcon icon={faInstagram} size={'3x'} />
          <Subtitle>친구들의 사진과 동영상을 보려면 가입하세요.</Subtitle>
        </HeaderContainer>
        <form>
          <Input placeholder="이메일 주소" />
          <Input placeholder="성명" />
          <Input placeholder="사용자 이름" />
          <Input placeholder="비밀번호" />
          <SubmitButton type="submit" value="가입" />
        </form>
      </FormBox>
      <BottomBox
        cta="계정이 있으신가요?"
        link={routes.home}
        linkText="로그인"
      />
    </AuthLayout>
  );
}

export default Signup;

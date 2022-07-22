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
import PageTitle from '../components/PageTitle';
import { SubmitHandler, useForm } from 'react-hook-form';
import FormError from '../components/auth/FormError';
import { gql, useMutation } from '@apollo/client';
import { logUserIn } from '../apollo';
import { useLocation } from 'react-router-dom';
import Notification from '../components/Notification';

interface IFormData {
  username: string;
  password: string;
  result?: string;
}

interface ILoginMutation {
  login: {
    ok: boolean;
    error?: string;
    token?: string | null;
  };
}

interface ILoginState {
  username?: string;
  password?: string;
  message?: string;
}

const LOGIN_MUTATION = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      ok
      token
      error
    }
  }
`;

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
  const location = useLocation();
  const state = location.state as ILoginState | null;
  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
    getValues,
    setError,
    clearErrors,
  } = useForm<IFormData>({
    mode: 'onBlur',
    defaultValues: {
      username: state?.username,
      password: state?.password,
    },
  });
  const onCompleted = (data: ILoginMutation) => {
    const {
      login: { ok, error, token },
    } = data;
    if (!ok) {
      return setError('result', { message: error });
    }
    if (token) {
      logUserIn(token);
    }
  };
  const [login, { loading }] = useMutation(LOGIN_MUTATION, {
    onCompleted,
  });
  const onSubmitValid: SubmitHandler<IFormData> = () => {
    if (loading) return;
    const { username, password }: IFormData = getValues();
    login({
      variables: {
        username,
        password,
      },
    });
  };
  const clearLoginError = () => {
    clearErrors('result');
  };
  return (
    <AuthLayout>
      <PageTitle title="로그인" />
      <FormBox>
        <HeaderContainer>
          <FontAwesomeIcon icon={faInstagram} size={'3x'} />
        </HeaderContainer>
        {state?.message && <Notification message={state.message} />}
        <form onSubmit={handleSubmit(onSubmitValid)}>
          <Input
            {...register('username', {
              required: '사용자 이름은 필수입니다.',
              minLength: {
                value: 5,
                message: '사용자 이름은 5글자 이상이어야 합니다.',
              },
              pattern: {
                value: /^[a-zA-Z0-9]{1,15}$/g,
                message:
                  '한글, 특수문자를 제외한 1~15자 이내 영문만 사용 가능합니다.',
              },
              onChange: clearLoginError,
            })}
            name="username"
            placeholder="사용자 이름"
            hasError={Boolean(errors.username?.message)}
          />
          <FormError message={errors.username?.message} />
          <Input
            {...register('password', {
              required: '비밀번호는 필수입니다.',
              onChange: clearLoginError,
            })}
            name="password"
            type="password"
            placeholder="비밀번호"
            hasError={Boolean(errors.password?.message)}
          />
          <FormError message={errors.password?.message} />
          <SubmitButton
            type="submit"
            value={loading ? '로딩 중...' : '로그인'}
            disabled={!isValid || loading}
          />
        </form>
        <Separator />
        <FacebookLogin>
          <FontAwesomeIcon icon={faFacebookSquare} />
          <span>Facebook으로 로그인</span>
        </FacebookLogin>
        {/* <ForgotPassword>비밀번호를 잊으셨나요?</ForgotPassword> */}
        <FormError message={errors.result?.message} />
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

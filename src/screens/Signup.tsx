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
import { SubmitHandler, useForm } from 'react-hook-form';
import { gql, useMutation } from '@apollo/client';
import FormError from '../components/auth/FormError';
import { useNavigate } from 'react-router-dom';

interface IFormData {
  name: string;
  username: string;
  email: string;
  password: string;
  result?: string;
}

const Subtitle = styled(FatLink)`
  font-size: 17px;
  text-align: center;
  margin-top: 10px;
`;

const CREATE_ACCOUNT_MUTATION = gql`
  mutation createAccount(
    $name: String!
    $username: String!
    $email: String!
    $password: String!
  ) {
    createAccount(
      name: $name
      username: $username
      email: $email
      password: $password
    ) {
      ok
      error
    }
  }
`;

function Signup() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
    getValues,
    setError,
  } = useForm<IFormData>({
    mode: 'onChange',
  });
  const onCompleted = (data: any) => {
    const { createAccount: ok, error } = data;
    if (!ok) {
      return setError('result', { message: error });
    }
    const { username, password }: IFormData = getValues();
    navigate(routes.home, {
      state: {
        username,
        password,
        message: '계정이 생성되었습니다. 로그인 해주세요!',
      },
    });
  };
  const [createAccount, { loading }] = useMutation(CREATE_ACCOUNT_MUTATION, {
    onCompleted,
  });
  const onSubmitValid: SubmitHandler<IFormData> = () => {
    if (loading) return;
    const { name, username, email, password }: IFormData = getValues();
    createAccount({
      variables: {
        name,
        username,
        email,
        password,
      },
    });
  };
  return (
    <AuthLayout>
      <PageTitle title="가입" />
      <FormBox>
        <HeaderContainer>
          <FontAwesomeIcon icon={faInstagram} size={'3x'} />
          <Subtitle>친구들의 사진과 동영상을 보려면 가입하세요.</Subtitle>
        </HeaderContainer>
        <form onSubmit={handleSubmit(onSubmitValid)}>
          <Input
            {...register('email', { required: '이메일은 필수입니다.' })}
            name="email"
            type="text"
            placeholder="이메일 주소"
          />
          <FormError message={errors.email?.message} />
          <Input
            {...register('name', { required: '성명은 필수입니다.' })}
            name="name"
            type="text"
            placeholder="성명"
          />
          <FormError message={errors.name?.message} />
          <Input
            {...register('username', { required: '사용자 이름은 필수입니다.' })}
            name="username"
            type="text"
            placeholder="사용자 이름"
          />
          <FormError message={errors.username?.message} />
          <Input
            {...register('password', { required: '비밀번호는 필수입니다.' })}
            name="password"
            type="password"
            placeholder="비밀번호"
          />
          <FormError message={errors.password?.message} />
          <SubmitButton
            type="submit"
            value={loading ? '로딩 중...' : '가입'}
            disabled={!isValid || loading}
          />
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

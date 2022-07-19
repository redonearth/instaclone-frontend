import { isLoggedInVar } from '../apollo';

function Login() {
  return (
    <>
      <h1>로그인</h1>
      <button onClick={() => isLoggedInVar(true)}>지금 로그인!</button>
    </>
  );
}

export default Login;

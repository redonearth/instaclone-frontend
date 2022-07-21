import { logUserOut } from '../apollo';

function Home() {
  return (
    <>
      <h1>로그인 되었어요!</h1>
      <button onClick={() => logUserOut()}>로그아웃</button>
    </>
  );
}

export default Home;

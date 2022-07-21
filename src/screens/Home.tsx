import { useNavigate } from 'react-router-dom';
import { logUserOut } from '../apollo';

function Home() {
  const navigate = useNavigate();
  return (
    <>
      <h1>로그인 되었어요!</h1>
      <button onClick={() => logUserOut(navigate)}>로그아웃</button>
    </>
  );
}

export default Home;

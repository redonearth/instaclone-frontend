import { useReactiveVar } from '@apollo/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { isLoggedInVar } from './apollo';
import Home from './screens/Home';
import Login from './screens/Login';

function App() {
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={isLoggedIn ? <Home /> : <Login />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

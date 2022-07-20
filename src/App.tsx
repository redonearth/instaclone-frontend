import { useReactiveVar } from '@apollo/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { darkModeVar, isLoggedInVar } from './apollo';
import routes from './routes';
import Home from './screens/Home';
import Login from './screens/Login';
import Signup from './screens/Signup';
import { GlobalStyles, darkTheme, lightTheme } from './styles';

function App() {
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  const darkMode = useReactiveVar(darkModeVar);
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path="/" element={isLoggedIn ? <Home /> : <Login />} />
          {!isLoggedIn && <Route path={routes.signup} element={<Signup />} />}
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;

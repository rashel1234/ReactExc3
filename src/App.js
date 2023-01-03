import { Switch, Route } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import UserProfile from './components/Profile/UserProfile';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import PasswordPage from './pages/PasswordPage';
import { useState } from 'react';

function App() {

  const [id, setID] = useState('');
  
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <HomePage />
        </Route>
        <Route path='/auth'>
          <AuthPage setIDT={setID}/>
        </Route>
        <Route path='/profile'>
          <UserProfile />
        </Route>
        <Route path='/search'>
          <SearchPage />
        </Route>
        <Route path='/changePassword'>
          <PasswordPage id={id}/>
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;

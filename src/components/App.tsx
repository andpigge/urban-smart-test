import { useState, FC  } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';

// Компоненты
import Login from './login/Login'
import Profile from './profile/Profile'

// HOC
import { ProtectedRoute } from './HOC/ProtectedRoute';

interface IStateProps {
  login: string,
  password: string
}

const App: FC<IStateProps> = ({ login, password }): JSX.Element => {
  const [ loginValue, setLoginValue ] = useState<string>('');
  const [ passwordValue, setPasswordValue ] = useState<string>('');

  const cbLogin = (value: string) => {
    setLoginValue(value);
  };

  const cbPassword = (value: string) => {
    setPasswordValue(value);
  };

  return (
    <Switch>
      <Route exact path='/'>
        <Login 
          loginValue={ loginValue } 
          passwordValue={ passwordValue }
          cbPassword={ cbPassword }
          cbLogin={ cbLogin }
        />
      </Route>

      <ProtectedRoute 
        path={ '/profile' } 
        loginValue={ loginValue } 
        passwordValue={ passwordValue }
        login={ login } 
        password={ password }
      >
        <Profile />
      </ProtectedRoute>

      <Route path='*'>
        <Redirect to={`/`} />
      </Route>
    </Switch>
  );
}

const mapStateToProps = (state: IStateProps) => {
  return {
    login: state.login,
    password: state.password
  };
};

export default connect(mapStateToProps)(App);

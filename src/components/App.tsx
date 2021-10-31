import { FC  } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';

// Компоненты
import Login from './login/Login'
import Profile from './profile/Profile'

// HOC
import { ProtectedRoute } from './HOC/ProtectedRoute';

// state
import { IStateAppProps } from '../redux/reducers/IStateProps';

interface IAppProps {
  login: string
  password: string
  userLogin: string
  userPassword: string
}

const App: FC<IAppProps> = (props): JSX.Element => {
  const { login, password, userLogin, userPassword } = props;

  return (
    <Switch>
      <Route exact path='/'>
        <Login />
      </Route>

      <ProtectedRoute 
        path={ '/profile' } 
        login={ login } 
        password={ password }
        userLogin={ userLogin }
        userPassword={ userPassword }
      >
        <Profile />
      </ProtectedRoute>

      <Route path='*'>
        <Redirect to={`/`} />
      </Route>
    </Switch>
  );
}

const mapStateToProps = (state: IStateAppProps) => {
  return {
    login: state.login.login,
    password: state.login.password,
    userLogin: state.user.userLogin,
    userPassword: state.user.userPassword
  };
};

export default connect(mapStateToProps)(App);

import { FC } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import './App.css';

// Компоненты
import Login from './login/Login'
import { Profile } from './profile'

interface IStateProps {
  login: string,
  password: number
}

const App: FC = (): JSX.Element => {
  return (
    <Switch>
      <Route exact path='/'>
        <Login />
      </Route>
      <Route exact path='/profile'>
        <Profile />
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

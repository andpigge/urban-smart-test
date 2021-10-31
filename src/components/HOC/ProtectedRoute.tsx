import { FC } from "react";
import { Route, Redirect } from 'react-router-dom';

interface IProtectedRouteProps {
  children: JSX.Element
  path: string
  login: string
  password: string
  userLogin: string
  userPassword: string
}

export const ProtectedRoute: FC<IProtectedRouteProps> = (props): JSX.Element => {
  const { children, path, login, password, userLogin, userPassword } = props;

  const renderChildren = () => {
    if (login === userLogin && password === userPassword) {
      return (
        children
      );
    }
    return (
      <Redirect to='/' />
    );
  };

  return (
    <Route path={ path } >
      { renderChildren() }
    </Route>
  );
};

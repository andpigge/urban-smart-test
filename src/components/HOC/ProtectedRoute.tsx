import { FC } from "react";
import { Route, Redirect } from 'react-router-dom';

interface IProtectedRouteProps {
  children: JSX.Element
  path: string
  loginValue: string
  passwordValue: string
  login: string
  password: string
}

export const ProtectedRoute: FC<IProtectedRouteProps> = (props): JSX.Element => {
  const { children, path, loginValue, passwordValue, login, password } = props;

  const renderChildren = () => {
    if (login.toString() === loginValue && password.toString() === passwordValue) {
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

import React, { FC } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './login.scss';

import { ButtonAuth } from '../ui/button-auth';
import { InputAuth } from '../ui/input-auth';

// state
import { IStateLoginProps } from '../../redux/reducers/IStateProps';

interface ILoginProps {
  login: string,
  password: string,
  handlerLogin: (input: string) => void
  handlerPassword: (input: string) => void
  userLogin: string
  userPassword: string
}

const Login: FC<ILoginProps> = ( props ):JSX.Element => {
  const history = useHistory();

  const { login, password, handlerLogin, handlerPassword, userLogin, userPassword } = props;

  const handlerForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    history.push(`/profile`);
  };
  
  return (
    <main className='login login__margin-center'>
        <form
          className='login__form'
          name='login'
          onSubmit={ handlerForm }
        >
          <InputAuth
            textDesc={ 'Логин' }
            nameField={ 'login' }
            typeField={ 'text' }
            value={ login }
            cb={ handlerLogin }
          />
          <InputAuth
            textDesc={ 'Пароль' }
            nameField={ 'password' }
            typeField={ 'password' }
            value={ password }
            cb={ handlerPassword }
          />
          <ButtonAuth
            buttonText={ 'Войти' }
            disabled={ login === userLogin && password === userPassword ? false : true }
          />
        </form>
    </main>
  );
};

const mapStateToProps = (state: IStateLoginProps) => {
  return {
    login: state.login.login,
    password: state.login.password,
    userLogin: state.user.userLogin,
    userPassword: state.user.userPassword
  };
};

function mapDispatchToProps (dispatch: (arg0: { type: string, value: string }) => any) {
  return {
    handlerLogin: (login: string) => dispatch({ type: 'LOGIN', value: login }),
    handlerPassword: (password: string) => dispatch({ type: 'PASWORD', value: password })
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);

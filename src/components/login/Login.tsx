import React, { FC } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './login.scss';

import { ButtonAuth } from '../ui/button-auth';
import { InputAuth } from '../ui/input-auth';

// state
import IStateProps from '../../redux/IStateProps';

interface ILoginProps {
  loginValue: string
  passwordValue: string
  cbPassword: (value: string) => void
  cbLogin: (value: string) => void
  login: string,
  password: number
}

const Login: FC<ILoginProps> = ( props ):JSX.Element => {
  const history = useHistory();

  const { loginValue, passwordValue, cbPassword, cbLogin, login, password } = props;

  const handlerForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    history.push(`/profile`);
  };
  
  return (
    <main className='login login__margin-center'>
        <form
          className='auth__form login__form'
          name='login'
          onSubmit={ handlerForm }
        >
          <InputAuth
            textDesc={ 'Логин' }
            nameField={ 'login' }
            typeField={ 'text' }
            value={ loginValue }
            cb={ cbLogin }
          />
          <InputAuth
            textDesc={ 'Пароль' }
            nameField={ 'password' }
            typeField={ 'password' }
            value={ passwordValue }
            cb={ cbPassword }
          />
          <ButtonAuth
            buttonText={ 'Войти' }
            disabled={ login.toString() === loginValue && password.toString() === passwordValue ? false : true }
          />
        </form>
    </main>
  );
};

const mapStateToProps = (state: IStateProps) => {
  return {
    login: state.login,
    password: state.password
  };
};

export default connect(mapStateToProps)(Login);

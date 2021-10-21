import React, { FC } from 'react';
import { connect } from 'react-redux';
import './login.scss';

import { ButtonAuth } from '../ui/button-auth';
import { InputAuth } from '../ui/input-auth';

interface IStateProps {
  login: string,
  password: number
}

const Login: FC<IStateProps> = ({ login, password }):JSX.Element => {
  console.log(login, password)
  return (
    <main className='login login__margin-center'>
        <form
          className='auth__form login__form'
          name='login'
          /* onSubmit={ submitForm } */
        >
          <InputAuth
            textDesc={ 'Логин' }
            nameField={ 'login' }
            typeField={ 'text' }
            /* authValue={ authValueEmail }
            setAuthValue={ setAuthValueEmail } */
          />
          <InputAuth
            textDesc={ 'Пароль' }
            nameField={ 'password' }
            typeField={ 'password' }
            /* authValue={ authValuePassword }
            setAuthValue={ setAuthValuePassword } */
          />
          <ButtonAuth
            buttonText={ 'Войти' }
            /* isValidFieldLogin={ isValidFieldLogin }
            isLoadig={ isLoadig } */
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

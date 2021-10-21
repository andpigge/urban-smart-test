import React, { useState, FC } from 'react';
import cn from 'classnames';
import './inputAuth.scss';

interface IInputAuthProps {
  textDesc: string
  typeField: 'text' | 'password'
  nameField: string
}

export const InputAuth: FC<IInputAuthProps> = ({ textDesc, typeField, nameField }): JSX.Element => {
  const [ activeInput, setActiveInput ] = useState(false);

  const addActiveInput = (e: React.FocusEvent<HTMLInputElement>) => {
    setActiveInput(true);
    e.target.className = 'auth__field-text';
  };

  const removeActiveInput = (e: React.FocusEvent<HTMLInputElement>) => {
    const item = e.target;
    const value = item.value;
    if (value) {
      return setActiveInput(true);
    }
    setActiveInput(false);
  };

  return (
    <label className='auth__label'>
        <p className={ cn('auth__desc', {
          'auth__desc_active': activeInput,
        })}>
          { textDesc }
        </p>
        <input
          type={ typeField }
          className='auth__field-text'
          name={ nameField }
          // value={ authValue }
          // onChange={ handleChange }
          onFocus={ addActiveInput }
          onBlur={ removeActiveInput }
          required
        />
        <span className='auth__line'></span>
      </label>
  );
}

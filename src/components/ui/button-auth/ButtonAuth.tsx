import { FC } from 'react';
import cn from 'classnames';
import './buttonAuth.scss';

interface IButtonAuthProps {
  buttonText: string
  disabled: boolean
}

export const ButtonAuth: FC<IButtonAuthProps> = ({ buttonText, disabled }): JSX.Element => {
  return (
    <button
      type='submit'
      className={ cn('auth__submit', {
        'auth__submit_disabled': disabled
      })}
      disabled={ disabled }
    >
      { buttonText }
    </button>
  );
}

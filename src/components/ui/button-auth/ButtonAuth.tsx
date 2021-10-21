import { FC } from 'react';
import cn from 'classnames';
import './buttonAuth.scss';

interface IButtonAuthProps {
  buttonText: string
}

export const ButtonAuth: FC<IButtonAuthProps> = ({ buttonText }): JSX.Element => {
  return (
    <button
      type='submit'
      className='auth__submit'
      // disabled={ !isValidFieldRegister && !isValidFieldLogin }
    >
      {/* { isLoadig ? `${buttonText}...` : buttonText } */}
      { buttonText }
    </button>
  );
}

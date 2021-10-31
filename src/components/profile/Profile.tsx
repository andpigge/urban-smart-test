import { FC } from 'react';
import { connect } from 'react-redux';
import './profile.scss';

// state
import { IStateProfileProps } from '../../redux/reducers/IStateProps';
interface IProfileProps {
  login: string,
}

const Profile: FC<IProfileProps> = ({ login }):JSX.Element => {
  return (
    <h1>
      { login }
    </h1>
  );
};

const mapStateToProps = (state: IStateProfileProps) => {
  return {
    login: state.login.login,
  };
};

export default connect(mapStateToProps)(Profile);

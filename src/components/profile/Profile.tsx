import { FC } from 'react';
import { connect } from 'react-redux';
import './profile.scss';

// state
import IStateProps from '../../redux/IStateProps';
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

const mapStateToProps = (state: IStateProps) => {
  return {
    login: state.login,
  };
};

export default connect(mapStateToProps)(Profile);

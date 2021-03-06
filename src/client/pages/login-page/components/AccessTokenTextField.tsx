import React from 'react';
import {showStandaloneAccessToken} from '../../../store/session/sessionActions';

import InputAdornment from '../../../components/Inputs/InputAdornment';
import TextField from '../../../components/TextFields/TextField';
import IconButton from '../../../components/Buttons/IconButton';
import {KeyIcon} from '../../../components/Icons';

import styles from './AccessTokenTextField.module.scss';
import bemFactory from '../../../lib/bem-factory';
import useBindActionCreators from '../../../hooks/useBindActionCreators';
import useAppStateSelector from '../../../hooks/useAppStateSelector';

const {block} = bemFactory('access-token-text-field', styles);

interface IAccessTokenTextField {
  onChange?: (value: string) => void;
}

const AccessTokenTextField = (props: IAccessTokenTextField) => {
  const accessTokenError = useAppStateSelector(x => x.session.accessTokenError);
  const actions = useBindActionCreators({showStandaloneAccessToken});

  const endAdornment = <InputAdornment position="end">
    <IconButton onClick={actions.showStandaloneAccessToken}>
      <KeyIcon size={20} />
    </IconButton>
  </InputAdornment>;

  return <TextField className={block()}
                    error={accessTokenError}
                    label="Access Token"
                    endAdornment={endAdornment}
                    onChange={props.onChange} />
};

export default AccessTokenTextField;

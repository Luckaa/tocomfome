import TextField from '@material-ui/core/TextField';
import React from 'react';

type Props = { label: string, type?: string };

const InputForm: React.FC<Props> = ({ label, type }) => {
  return (
    <TextField
      label={label}
      type={type}
      className="input"
      variant="outlined"
      size="small"
      InputLabelProps={{
        shrink: true,
      }}
    />
  );
};

export default InputForm;

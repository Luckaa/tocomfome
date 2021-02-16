import TextField from '@material-ui/core/TextField';
import React, {FunctionComponent, useEffect, useRef} from 'react';
import { useField } from '@unform/core';


interface Props {
  name: string;
  label?: string;
  type?: string;
  placeholder?: string;
}

type InputProps = Props;

const InputForm: FunctionComponent <InputProps> = ({ name, label, ...rest }) => {
  const inputRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <TextField
      error={error != null}
      id={name}
      label={label}
      className="input-form"
      size="small"
      helperText={error}
      variant="outlined"
      defaultValue={defaultValue}
      InputLabelProps={{
        shrink: true,
      }}
      InputProps={{
        inputRef: inputRef,
      }}
      {...rest}
    />
  );
};

export default InputForm;

import TextField from '@material-ui/core/TextField';
import Proptypes from 'prop-types';
import React from 'react';
import { Controller } from 'react-hook-form';

InputField.prototype = {
  form: Proptypes.object.isRequired,
  name: Proptypes.string.isRequired,

  label: Proptypes.string,
  disabled: Proptypes.bool,
};

function InputField(props) {
  const { form, name, lable, disabled } = props;
  const { errors, formState } = form;
  const hasErr = errors[name]?.message;
  // console.log('hasErr', hasErr, errors[name]);
  // console.log('haserr:', !!hasErr);
  return (
    <Controller
      name={name}
      control={form.control}
      as={TextField}
      fullWidth
      error={!!hasErr}
      helperText={errors[name]?.message}
    ></Controller>
  );
}

export default InputField;

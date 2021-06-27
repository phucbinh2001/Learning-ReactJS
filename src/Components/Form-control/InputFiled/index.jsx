import React from 'react';
import TextField from '@material-ui/core/TextField';
import Proptypes from 'prop-types';
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
  const hasErr = formState.touched[name] && errors[name];
  console.log(formState.touched[name], errors[name]);
  console.log('haserr:', !!hasErr);
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

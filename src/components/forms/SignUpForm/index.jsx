import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Input from './../components/Input';
import * as Yup from 'yup';
const NAME_SCHEMA = Yup.string().min(3).max(64).required();

const SIGN_UP_VALIDATION_SCHEMA = Yup.object({
  firstName: NAME_SCHEMA,
  lastName: NAME_SCHEMA,
  displayName: Yup.string().min(6).max(64).required(),
  email: Yup.string().email().required(),
  userPassword: Yup.string()
    .matches(/(?=.*?[A-Z])(?=.*?[a-z])(?=.*?\d)^.{8,64}$/)
    .required(),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('userPassword')])
    .required(),
});

const fields = [
  {
    type: 'text',
    name: 'firstName',
    placeholder: 'First name',
  },
  {
    name: 'lastName',
    type: 'text',
    placeholder: 'Last name',
  },
  {
    type: 'text',
    name: 'displayName',
    placeholder: 'Display Name',
  },
  {
    type: 'text',
    name: 'emailName',
    placeholder: 'Email Address',
  },
  {
    type: 'password',
    name: 'userPassword',
    placeholder: 'password',
  },
  {
    type: 'password',
    name: 'confirmPassword',
    placeholder: 'Password Confirmation',
  },
];

function SignUpForm(props) {
  const { onSubmit } = props;

  const mapField = (field, index) => (
    <Field key={index} {...field}>
      {fieldProps => (
        <>
          <label>
            <Input {...fieldProps} {...field} />
            <ErrorMessage name={fieldProps.field.name} />
          </label>
          <br />
        </>
      )}
    </Field>
  );

  const initialValues = {
    firstName: '',
    lastName: '',
    displayName: '',
    email: '',
    userPassword: '',
    confirmPassword: '',
  };

  return (
    <Formik
      onSubmit={onSubmit}
      initialValues={initialValues}
      validationSchema={SIGN_UP_VALIDATION_SCHEMA}
    >
      {formikProps => (
        <Form>
          {fields.map(mapField)}

          <button type="submit">Sign Up</button>
        </Form>
      )}
    </Formik>
  );
}

SignUpForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

SignUpForm.defaultProps = {};

export default SignUpForm;

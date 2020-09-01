import React from 'react';
import { useField, Formik, Form, ErrorMessage } from 'formik';
import { LOGIN_VALIDATION_SCHEMA } from './../validate';

function LoginForm() {
  return (
    <Formik
      onSubmit={(values, formikBag) => {
        console.dir(values);
      }}
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={LOGIN_VALIDATION_SCHEMA}
    >
      {() => (
        <Form>
          <MyField name="email" type="text" placeholder="user email-address" />
          <ErrorMessage name="email" />
          <br />
          <MyField
            name="password"
            type="password"
            placeholder="user password"
          />
          <ErrorMessage name="password" />
          <br />
          <button type="submit">Login</button>
        </Form>
      )}
    </Formik>
  );
}

function MyField(props) {
  const [field, meta] = useField(props);
  return <input {...field} {...props} />;
}

export default LoginForm;

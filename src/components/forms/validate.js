import * as Yup from 'yup';

export const LOGIN_VALIDATION_SCHEMA = Yup.object().shape({
  email: Yup.string().trim().email().required(),
  password: Yup.string()
    .matches(
      /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?\d)^.{8,64}$/,
      'Your password must be at least 8 characters long, be of mixed case and also contain a digit or symbol.'
    )
    .required(),
});

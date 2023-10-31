import * as yup from 'yup';

const signInSchema = yup.object().shape({
  email: yup
    .string()
    .matches(/^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/, 'Invalid email format')
    .required('Email is required'),
  name: yup
    .string()
    .min(2, 'Name must be at least 2 characters')
    .required('Name is required'),
});

const logInSchema = yup.object().shape({
  email: yup
    .string()
    .matches(/^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/, 'Invalid email format')
    .required('Email is required'),
});

interface validatorProps {
  email: string;
  name?: string;
}

export const validateSignIn = async ({ email, name }: validatorProps) => {
  try {
    await signInSchema.validate({ email, name }, { abortEarly: false });
    return null;
  } catch (error) {
    const newErrors: { [key: string]: string } = {};
    error.inner.forEach((err) => {
      newErrors[err.path] = err.message;
    });
    return newErrors;
  }
};

export const validateLogIn = async ({ email }: validatorProps) => {
  try {
    await logInSchema.validate({ email }, { abortEarly: false });
    return null;
  } catch (error) {
    const newErrors: { [key: string]: string } = {};
    error.inner.forEach((err) => {
      newErrors[err.path] = err.message;
    });
    return newErrors;
  }
};

import css from './RegistrationForm.module.css';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useId } from 'react';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { register } from '../../redux/auth/operations';

const registerSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Must be a valid email!').required('Required'),
  password: Yup.string()
    .min(8, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

const initialValues = {
  name: '',
  email: '',
  password: '',
};

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(
      register({
        name: values.name,
        email: values.email,
        password: values.password,
      })
    );

    actions.resetForm();
  };

  const nameFieldId = useId();
  const emailFieldId = useId();
  const pswrdFieldId = useId();

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={registerSchema}
      >
        <Form className={css.form}>
          <label className={css.label} htmlFor={nameFieldId}>
            <b>Name</b>
          </label>
          <Field
            className={css.input}
            type='text'
            name='name'
            id={nameFieldId}
          />
          <ErrorMessage className={css.error} name='name' component='span' />

          <label className={css.label} htmlFor={emailFieldId}>
            <b>Email</b>
          </label>
          <Field
            className={css.input}
            type='email'
            name='email'
            id={emailFieldId}
          />
          <ErrorMessage className={css.error} name='email' component='span' />

          <label className={css.label} htmlFor={pswrdFieldId}>
            <b>Password</b>
          </label>
          <Field
            className={css.input}
            type='password'
            name='password'
            id={pswrdFieldId}
          />
          <ErrorMessage
            className={css.error}
            name='password'
            component='span'
          />

          <button className={css.btn} type='submit'>
            Register
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationForm;

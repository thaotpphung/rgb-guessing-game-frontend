import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';
import useForm from '../../../utils/hooks/useForm';
import { validate } from '../../../utils/validations/validate';
import { signin } from '../../../redux/actions/userActions';
import signInForm from './form';

const SignIn = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { loggedInUser } = useSelector((state) => state.user);

  const initialForm = {
    email: '',
    password: '',
  };

  const {
    values: form,
    handleChange,
    handleSubmit,
    errors,
  } = useForm(
    initialForm,
    () => {
      dispatch(signin(form));
    },
    validate
  );

  useEffect(() => {
    if (loggedInUser) {
      history.push('/');
    }
    return () => {};
  }, [loggedInUser]);

  return (
    <div className="card-panel center white auth-container">
      <div className="row">
        <div className="col s8 offset-s2">
          <div className="col s12">
            <h4>
              <b>Sign In</b> below
            </h4>
            <Link className="grey-text text-darken-1" to="/signup">
              Don&apos;t have an account? Sign Up
            </Link>
          </div>
          <form noValidate onSubmit={handleSubmit}>
            {signInForm.map((field, idx) => {
              const { name, label, type, required } = field;
              return (
                <div className="input-field col s12" key={`field-${idx}`}>
                  <input
                    name={name}
                    onChange={handleChange}
                    value={form[name]}
                    error={errors[name]}
                    required={required}
                    type={type ? type : 'text'}
                  />
                  <label htmlFor={name}>{label}</label>
                  <span className="red-text">{errors[name]}</span>
                </div>
              );
            })}
            <div className="col s12">
              <button
                type="submit"
                className="btn btn-large hoverable waves-effect waves-light button steelblue"
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;

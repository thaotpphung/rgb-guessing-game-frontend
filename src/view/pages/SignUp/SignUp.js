import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';
import useForm from '../../../utils/hooks/useForm';
import { validate } from '../../../utils/validations/validate';
import { signup } from '../../../redux/actions/userActions';
import signUpForm from './form';

const SignUp = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { loggedInUser } = useSelector((state) => state.user);

  const initialForm = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const {
    values: form,
    handleChange,
    handleSubmit,
    errors,
  } = useForm(
    initialForm,
    () => {
      dispatch(signup(form));
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
              <b>Sign Up</b> below
            </h4>
            <Link className="grey-text text-darken-1" to="/signin">
              Already have an account? Sign In
            </Link>
          </div>
          <form noValidate onSubmit={handleSubmit}>
            {signUpForm.map((field, idx) => {
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
                className="btn btn-large waves-effect waves-light hoverable steelblue accent-3 button"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

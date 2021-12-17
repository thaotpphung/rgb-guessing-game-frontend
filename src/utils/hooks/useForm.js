import { useState, useEffect } from 'react';

export default function useForm(
  initialState,
  callback,
  validate = () => {
    return {};
  },
  optionalFields = []
) {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [callBackParams, setCallBackParams] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const setValue = (name, value) => {
    setValues({ ...values, [name]: value });
  };

  const setError = (name, value) => {
    setErrors({ ...errors, [name]: value });
  };

  const handleSubmit = (event, otherErrors = {}, otherParams = []) => {
    event.preventDefault();
    setErrors({
      ...validate(values, optionalFields),
      ...otherErrors,
    });
    setCallBackParams(otherParams);
    setIsSubmitting(true);
  };

  const reset = () => {
    setValues(initialState);
  };

  const resetErrors = () => {
    setErrors({});
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback(...callBackParams);
    }
    setIsSubmitting(false);
  }, [errors, callBackParams]);

  return {
    handleChange,
    handleSubmit,
    values,
    reset,
    setValue,
    errors,
    setErrors,
    setValues,
    setError,
    resetErrors,
  };
}

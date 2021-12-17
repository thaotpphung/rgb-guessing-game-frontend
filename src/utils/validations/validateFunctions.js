const validateField = (name, value, errors, password = null) => {
  value = String(value);
  if (!value || value.trim() === '') errors[name] = 'This field is required';
  switch (name) {
    case 'email': {
      if (!/\S+@\S+\.\S+/.test(value)) {
        errors[name] = 'Email is invalid';
      }
      break;
    }
    case 'password': {
      if (value.length < 6) {
        errors[name] = 'Password needs to be 6 characters or more';
      }
      break;
    }
    case 'confirmPassword': {
      if (value !== password) {
        errors[name] = 'Password does not match';
      }
      break;
    }
    default:
      break;
  }
  return errors;
};

export { validateField };

import validator from "validator";

const validateRegister = (data) => {
  let errors = {};

  const { name, email, password, password2 } = data;

  if (validator.isEmpty(name)) {
    errors.name = "Name field is required.";
  }

  if (!validator.isEmail(email)) {
    errors.email = "Please enter a valid email address";
  }
  if (validator.isEmpty(email)) {
    errors.email = "Email field is required.";
  }

  if (validator.isEmpty(password)) {
    errors.password = "Password field is required.";
  }

  if (!validator.equals(password, password2)) {
    errors.password2 = "Password should match";
  }
  if (validator.isEmpty(password)) {
    errors.password2 = "Password2 field is required.";
  }

  return {
    isInvalid: Object.keys(errors).length > 0,
    errors: errors,
  };
};

export default validateRegister;

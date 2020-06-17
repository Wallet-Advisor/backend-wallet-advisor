const validator = require("validator");

const checkInput = (inputValue) => {
  const errors = {};
  Object.keys(inputValue).forEach((key) => {
    if (
      !inputValue[key] ||
      validator.isEmpty(String(inputValue[key])) ||
      String(inputValue[key]).trim() === "" ||
      inputValue[key] === ""
    ) {
      errors[key] = `${key} field can not be blank`;
    } else {
      /*
       *input Validation
       */
      if (key === "email") {
        if (!validator.isEmail(inputValue[key])) {
          errors[key] = `Invalid ${key}`;
        }
      }
      if (key === "password") {
        if (!validator.isLength(inputValue[key], { min: 8, max: 50 })) {
          errors[key] = `${key} must between 8 and 50 characters`;
        }
      }
      if (key === "score") {
        if (!validator.isNumeric(String(inputValue[key]))) {
          errors[
            key
          ] = `Please provide a valid ${key}`;
        }
      }
    }
  });
  return errors;
};
module.exports = checkInput;

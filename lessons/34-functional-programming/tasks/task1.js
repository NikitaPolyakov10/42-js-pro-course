const createValidation = (...args) => (value) => {
  const result = args
    .map((validator) => {
      return validator(value);
    })
    .filter((item) => item);
  return result.length > 0 ? result : null;
};

const createValidator = (method, errMsg) => (value) => {
  return method(value) ? null : errMsg;
};

const hasEmail = (value) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(value).toLowerCase());
};

const hasNoEmpty = (value) => {
  return value.length > 0;
};

const hasAdult = (value) => {
  return value >= 18;
};

module.exports = {
  createValidation,
  createValidator,
  hasEmail,
  hasNoEmpty,
  hasAdult,
};

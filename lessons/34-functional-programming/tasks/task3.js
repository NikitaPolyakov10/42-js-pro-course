const compose = (...funcs) => (data) =>
  funcs.reduce((acc, func) => func(acc), data);
const withProps = (callback) => (props) => callback(props);
const branch = (conditionFn, trueFunc, falseFunc) => (data) =>
  conditionFn(data) ? trueFunc(data) : falseFunc(data);

module.exports = {
  compose,
  withProps,
  branch,
};

const memoizeResultCreator = (...args) => {
  let cache = {};
  const methods = args.slice(0, -1);
  const resultFn = args[args.length - 1];
  return (data) => {
    const existData = Object.keys(data).every(
      (elem) => elem in cache && data[elem] === cache[elem]
    );
    if (!existData) {
      cache = { ...cache, ...data };
      const methodsWithArgs = methods.map((fn) => fn(cache));
      return resultFn(...methodsWithArgs);
    }
    return cache;
  };
};

module.exports = {
  memoizeResultCreator,
};

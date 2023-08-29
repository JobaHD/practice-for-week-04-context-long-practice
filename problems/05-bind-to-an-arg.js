function bindToAnArg(func, arg) {
  // Your code here
    return (...extraArg) => {
        return func(arg, ...extraArg);
    }
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = bindToAnArg;

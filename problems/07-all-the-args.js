function allTheArgs(func, ...args) {
  // Your code here
    return (...extraArg) => {
        return func(...args, ...extraArg);
    }
}

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = allTheArgs;

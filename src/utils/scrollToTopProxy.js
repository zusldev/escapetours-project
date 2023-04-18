history.pushState = new Proxy(history.pushState, {
  apply(target, thisArg, argumentsList) {
    // scrollTo(0, 0) <-- order of operation can mather (ty, @t-lock)
    Reflect.apply(target, thisArg, argumentsList);
    scrollTo(0, 0);
  },
});

function record(fn, ctx) {
  var args = arguments.splice(0, 2),
      startTime = new Date(),
      ret = fn.apply(ctx, args);
  
  return {
    elapsedTime: new Date() - startTime,
    retVal: ret
  };
}
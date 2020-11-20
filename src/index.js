(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@jswork/next');

  nx.instance = function (inClass) {
    var args = [null].concat(nx.slice(arguments, 1));
    var Clazz = Function.prototype.bind.apply(inClass, args);
    return new Clazz();
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.instance;
  }
})();

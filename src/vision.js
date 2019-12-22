/*jshint esversion: 6 */

const V = (function(a, b, c) {

  let API = {
    'sys': {}
  };

  let onload_callbacks = [];
  
  API.sys.onload = function onload(callback, ...args) {
    onload_callbacks.push({'f': callback, 'a': args});
  };

  // External interaction

  b.onload = function() {
    for(let o in onload_callbacks) {
      o.f(...o.a);
    }
  };

  // Return

  return API;

})(window, document, document.body);

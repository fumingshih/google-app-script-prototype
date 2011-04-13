/*!  Prototype JavaScript framework, version 1.7
 *  (c) 2005-2010 Sam Stephenson
 *
 *  Prototype is freely distributable under the terms of an MIT-style license.
 *  For details, see the Prototype web site: http://www.prototypejs.org/
 *
 *--------------------------------------------------------------------------*/

var Prototype = {

  ScriptFragment: '<script[^>]*>([\\S\\s]*?)<\/script>',
  JSONFilter: /^\/\*-secure-([\s\S]*)\*\/\s*$/,

  /*
   *  Prototype.emptyFunction([argument...]) -> undefined
   *  - argument (Object): Optional arguments
   *
   *  The [[Prototype.emptyFunction]] does nothing... and returns nothing!
   *
   *  It is used thoughout the framework to provide a fallback function in order
   *  to cut down on conditionals. Typically you'll find it as a default value
   *  for optional callback functions.
  **/
  emptyFunction: function() { },

  /*
   *  Prototype.K(argument) -> argument
   *  - argument (Object): Optional argument...
   *
   *  [[Prototype.K]] is Prototype's very own
   *  [identity function](http://en.wikipedia.org/wiki/Identity_function), i.e.
   *  it returns its `argument` untouched.
   *
   *  This is used throughout the framework, most notably in the [[Enumerable]]
   *  module as a default value for iterators.
   *
   *  ##### Examples
   *
   *      Prototype.K('hello world!');
   *      // -> 'hello world!'
   *
   *      Prototype.K(200);
   *      // -> 200
   *
   *      Prototype.K(Prototype.K);
   *      // -> Prototype.K
  **/
  K: function(x) { return x }
};

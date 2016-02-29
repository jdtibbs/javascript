/*

Memoization is a concept that pre-dates the JavaScript programming language, 
but we can simply think of it as remembering the results for inputs of a specific value to a function.

When we say 'remember', we mean utilizing a form of cacheto store a record of the computed output 
of such specific inputs so that if a particular function is subsequently re-queried with the same input, 
the remembered result is returned rather than a recalculation being necessary. 
A lot of the time, a simple array is employed for the cache table, 
but a hash or map could be just as easily used. 

*/

(function() {
	// A very basic and simple example.

	function memoize(fn) {
		var cache = {};
		return function(arg) {
			if (arg in cache) {
				console.log('cached');
				return cache[arg];
			} else {
				console.log('caching');
				cache[arg] = fn(arg);
				return cache[arg];
			}
		};
	}

	var Person = function(name) {
		this.name = name;
	};

	(function() {
		this.speak = function(words) {
			return this.name + ' says: ' + words;
		};
	}).call(Person.prototype);


	var billy = new Person('billy');

	console.log(billy.speak('hello'));

	var memoizeSpeak = memoize(billy.speak.bind(billy));
	console.log(memoizeSpeak('hello'));
	console.log(memoizeSpeak('hello'));
})();

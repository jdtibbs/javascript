var test = require('tape');

/*

First-Class Function:

JavaScript functions are Objects!

Like any other object they can have properties and methods, 
yet they are different from other objects in that they can be called. 

JavaScript supports passing functions as arguments to other functions, 
returning them as the values from other functions, 
and assigning them to variables.

*/

test('first-class: function as argument.', function(t) {
	t.plan(1);

	var a = [1, 2, 3];

	function reduce(p, c) {
		return p + c;
	}
	var sum = a.reduce(reduce);

	t.equal(sum, 6);

});

test('first-class: function as return value.', function(t) {
	t.plan(1);

	function multiply(n) {
		return function(v) {
			return n * v;
		};
	}

	var double = multiply(2);
	t.equal(double(4), 8);

});

test('first-class: function assigned to variable.', function(t) {
	t.plan(1);

	var greeter = function(name) {
		return 'hello ' + name;
	};
	t.equal(greeter('sam'), 'hello sam');

});

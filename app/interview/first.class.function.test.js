var test = require('tape');

/*

First-Class Function:

JavaScript functions are Objects!

This means the language supports passing functions as arguments to other functions, 
returning them as the values from other functions, 
and assigning them to variables or storing them in data structures.

*/

function greet(name) {
	return 'hello ' + name;
}

test('first-class as function argument.', function(t) {
	t.plan(1);

	function fred(fn) {
		return fn('sam');
	}

	t.equal(fred(greet), 'hello sam');

});

test('first-class as return value.', function(t) {
	t.plan(1);

	function greeter() {
		return function(name) {
			return 'hello ' + name;
		};
	}

	var greet = greeter();
	t.equal(greet('sam'), 'hello sam');

});

test('first-class assign.', function(t) {
	t.plan(1);

	var greeter = greet;
	t.equal(greeter('sam'), 'hello sam');

});

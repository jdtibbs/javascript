/*

Lexical scoping: 
The scope of a variable is defined by its location within the source code 
and nested functions have access to variables declared in their outer scope.

 */

var test = require('tape');

function greet() {
	var name = 'sam';

	return function() {
		return 'hello ' + name;
	};
}

test('lexical scope.', function(t) {
	t.plan(1);

	var hello = greet();
	t.equal(hello(), 'hello sam');

});

var test = require('tape');

/*

A closure is a special kind of object that combines two things: 
a function, and the environment in which that function was created. 
The environment consists of any local variables that were in-scope at the time 
that the closure was created.

*/
function greet(name) {
	// note: function paramteres are local variables.
	return function() {
		return 'hello ' + name;
	};
}

test('closure.', function(t) {
	t.plan(1);

	var hello = greet('sam');
	t.equal(hello(), 'hello sam');

});

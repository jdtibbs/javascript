// a good function to implement with memoization.

(function() {
	function fibonacci(n) {
		return n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2);
	}

	var n = 10;
	for (var ii = 0; ii <= n; ii++) {
		console.log(fibonacci(ii));
	}
})();

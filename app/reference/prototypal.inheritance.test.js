var test = require('tape');

/*

Prototypal Inheritance: constructor vs. factory (Object.create)

*/

/*

 ... the constructor way is messy as is the object graph!

*/

(function() {

	function Rectangle(width, height) {
		this.width = width;
		this.height = height;
	}

	(function() {
		this.area = function() {
			return this.width * this.height;
		};
	}).call(Rectangle.prototype);

	function Square(length) {
		Rectangle.call(this, length, length);
	}
	Square.prototype = Object.create(Rectangle.prototype);

	var square = new Square(8);

	test('prototypal inheritance: w constructor.', function(t) {
		t.plan(4);

		t.equal(square.area(), 64);
		t.equal(Square.prototype.area, Rectangle.prototype.area);
		t.equal(Square.prototype.isPrototypeOf(square), true);
		t.equal(Rectangle.prototype.isPrototypeOf(square), true);
	});
})();

/*

 ... the Object.create way is cleaner!

*/

(function() {

	var Rectangle = {
		area: function() {
			return this.width * this.height;
		}
	};

	function rectangleFactory(width, height) {
		return Object.create(Rectangle, {
			width: {
				value: width
			},
			height: {
				value: height
			}
		});
	}

	function squareFactory(length) {
		var Square = rectangleFactory(length, length);
		return Object.create(Square, {
			speak: {
				value: function() {
					return 'i am a square';
				}
			}
		});
	}

	var rectangle = rectangleFactory(4, 5);
	var square = squareFactory(8);

	test('prototypal inheritance: w factory & Object.create.', function(t) {
		t.plan(5);

		t.equal(rectangle.area(), 20);
		t.equal(Rectangle.isPrototypeOf(rectangle), true);

		t.equal(square.area(), 64);
		t.equal(square.speak(), 'i am a square');
		t.equal(Rectangle.isPrototypeOf(square), true);
	});

})();

/*
... for fun

*/

(function() {
	var Foo = {
		walk: function() {
			if (this.name === undefined) {
				throw new Error('name not defined.');
			}
			return this.name + ' is walking.';
		}
	};

	var Bar = Object.create(Foo);
	Bar.run = function() {
		return this.name + ' is running.';
	};

	var Baz = Object.create(Bar);
	Baz.sleep = function() {
		return this.name + ' is sleeping.';
	};

	var baz = Object.create(Baz);
	baz.name = 'sam';

	test('prototypal inheritance for fun', function(t) {
		t.plan(6);

		t.equal(baz.walk(), 'sam is walking.');
		t.equal(baz.run(), 'sam is running.');
		t.equal(baz.sleep(), 'sam is sleeping.');
		t.equal(Foo.isPrototypeOf(baz), true);
		t.equal(Bar.isPrototypeOf(baz), true);
		t.equal(Baz.isPrototypeOf(baz), true);
	});
})();

'use strict';

QUnit.module('Тестируем функцию chess', function () {
	QUnit.test('Шахматной доски 1 на 1 не бывает', function (assert) {
		assert.strictEqual(chess(1), undefined);
		assert.strictEqual(chess('1'), undefined);
	});

	QUnit.test('Шахматная доска 2 на 2', function (assert) {
		const expected =
			'* \n' +
			' *\n';
		assert.strictEqual(chess(2), expected);
		assert.strictEqual(chess('2'), expected);
	});

	QUnit.test('Шахматная доска 3 на 3', function (assert) {
		const expected =
			'* *\n' +
			' * \n' +
			'* *\n';
		assert.strictEqual(chess(3), expected);
		assert.strictEqual(chess('3'), expected);
	});

	QUnit.test('Шахматная доска 8 на 8', function (assert) {
		const expected =
			'* * * * \n' +
			' * * * *\n' +
			'* * * * \n' +
			' * * * *\n' +
			'* * * * \n' +
			' * * * *\n' +
			'* * * * \n' +
			' * * * *\n';
		assert.strictEqual(chess(8), expected);
		assert.strictEqual(chess('8'), expected);
	});
	QUnit.test('Тест на отрицательные значения', function (assert) {
		assert.strictEqual(chess(-1), undefined);
		assert.strictEqual(chess('-1'), undefined);
	});

	QUnit.test('Шахматная доска 4 на 4', function (assert) {
		const expected =
			'* * \n' +
			' * *\n' +
			'* * \n' +
			' * *\n';
		assert.strictEqual(chess(4), expected);
		assert.strictEqual(chess('4'), expected);
	});

	QUnit.test('Шахматная доска 10 на 10', function (assert) {
		const expected =
			'* * * * * \n' +
			' * * * * *\n' +
			'* * * * * \n' +
			' * * * * *\n' +
			'* * * * * \n' +
			' * * * * *\n' +
			'* * * * * \n' +
			' * * * * *\n' +
			'* * * * * \n' +
			' * * * * *\n';
		assert.strictEqual(chess(10), expected);
		assert.strictEqual(chess('10'), expected);
	});

	QUnit.test('Проверка на невалидные данные', function (assert) {
		assert.strictEqual(chess(-5), undefined);
		assert.strictEqual(chess('СТРОКА, А НЕ ЧИСЛО'), undefined);
		assert.strictEqual(chess('6.5'), undefined);
		assert.strictEqual(chess('111ssssssdddd1111111'), undefined);
		assert.strictEqual(chess([1, 2, 3]), undefined);
	});

	QUnit.test('Проверка на десятичные числа данные', function (assert) {
		const expected =
			'* \n' +
			' *\n';
		assert.strictEqual(chess(2.0), expected);
		assert.strictEqual(chess('2.0'), expected);
	});
});

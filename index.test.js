import * as importedObj from './index';

describe('capitalize', () => {
	test('works', () => {
		expect(importedObj.capitalize('mUTsuki')).toBe('Mutsuki');
	});

	test('removes empty characters', () => {
		expect(importedObj.capitalize(' mUT  suk i')).toBe('Mutsuki');
	});

	test('throws error when missing argument', () => {
		expect(() => importedObj.capitalize()).toThrow();
	});

	test('throws error when not string', () => {
		expect(() => importedObj.capitalize(5)).toThrow();
	});
});

describe('reverseString', () => {
	test('works', () => {
		expect(importedObj.reverseString('Baccano')).toBe('onaccaB');
		expect(importedObj.reverseString('It has one of the best OP')).toBe(
			'PO tseb eht fo eno sah tI'
		);
	});

	test('throws error when missing argument', () => {
		expect(() => importedObj.reverseString()).toThrow();
	});

	test('throws error when not string', () => {
		expect(() => importedObj.reverseString(5)).toThrow();
	});
});

describe('calculator', () => {
	describe('add', () => {
		test('works', () => {
			expect(importedObj.calculator.add(7, 3)).toBe(10);
			expect(importedObj.calculator.add(6123, 0)).toBe(6123);
		});

		test('throws error when missing arguments', () => {
			expect(() => importedObj.calculator.add()).toThrow();
			expect(() => importedObj.calculator.add(7)).toThrow();
		});

		test('throws error when not numbers', () => {
			expect(() => importedObj.calculator.add('7', 3)).toThrow();
			expect(() => importedObj.calculator.add(7, '3')).toThrow();
			expect(() => importedObj.calculator.add('7', [3])).toThrow();
		});
	});

	describe('subtract', () => {
		test('works', () => {
			expect(importedObj.calculator.subtract(8, 3)).toBe(5);
			expect(importedObj.calculator.subtract(100, 300)).toBe(-200);
		});

		test('throws error when missing arguments', () => {
			expect(() => importedObj.calculator.subtract()).toThrow();
			expect(() => importedObj.calculator.subtract(7)).toThrow();
		});

		test('throws error when not number', () => {
			expect(() => importedObj.calculator.subtract('7', 3)).toThrow();
			expect(() => importedObj.calculator.subtract(7, '3')).toThrow();
			expect(() => importedObj.calculator.subtract('7', [3])).toThrow();
		});
	});

	describe('multiply', () => {
		test('works', () => {
			expect(importedObj.calculator.multiply(2, 3)).toBe(6);
			expect(importedObj.calculator.multiply(-8, 5)).toBe(-40);
		});

		test('throws error when missing arguments', () => {
			expect(() => importedObj.calculator.multiply()).toThrow();
			expect(() => importedObj.calculator.multiply(7)).toThrow();
		});

		test('throws error when not number', () => {
			expect(() => importedObj.calculator.multiply('7', 3)).toThrow();
			expect(() => importedObj.calculator.multiply(7, '3')).toThrow();
			expect(() => importedObj.calculator.multiply('7', [3])).toThrow();
		});
	});

	describe('divide', () => {
		test('works', () => {
			expect(importedObj.calculator.divide(9, 3)).toBe(3);
			expect(importedObj.calculator.divide(-35, 7)).toBe(-5);
			expect(importedObj.calculator.divide(0, 7)).toBe(0);
		});

		test('throws error when dividing by 0', () => {
			expect(() => importedObj.calculator.divide(9, 0)).toThrow();
		});

		test('throws error when missing arguments', () => {
			expect(() => importedObj.calculator.divide()).toThrow();
			expect(() => importedObj.calculator.divide(9)).toThrow();
		});

		test('throws error when not number', () => {
			expect(() => importedObj.calculator.divide('9', 3)).toThrow();
			expect(() => importedObj.calculator.divide(9, '3')).toThrow();
			expect(() => importedObj.calculator.divide('9', [3])).toThrow();
		});
	});
});

describe('caeserCipher', () => {
	test('works', () => {
		expect(importedObj.caeserCipher('ich liebe dich <3', 5)).toBe('nhm qnjgj inhm <3');
		expect(importedObj.caeserCipher('Fist of flowing water!', 25)).toBe(
			'ehrs ne eknvhmf vzsdq!'
		);
	});

	test('throws error when missing argument', () => {
		expect(() => importedObj.caeserCipher(5)).toThrow();
		expect(() => importedObj.caeserCipher('ich liebe dich <3')).toThrow();
		expect(() => importedObj.caeserCipher()).toThrow();
	});

	test('throws error when not string', () => {
		expect(() => importedObj.caeserCipher(['Fist of flowing water!'], 7)).toThrow();
		expect(() => importedObj.caeserCipher(999, 7)).toThrow();
	});

	test('throws error when empty string', () => {
		expect(() => importedObj.caeserCipher('', 5)).toThrow();
	});

	test('throws error when key more than 25', () => {
		expect(() => importedObj.caeserCipher('Bocchi the Rock!', 57)).toThrow();
	});
});

<<<<<<< HEAD
const lowercaser = require('../lowercaser');

test('lowercaser debería retornar un string en lowercase', () =>{
	const actual = 'LOREM IPSUM';
	const expected = 'lorem ipsum';

	expect(lowercaser(actual)).toBe(expected);
});

test('debería fallar cuando se ingresa un número', () =>{
	const actual = 1;

	expect(() =>{
		lowercaser(actual)
	}).toThrow();
});
=======
const lowercaser = require('../lowercaser')

test(
  'lowercaser deberia retornar un string en lowercase',
  () => {
    const actual = 'LOREM IPSUM'
    const expected = 'lorem ipsum'

    expect(lowercaser(actual)).toBe(expected)
  })

test(
 'debería fallar cuando se ingresa un numero',
  () => {
    const actual = 1

    expect(() => {
      lowercaser(actual)
    }).toThrow()
  }
)
>>>>>>> 293204ddc69fc5095300623e03fc6762a094de48

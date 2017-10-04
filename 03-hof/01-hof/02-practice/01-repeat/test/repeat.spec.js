const repeat = require('../repeat')
describe('repeat()', () =>{
	test('Si repeat recibe nom = 3, funcion debería ejecutar tres veces', () => {

		//contador de iteraciones
		let iter = 0

		const num = 3
		const iter_num = 3
		
		const fn = function(){
			iter += 1
		}

		repeat(fn, num)

		expect(iter).toBe(iter_num)

	})
})
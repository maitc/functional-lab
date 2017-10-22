const repeat = require('../repeat')
<<<<<<< HEAD
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
=======

describe('repeat()', () => {

  test('Si repeat recibe num = 3, funcion deberia ejecutar 3 veces', () => {

    // contador de iteraciones
    let iter = 0

    const num = 3
    const iter_num = 3

    const fn = () => {
      iter = iter + 1
    }

    repeat(fn, num)
    expect(iter).toBe(iter_num)
  })

})
>>>>>>> 293204ddc69fc5095300623e03fc6762a094de48

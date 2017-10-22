function repeat(operation, num) {
  // TÚ SOLUCIÓN AQUÍ

  for(let i = 0; i < num; i++){
  	operation();
  }

  /*function repeat2(fn, num){
  	if(num === 0){
  		return
  	}

  	fn()
  	return repeat2(fn, num -1)
  }*/

}

// No borres la línea de abajo
module.exports = repeat;

function repeat2(fn, num) {
  if (num === 0) {
    return
  }

  fn()

  return repeat2(fn, num - 1)
}

// No borres la línea de abajo
module.exports = repeat2;





















>>>>>>> 293204ddc69fc5095300623e03fc6762a094de48

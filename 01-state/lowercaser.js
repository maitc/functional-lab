/*function lowercaser(input){
	return input.toLowerCase()
}*/

/*lowercaser recibe input y lo transforma a lowercase*/

const lowercaser = (input) =>{
	if(typeof input !== 'string'){
		throw('input is not valid string')
	}
	return input.toLowerCase()
}

/*agrega un metodo al scope global*/
module.exports = lowercaser;

//SPRET OPERATOR

/*
	EJERCICIOS MODULO UNO

  let multi = cart * discount;
  let result = multi / 100;
  let resultado = result.price;
  return current.concat(resultado);


  const current = cart;
  let valor = (current.price * discount) / 100;
  let newArr = [];
  return newArr.concat(valor);

   //return [newArr].concat(resul);
  
  const num = cart.map(function(x){
    const res = (x * discount) / 100;
    const resul = (x - res);
    newArr.push(resul);
  });
  
  return newArr;*/
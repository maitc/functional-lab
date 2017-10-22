
/*function sumAndMulti(arr){
	const sum = arr.reduce((acc, elem) => acc + elem, 0)
	console.log(sum)
	return (factor) =>{
		return sum * factor
	}
}

const sumArr = sumAndMulti([1, 2, 4, 5, 6])
console.log(sumArr(2))
*/
function sumAndMult(arr) {
  const sum = arr.reduce((acc, elem) => acc + elem, 0)
  console.log(sum)
  return (factor) => {
    const mul = sum * factor
    return (div) => {
      return mul / div
    }
  }
}

const sumArr = sumAndMult([1,2,3,4,5,6])(2)(2)
console.log(sumArr)


function sumAndMulti(arr){
	const sum = arr.reduce((acc, elem) => acc + elem, 0)
	console.log(sum)
	return (factor) =>{
		return sum * factor
	}
}

const sumArr = sumAndMulti([1, 2, 4, 5, 6])
console.log(sumArr(2))
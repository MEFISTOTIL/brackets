module.exports = function check(str, bracketsConfig) {
	let openBracets = [];
	let closeBracets = [];
	let dubleBracets = [];
	for (let i = 0; i < bracketsConfig.length; i++) {
		if (bracketsConfig[i][0] === bracketsConfig[i][1]) {
			dubleBracets.push(bracketsConfig[i][0])
		} else {
			openBracets.push(bracketsConfig[i][0]);
			closeBracets.push(bracketsConfig[i][1]);
		}
	}

	let stack = [];
	for (let i = 0; i < str.length; i++) {
		let curentSymbvol = str[i];
		// Запушиваем в стак если элемент находиться в массиве открытых скобок
		if (openBracets.includes(curentSymbvol)) {
			stack.push(curentSymbvol)
		}
		// Убираме со стака если элемент находиться в массиве зкрытых скобок равную по индексу...
		else if (closeBracets.includes(curentSymbvol)) {
			if (stack === 0) {
				return false;
			}
			let topElement = stack[stack.length - 1];
			if (closeBracets.indexOf(curentSymbvol) == openBracets.indexOf(topElement)) {
				stack.pop()
			}
			else {
				return false;
			}
		}
		// Если элемент находиться в массиве, где закрытие и открытие одинаковы
		else if (dubleBracets.includes(curentSymbvol)) {
			let te = stack[stack.length - 1];
			if (te == curentSymbvol) {
				stack.pop();
			} else {
				stack.push(curentSymbvol)
			}
		}
	}
	return stack.length === 0;
}

// const config1 = [['(', ')']];
// const config2 = [['(', ')'], ['[', ']']];
// const config3 = [['(', ')'], ['[', ']'], ['{', '}']];
// const config4 = [['|', '|']];
// const config5 = [['(', ')'], ['|', '|']];
// const config6 = [['1', '2'], ['3', '4'], ['5', '6'], ['7', '7'], ['8', '8']];
// const config7 = [['(', ')'], ['[', ']'], ['{', '}'], ['|', '|']];

// function check(str, bracketsConfig) {
	
// }

// console.log(check('||', config4))

// function check(str, bracketsConfig) {


// 	let score = 0;
// 	for (let i = 0; i < str.length; i++) {
// 		if (openBracets.includes(str[i])) {
// 			score++;
// 		}
// 		else {
// 			score--;
// 		}
// 		if (score < 0) {
// 			return false;
// 		}
// 	}
// 	if (score > 0) {
// 		return false;
// 	}
// 	else {
// 		return true;
// 	}
// }

// console.log(check(')(', config7))
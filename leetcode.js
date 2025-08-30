// 1. Reverse Words in a String
var reverseWords = function (s) {
  let splitted = s.split(' ').reverse().join(' ')
  let word = ''
  for (let i = 0; i < splitted.length; i++) {
    word += splitted[i]
    if (splitted[i] === ' ' && splitted[i + 1] === ' ') {
      word = word.trim()
    }
  }
  return word.trim()
}

// 2. maximum69Number
let maximum69Number = function (num) {
  let array = String(num).split('')
  for (let i = 0; i < array.length; i++) {
    if (array[i] == '6') {
      array[i] = '9'
      i = array.length
    }
  }
  return Number(array.join(''))
}

// 3. Robot Return to Origin
var judgeCircle = function (moves) {
  let l = 0,
    r = 0,
    u = 0,
    d = 0
  for (let move of moves) {
    if (move === 'L') l++
    else if (move === 'R') r++
    else if (move === 'U') u++
    else if (move === 'D') d++
  }
  return l === r && u === d
}

// 4. DI String Match
var diStringMatch = function (s) {
  let result = []
  let numbers = []
  for (let i = 0; i < s.length + 1; i++) {
    numbers.push(i)
  }
  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'I') {
      let minNumber = Math.min(...numbers)
      result.push(minNumber)
      numbers = numbers.filter((item) => item !== minNumber)
    } else {
      let maxNumber = Math.max(...numbers)
      result.push(maxNumber)
      numbers = numbers.filter((item) => item !== maxNumber)
    }
  }
  return [...result, ...numbers]
}

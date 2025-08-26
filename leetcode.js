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
var maximum69Number = function (num) {
  let array = String(num).split('')
  for (let i = 0; i < array.length; i++) {
    if (array[i] == '6') {
      array[i] = '9'
      i = array.length
    }
  }
  return Number(array.join(''))
}

// 1. Add Length
function addLength(str) {
  let results = []
  let splitted = str.split(' ')

  for (let i = 0; i < splitted.length; i++) {
    results.push(`${splitted[i]} ${splitted[i].length}`)
  }

  return results
}

// 2. Find Maximum and Minimum Values of a List
var min = function (list) {
  list[0] = Math.min(...list)
  return list[0]
}

var max = function (list) {
  list[0] = Math.max(...list)
  return list[0]
}

// 3. All Star Code Challenge
function strCount(str, letter) {
  let count = 0
  for (let i = 0; i < str.length; i++) {
    if (str[i] === letter) {
      count++
    }
  }
  return count
}

// 4. What is Between?
function between(a, b) {
  let result = [a]
  while (a < b) {
    result.push(a + 1)
    a++
  }
  return result
}

// 5. Find Multiples of a Number
function findMultiples(integer, limit) {
  let result = []
  let count = Math.floor(limit / integer)
  for (let i = 0; i < count; count--) {
    result.push(Math.floor(integer * count))
  }
  return result.reverse()
}

// 6. String ends with?
function solution(str, ending) {
  let s = str.slice(str.length - ending.length)
  return s === ending
}

// 7. Function 2 - squaring an argument
const square = (num) => {
  return num * num
}

// 8. List Filtering
function filter_list(l) {
  return l.filter((item) => typeof item === 'number')
}

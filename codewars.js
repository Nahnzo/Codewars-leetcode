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

// 9. Reversing Words in a String
function reverse(string) {
  return string.split(' ').reverse().join(' ')
}

// 10. Keep Hydrated!
function litres(time) {
  return Math.floor(time * 0.5)
}

// 11. Extract the domain name from a URL
function domainName(url) {
  const normalized = url.includes('://') ? url : `http://${url}`
  const hostname = new URL(normalized).hostname
  const noWww = hostname.startsWith('www.') ? hostname.slice(4) : hostname
  return noWww.split('.')[0]
}

// 12. WeIrD StRiNg CaSe
function toWeirdCase(string) {
  let str = ''
  let count = 1
  for (let i = 0; i < string.length; i++) {
    count++
    if (count % 2 === 0) {
      str += string[i].toUpperCase()
    } else {
      str += string[i].toLowerCase()
    }
    if (string[i] === ' ') {
      count = 1
    }
  }
  return str
}

// 13. Number of trailing zeros of N!
function zeros(n) {
  let count = 0
  while (n > 0) {
    n = Math.floor(n / 5)
    count += n
  }
  return count
}

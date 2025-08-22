// 1. Add Length
function addLength(str) {
  let results = []
  let splitted = str.split(' ')

  for (let i = 0; i < splitted.length; i++) {
    results.push(`${splitted[i]} ${splitted[i].length}`)
  }

  return results
}
// console.log(addLength('apple ban'))

// 2. Find Maximum and Minimum Values of a List
var min = function (list) {
  list[0] = Math.min(...list)
  return list[0]
}

var max = function (list) {
  list[0] = Math.max(...list)
  return list[0]
}

// console.log(min([4, 6, 2, 1, 9, 63, -134, 566]))
// console.log(max([4, 6, 2, 1, 9, 63, -134, 566]))

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

// console.log(strCount('Hello0dodsao', 'o'))

// 4. What is Between?

function between(a, b) {
  let result = [a]
  while (a < b) {
    result.push(a + 1)
    a++
  }
  return result
}

// console.log(between(1, 4))

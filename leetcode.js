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

// 5.  Array Partition
var arrayPairSum = function (nums) {
  let sorted = nums.sort((a, b) => a - b)
  let max = 0
  for (let i = 0; i < sorted.length; i += 2) {
    max += sorted[i]
  }
  return max
}

// 6. Relative Ranks
var findRelativeRanks = function (score) {
  let scoreWithIndex = score.map((s, i) => [s, i])

  scoreWithIndex.sort((a, b) => b[0] - a[0])

  let result = new Array(score.length).fill('')

  for (let i = 0; i < scoreWithIndex.length; i++) {
    let idx = scoreWithIndex[i][1]
    if (i === 0) result[idx] = 'Gold Medal'
    else if (i === 1) result[idx] = 'Silver Medal'
    else if (i === 2) result[idx] = 'Bronze Medal'
    else result[idx] = (i + 1).toString()
  }

  return result
}

// 7. Permutations
var permute = function (nums) {
  const res = []
  const dfs = (current, available) => {
    if (available.length === 0) {
      res.push([...current])
      return
    }

    const temp = [...available]
    for (let i = 0; i < available.length; i++) {
      current.push(available[i])
      temp.shift()
      dfs(current, temp)
      current.pop()
      temp.push(available[i])
    }
  }

  dfs([], nums)
  return res
}

// 8. Number of 1 Bits
var hammingWeight = function (n) {
  let count = 0
  n = n | 0
  while (n !== 0) {
    n &= n - 1
    count++
  }
  return count
}

// 9. Rotate Image
const rotate = (matrix) => {
  for (let i = 0; i < matrix[0].length; i++) {
    for (let j = i + 1; j < matrix.length; j++) {
      ;[matrix[j][i], matrix[i][j]] = [matrix[i][j], matrix[j][i]]
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    matrix[i].reverse()
  }
  return matrix
}

// 10. Baseball Game
var calPoints = function (operations) {
  let record = []
  for (let i = 0; i < operations.length; i++) {
    if (operations[i] === 'D') {
      record.push(record[record.length - 1] * 2)
    } else if (operations[i] === 'C') {
      record.pop()
    } else if (operations[i] === '+') {
      record.push(record[record.length - 1] + record[record.length - 2])
    } else {
      record.push(Number(operations[i]))
    }
  }
  return record.reduce((acc, item) => acc + item, 0)
}

// 11. Construct Smallest Number From DI String
var smallestNumber = function (pattern) {
  let stack = []
  let ans = ''

  for (let i = 0; i <= pattern.length; i++) {
    stack.push(i + 1)

    if (i === pattern.length || pattern[i] === 'I') {
      while (stack.length > 0) {
        ans += stack.pop()
      }
    }
  }

  return ans
}

// 12. Maximum Nesting Depth of the Parentheses
var maxDepth = function (s) {
  let stack = []
  let res = 0
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      stack.push(s[i])
    } else if (s[i] === ')') {
      res = Math.max(res, stack.length)
      stack.pop()
    }
  }

  return res
}

// 13. Clear Digits
var clearDigits = function (s) {
  let stack = []
  for (let i = 0; i < s.length; i++) {
    if (isNaN(s[i])) {
      stack.push(s[i])
    } else if (stack.length !== 0) {
      stack.pop()
    }
  }
  return stack.join('')
}

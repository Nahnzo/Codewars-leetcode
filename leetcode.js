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

// 14. Next Greater Element I
var nextGreaterElement = function (nums1, nums2) {
  let result = []
  let stack = []
  let pointer = 0
  for (let i = 0; i < nums1.length; i++) {
    stack.push(nums1[i])
  }
  for (let i = 0; i < nums1.length; i++) {
    let position = nums2.indexOf(stack[i])
    pointer = position
    do {
      pointer++
    } while (nums2[pointer] < stack[i])
    if (nums2[pointer] > stack[i]) {
      result.push(nums2[pointer])
    } else {
      result.push(-1)
    }
  }
  return result
}

// 15. Backspace String Compare
var backspaceCompare = function (s, t) {
  let stack = []
  let stack2 = []
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== '#') {
      stack.push(s[i])
    } else {
      stack.pop()
    }
  }
  for (let i = 0; i < t.length; i++) {
    if (t[i] !== '#') {
      stack2.push(t[i])
    } else {
      stack2.pop()
    }
  }

  return stack.join() === stack2.join()
}

// 16. Remove All Adjacent Duplicates In String
let removeDuplicates = function (s) {
  const stack = []

  for (const char of s) {
    if (stack.length > 0 && stack[stack.length - 1] === char) stack.pop()
    else stack.push(char)
  }

  return stack.join('')
}

// 17. Final Prices With a Special Discount in a Shop
var finalPrices = function (prices) {
  let result = [...prices]
  let stack = []
  for (let i = 0; i < prices.length; i++) {
    while (stack.length > 0 && prices[i] <= prices[stack[stack.length - 1]]) {
      let idx = stack.pop()
      result[idx] = prices[idx] - prices[i]
    }
    stack.push(i)
  }
  return result
}

// 18. Minimum Number of Increments on Subarrays to Form a Target Array
var minNumberOperations = function (target) {
  let ops = target[0]
  for (let i = 1; i < target.length; i++) {
    if (target[i] > target[i - 1]) {
      ops += target[i] - target[i - 1]
    }
  }
  return ops
}

// 19. Remove All Adjacent Duplicates in String II
var removeDuplicateS = function (s, k) {
  let stack = []
  for (let char of s) {
    if (stack.length > 0 && stack[stack.length - 1][0] === char) {
      stack[stack.length - 1][1]++
      if (stack[stack.length - 1][1] === k) {
        stack.pop()
      }
    } else {
      stack.push([char, 1])
    }
  }

  let result = ''
  for (let [ch, count] of stack) {
    result += ch.repeat(count)
  }

  return result
}

// 19. Removing Stars From a String
var removeStars = function (s) {
  let stack = []
  for (let i = 0; i < s.length; i++) {
    stack.push(s[i])
    if (s[i] === '*') {
      stack.pop()
      stack.pop()
    }
  }
  return stack.join('')
}

// 20. Reverse Substrings Between Each Pair of Parentheses
var reverseParentheses = function (s) {
  let stack = [[]]

  for (let char of s) {
    if (char === '(') {
      stack.push([])
    } else if (char === ')') {
      let group = stack.pop().reverse()
      stack[stack.length - 1].push(...group)
    } else {
      stack[stack.length - 1].push(char)
    }
  }

  return stack[0].join('')
}

// 20. Crawler Log Folder
var minOperations = function (logs) {
  let deep = []
  for (let i = 0; i < logs.length; i++) {
    if (logs[i] === './') {
      continue
    } else if (logs[i] === '../') {
      if (deep.length !== 0) deep.pop()
    } else {
      deep.push(logs[i])
    }
  }
  return deep.length
}

// 21. Simplify Path
var simplifyPath = function (path) {
  let parts = path.split('/')
  let stack = []

  for (let part of parts) {
    if (part === '' || part === '.') {
      continue
    } else if (part === '..') {
      if (stack.length > 0) stack.pop()
    } else {
      stack.push(part)
    }
  }

  return '/' + stack.join('/')
}

// 22. Sort List
var sortList = function (head) {
  if (!head || !head.next) return head

  let swapped
  do {
    swapped = false
    let current = head

    while (current.next) {
      if (current.val > current.next.val) {
        const temp = current.val
        current.val = current.next.val
        current.next.val = temp
        swapped = true
      }
      current = current.next
    }
  } while (swapped)

  return head
}
// 23. Pascal's Triangle
var generate = function (numRows) {
  let arr = []
  for (let i = 0; i < numRows; i++) {
    arr[i] = []
    for (let j = 0; j <= i; j++) {
      if (j === 0 || j === i) {
        arr[i][j] = 1
      } else {
        arr[i][j] = arr[i - 1][j] + arr[i - 1][j - 1]
      }
    }
  }
  return arr
}

// 24. Maximum Depth of Binary Tree
var maxDepth = function (root) {
  if (!root) return 0

  let left = maxDepth(root.left)
  let right = maxDepth(root.right)

  return 1 + Math.max(left, right)
}

// 25. Transform Array by Parity
var transformArray = function (nums) {
  let res = []
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      res.push(0)
    } else {
      res.push(1)
    }
  }
  return res.sort((a, b) => a - b)
}

// 26. Intersection of Two Arrays II
var intersect = function (nums1, nums2) {
  let result = []
  nums1.sort((a, b) => a - b)
  nums2.sort((a, b) => a - b)

  let i = 0,
    j = 0

  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] === nums2[j]) {
      result.push(nums1[i])
      i++
      j++
    } else if (nums1[i] < nums2[j]) {
      i++
    } else {
      j++
    }
  }

  return result
}

// 27. Sorting the Sentence
var sortSentence = function (s) {
  let splitted = s.split(' ')
  let answer = []

  for (let i = 0; i < splitted.length; i++) {
    let pos = Number(splitted[i][splitted[i].length - 1])
    answer[pos - 1] = splitted[i].slice(0, -1)
  }

  return answer.join(' ')
}

// 28. Delete Greatest Value in Each Row
var deleteGreatestValue = function (grid) {
  let answer = 0
  let n = grid[0].length

  for (let i = 0; i < grid.length; i++) {
    grid[i].sort((a, b) => a - b)
  }

  for (let j = 0; j < n; j++) {
    let colMax = 0
    for (let i = 0; i < grid.length; i++) {
      colMax = Math.max(colMax, grid[i][j])
    }
    answer += colMax
  }

  return answer
}

// 29. Find the Difference
var findTheDifference = function (s, t) {
  for (let letter of s) t = t.replace(letter, '')
  return t
}
// 30. Recover Binary Search Tree
var recoverTree = function (root) {
  let first = null
  let second = null
  let prev = null

  function traverse(node) {
    if (!node) return
    traverse(node.left)
    if (prev && prev.val > node.val) {
      if (!first) first = prev
      second = node
    }

    prev = node

    traverse(node.right)
  }

  traverse(root)

  if (first && second) {
    ;[first.val, second.val] = [second.val, first.val]
  }

  return root
}

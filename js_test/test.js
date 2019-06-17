for (var i=1; i<=5; i++) {
  setTimeout((function(i) {
    return function() {
      console.log(i)
  }})(i), i*1000)
}

for (var i = 1; i <= 5; i++) {
  setTimeout((i => () => console.log(i))(i), i*1000)
}

function mysteryFn (nums) {
  let squares = []
  let sum = 0

  for (let i = 0; i < nums.length; i++) {
    squares.push(nums[i] * nums[i])
  }

  for (let i = 0; i< squares.length; i++) {
    sum += squares[i]
  }

  return sum
}

const mysteryFn = (nums) => nums
  .map(x => x * x)
  .reduce((acc, cur) => acc + cur, 0)

function mysteryFn(nums) {
  let sum = 0
  let tally = 0

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      sum += nums[i] / 2
      tally++
    }
  }

  return tally === 0 ? : sum / tally
}

const mysteryFn = (nums) => nums
  .filter(x => x % 2 === 0)
  .map(x => x / 2)
  .reduce((acc, cur, idx, { length }) > (
    idx < length - 1
    ? acc + cur
    : (acc + cur) / length
  ), 0)


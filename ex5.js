function solution(arr) {
  let answer = [];
  let minus = [];
  let plus = [];

  for (let x of arr) {
    if (x > 0) {
      plus.push(x);
    } else {
      minus.push(x);
    }
  }
  answer = [...minus, ...plus];

  return answer;
}

console.log(solution([1, 2, 3, -3, -2, 5, 6, -6]));

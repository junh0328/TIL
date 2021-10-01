function solution(str) {
  let answer = "";
  let stack = [];
  for (let x of str) {
    if (!isNaN(x)) stack.push(Number(x));
    else {
      let right = stack.pop();
      let left = stack.pop();
      if (x === "+") stack.push(left + right);
      else if (x === "-") stack.push(left - right);
      else if (x === "*") stack.push(left * right);
      else stack.push(left / right);
    }
  }

  return (answer = stack[0]);
}

console.log(solution("352+*9-"));

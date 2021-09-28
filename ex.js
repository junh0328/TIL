function solution(str) {
  let answer = "";
  let stack = [];
  let left = "(";
  let right = ")";

  for (let x of str) {
    stack.push(x);
    {
      if (x === right) {
        while (stack.pop() !== left);
      }
    }
  }
  answer = stack.join("");
  console.log(answer);
  return answer;
}

console.log(solution("(A(BC)D)EF(G(H)(IJ)K)LM(N)"));

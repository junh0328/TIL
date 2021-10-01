function solution(n, k) {
  let queue = [];
  let answer;

  for (let i = 1; i <= n; i++) {
    queue.push(i);
  }

  while (queue.length) {
    // k는 제외할 번호이므로 k 전까지로 반복한다
    for (let i = 1; i < k; i++) queue.push(queue.shift());
    queue.shift();
    if (queue.length === 1) answer = queue.shift();
  }

  // answer = stack[0]
  return answer;
}

console.log(solution(8, 3));

function solution(arr) {
  let answer = 0;
  let max = Number.MIN_SAFE_INTEGER;

  for (let x of arr) {
    let sum = x
      .toString()
      .split("")
      .reduce((a, b) => a + Number(b), 0);

    // console.log("sum", sum);

    if (sum > max) {
      max = sum;
      // 원본 x를 answer에 할당한다
      answer = x;
    } else if (sum === max) {
      // x가 기존 answer보다 크면 answer에 x를 재할당한다
      if (x > answer) answer = x;
    }
  }
  return answer;
}

console.log(solution([128, 460, 603, 40, 521, 137, 123]));

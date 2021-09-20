function solution(arr) {
  // 최종 결과물 answer
  let answer = 0;
  // 임시로 보관할 가장 큰 sum의 값
  let max = 0;
  // arr[i]를 문자열로 분리해서 담을 빈 배열
  let n = [];
  // 각 수의 합
  let sum = 0;
  let sumArr = [];
  let MaxArr = 0;

  for (let i = 0; i < arr.length; i++) {
    n = String(arr[i]).split("");
    console.log("n:", n);

    for (let x of n) {
      console.log(x);
      sum += Number(x);
    }
    if (sum >= max) {
      console.log("sum: ", sum);
      max = sum;
      MaxArr = arr[i];
      sumArr.push(max);
    }
    sum = 0;
    console.log("----");
  }
  console.log("MaxArr:", MaxArr);
  console.log("sumArr: ", sumArr);
  console.log("max: ", Math.max(...sumArr));
  return answer;
}

solution([128, 460, 603, 40, 521, 137, 123]);

function solution(arr) {
  let answer = arr;

  for (let i = 0; i < arr.length; i++) {
    let idx = i;
    for (let j = i; j < arr.length; j++) {
      // arr[idx] 는 i 이므로 i for문의 첫 번째 인덱스로 고정된 값이다
      // j for문을 돌 때, arr[idx] 보다 arr[j]가 작을 경우 최솟값이므로 해당 인덱스를 idx에 저장한다
      if (arr[j] < arr[idx]) idx = j;
    }
    // 최솟값이 위치해야 하는 arr[i] 자리에, 위에서 구한 최솟값 j를 재할당한 arr[idx]를 할당한다 (배열의 구조 분해 할당)
    [arr[i], arr[idx]] = [arr[idx], arr[i]];
  }
  return answer;
}

console.log(solution([13, 5, 11, 7, 23, 15]));

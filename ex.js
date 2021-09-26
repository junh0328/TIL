function solution(str1, str2) {
  let answer = "YES";
  let A = new Map();

  for (let x of str1) {
    if (A.has(x)) {
      A.set(x, A.get(x) + 1);
    } else {
      if (x) A.set(x, 1);
      A.set(x, 1);
    }
  }

  for (let x of str2) {
    if (A.has(x)) {
      if (A.get(x) <= 0) {
        return (answer = "NO");
      }
      A.set(x, A.get(x) - 1);
    } else {
      return (answer = "NO");
    }
  }

  console.log(answer);
  return answer;
}

solution("AbaAeCe", "baeeACA");

/*
  해쉬 맵을 사용하여 첫번째 문자열에 대한 해쉬 값을 구한다. 
  
  AbaAeCe Map(5) { 'A' => 2, 'b' => 1, 'a' => 1, 'e' => 2, 'C' => 1 }

  첫 번째 문자열을 기준으로 두 번째 문자열(baeeACA) 을 탐색한다.

  두 번째 문자열을 순회할 때 첫 번째 문자열의 해쉬 맵에 해당 문자가 있으면 하나씩 뺀다.

  모두 통과한다면 그대로 YES가 출력되고, 조건에 만족하지 않을 경우 아나그램이 아니므로 NO를 출력하고 리턴한다
*/

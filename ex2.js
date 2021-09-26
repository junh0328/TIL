function solution(str1, str2) {
  let answer = 0;
  let A = new Map();
  let B = new Map();

  for (let x of str1) {
    if (A.has(x)) A.set(x, A.get(x) + 1);
    else A.set(x, 1);
  }

  for (let x of str2) {
    if (B.has(x)) B.set(x, B.get(x) + 1);
    else B.set(x, 1);
  }

  console.log(A);
  console.log(B);
  return answer;
}

solution("bacaAacba", "abc");

/*

str1, str2에 대해 해쉬맵을 구하기

Map.prototype.size 프로퍼티를 사용하여 해쉬맵의 크기를 비교한다

Map.prototype.delete()
Map.prototype.size()

아나그램인지 확인하는 법 > func compareMaps

map1과 map2 키의 개수가 같니? || map2의 해당 키의 값(val)이 map1의 값(val)과 같니? >> return false

*/

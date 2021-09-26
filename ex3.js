function compareMaps(map1, map2) {
  if (map1.size !== map2.size) return false; // 키 개수가 다른 경우 return 한다.
  for (let [key, val] of map1) {
    if (!map2.has(key) || map2.get(key) !== val) return false;
  }
  return true;
}

function solution(s, t) {
  let answer = 0;
  let tH = new Map();
  let sH = new Map();

  for (let x of t) {
    if (tH.has(x)) tH.set(x, tH.get(x) + 1);
    else tH.set(x, 1);
  }

  let len = t.length - 1;
  for (let i = 0; i < len; i++) {
    if (sH.has(s[i])) sH.set(s[i], sH.get(s[i]) + 1);
    else sH.set(s[i], 1);
  }
  // console.log(sH);

  let lt = 0;
  for (let rt = len; rt < s.length; rt++) {
    if (sH.has(s[rt])) sH.set(s[rt], sH.get(s[rt]) + 1);
    else sH.set(s[rt], 1);
    if (compareMaps(sH, tH)) answer++;
    sH.set(s[lt], sH.get(s[lt]) - 1);
    if (sH.get(s[lt]) === 0) sH.delete(s[lt]);
    lt++;
  }

  console.log(answer);
  return answer;
}

solution("bacaAacba", "abc");

/*
  Map.prototype.delete()
  Map.prototype.size()

  아나그램인지 확인하는 법 > func compareMaps

  map1과 map2 키의 개수가 같니? || map2의 해당 키의 값(val)이 map1의 값(val)과 같니? >> return false
*/

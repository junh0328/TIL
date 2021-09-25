function 학급회장(str) {
  let answer = "";
  const hash = new Map();

  for (let x of str) {
    if (hash.has(x)) hash.set(x, hash.get(x) + 1);
    else hash.set(x, 1);
  }
  let max = Number.MIN_SAFE_INTEGER;

  for (let [key, val] of hash) {
    if (val > max) {
      max = val;
      answer = key;
    }
  }
  console.log(answer);
  return answer;
}

학급회장("BACBACCACCBDEDE");

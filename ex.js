function 뒤집은소수(arr) {
  let answer = [];

  function isPrime(x) {
    if (x === 1) return false;
    for (let i = 2; i < Math.floor(Math.sqrt(x)); i++) {
      if (x % i === 0) return false;
    }
    return true;
  }

  for (let x of arr) {
    x = Number(x.toString().split("").reverse().join(""));
    if (isPrime(x)) answer.push(x);
  }
  console.log(answer);
  return answer;
}

뒤집은소수([32, 55, 62, 20, 250, 370, 200, 30, 100]);

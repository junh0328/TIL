# 문자열 탐색

## 확인하는 법

1. 해당 섹션 다운로드 또는 html 코드 복사
2. vs code 확장프로그램 live server 실행
3. 콘솔창을 통해 결과 확인

## 목차

- [자릿수의 합](#자릿수의-합)

## 자릿수의 합

```
N개의 자연수가 입력되면 각 자연수의 자릿수의 합을 구하고, 그 합이 최대인 자연수를 출력 하는 프로그램을 작성하세요.
자릿수의 합이 같은 경우 원래 숫자가 큰 숫자를 답으로 합니다. 만약 235 와 1234가 동시에 답이 될 수 있다면 1234를 답으로 출력해야 합니다.

▣ 입력설명
첫 줄에 자연수의 개수 N(3<=N<=100)이 주어지고, 그 다음 줄에 N개의 자연수가 주어진다. 각 자연수의 크기는 10,000,000를 넘지 않는다.

▣ 출력설명
자릿수의 합이 최대인 자연수를 출력한다.

▣ 입력예제 1
7

128 460 603 40 521 137 123

▣ 출력예제 1
137
```

<details>
<summary>예제 코드 보기</summary>

```html
<html>
  <head>
    <meta charset="UTF-8" />
    <title>출력결과</title>
  </head>
  <body>
    <script>
      function solution(n, arr) {
        let answer,
          max = Number.MIN_SAFE_INTEGER;

        return answer;
      }

      let arr = [128, 460, 603, 40, 521, 137, 123];
      console.log(solution(7, arr));
    </script>
  </body>
</html>
```

</details>

<details>
<summary>내 코드 보기</summary>

```html
<!DOCTYPE html>
<head>
  <title>Document</title>
</head>
<body>
  <script>
    function solution(n, arr){

      let answer; // 최종 max 값 (정답)을 담을 변수  5
      let s=[]; // 분리한 숫자 배열을 담을 변수 2
      let immsi; // 숫자를 문자열로 변환 1
      let sum=0; // 각 배열의 합을 담음 3
      let max = Number.MIN_SAFE_INTEGER; // sum 과 비교하여 큰 값을 저장 4

      for(let i = 0; i<arr.length; i++){
        s = [];
        sum=0;
        immsi = String(arr[i]);
        // 1. 문자열로 만들기
        console.log('immsi: ',immsi);

        // 2. for of 문 둘면서 숫자로 변환하기
        for(let x of immsi){
          console.log('숫자로 변환: ',parseInt(x)); // 문자열을 숫자로 변환 > 다 더해
          s.push(parseInt(x));
        }
        console.log('s:', s);
        for(let y of s){
          sum += y;
        }
        console.log('sum: ',sum);
        // max 보다 sum의 값이 크거나 같을 경우 원래 숫자가 더 큰 것을 출력
        if(max <= sum){
          max = sum;
        }
        console.log('max:',max);
      }
      return answer;
    }
    let n = 7;
    let arr = [128, 460, 603, 40, 521, 137, 123]
    console.log(solution(n, arr));
  </script>
</body>
</html>
```

</details>

<details>
<summary>선생님 코드 보기</summary>

```html
<html>
  <head>
    <meta charset="UTF-8" />
    <title>출력결과</title>
  </head>
  <body>
    <script>
      function solution(n, arr) {
        let answer,
          max = Number.MIN_SAFE_INTEGER;
        for (let x of arr) {
          let sum = 0,
            tmp = x; // x를 변형하는 것이 아닌, 임시 변수(tmp)를 지정하여 해당 변수를 통해 연산한다
          while (tmp) {
            sum += tmp % 10; // tmp의 10으로 나눈 나머지 값을 sum에 저장
            tmp = Math.floor(tmp / 10);
          }
          // console.log(sum);
          if (sum > max) {
            max = sum;
            answer = x; // sum의 원본 값인 x를 넣어준다.
          } else if (sum === max) {
            // sum값과 max 값이 같은 경우 (원본 값의 더 큰 것이 max다)
            if (x > answer) answer = x;
          }
        }
        return answer;
      }

      let arr = [128, 460, 603, 40, 521, 137, 123];
      console.log(solution(7, arr));
    </script>
  </body>
</html>
```

> 고차 함수와 내장 함수 사용하기

```html
<html>
  <head>
    <meta charset="UTF-8" />
    <title>출력결과</title>
  </head>
  <body>
    <script>
      function solution(n, arr) {
        let answer,
          max = Number.MIN_SAFE_INTEGER;
        for (let x of arr) {
          let sum = 0;

          sum = x
            .toString()
            .split("")
            .reduce((a, b) => a + Number(b), 0);
          // sum =x.toString().split('').reduce((a,b) => a+ Number(b)); 0 없을 때 확인하기
          console.log("sum:", sum);
          // sum.reduce((a,b) => a + Number(b));
          if (sum > max) {
            max = sum;
            answer = x; // sum의 원본 값인 x를 넣어준다.
          } else if (sum === max) {
            // sum값과 max 값이 같은 경우 (원본 값의 더 큰 것이 max다)
            if (x > answer) answer = x;
          }
        }
        return answer;
      }

      let arr = [128, 460, 603, 40, 521, 137, 123];
      console.log(solution(7, arr));
    </script>
  </body>
</html>
```

</details>

<hr/>

#### 복사용

<details>
<summary>예제 코드 보기</summary>

```html

```

</details>

<details>
<summary>내 코드 보기</summary>

```html

```

</details>

<details>
<summary>선생님 코드 보기</summary>

```html

```

</details>

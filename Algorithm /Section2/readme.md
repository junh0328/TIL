# 기본 문제 풀이

## 확인하는 법

1. 해당 섹션 다운로드 또는 html 코드 복사
2. vs code 확장프로그램 live server 실행
3. 콘솔창을 통해 결과 확인

## 목차

- [큰 수 출력하기](#큰-수-출력하기)
- [보이는 학생](#보이는-학생)
- [가위 바위 보](#가위-바위-보)
- [점수계산](#점수계산)
- [정리](#정리)

## 큰 수 출력하기

```
N(1<=N<=100)개의 정수를 입력받아, 자신의 바로 앞 수보다 큰 수만 출력하는 프로그램을 작 성하세요.(첫 번째 수는 무조건 출력한다)

▣ 입력설명
첫 줄에 자연수 N이 주어지고, 그 다음 줄에 N개의 정수가 입력된다.

▣ 출력설명
자신의 바로 앞 수보다 큰 수만 한 줄로 출력한다.

▣ 입력예제 1
6
7 3 9 5 6 12

▣ 출력예제 1
7 9 6 12
```

<details>
<summary>예제코드 보기</summary>

```html
<html>
  <head>
    <meta charset="UTF-8" />
    <title>출력결과</title>
  </head>
  <body>
    <script>
      function solution(arr) {
        let answer = [];

        return answer;
      }
      let arr = [7, 3, 9, 5, 6, 12];
      console.log(solution(arr));
    </script>
  </body>
</html>
```

</details>

<details>
<summary>내가 쓴 풀이 보기</summary>

```
1. 임의의 숫자 n을 배열 맨 앞에 넣는다.
2. 배열을 돌며 앞의 수보다 클 경우 answer 배열에 push
3. answer 리턴 (수를 구한다면 answer.length를 리턴)
```

```html
<html>
  <head>
    <meta charset="UTF-8" />
    <title>출력결과</title>
  </head>
  <body>
    <script>
      function solution(n, arr) {
        let answer = [];
        arr.unshift(n);
        for (let i = 0; i < arr.length; i++) {
          if (arr[i] < arr[i + 1]) {
            answer.push(arr[i + 1]);
          }
        }
        return answer;
      }
      let n = 6;
      let arr = [7, 3, 9, 5, 6, 12];
      console.log(solution(n, arr));
    </script>
  </body>
</html>
```

</details>

<details>
<summary>선생님이 쓴 풀이 보기</summary>

```html
<html>
  <head>
    <meta charset="UTF-8" />
    <title>출력결과</title>
  </head>
  <body>
    <script>
      function solution(arr) {
        let answer = [];
        answer.push(arr[0]);
        for (let i = 1; i < arr.length; i++) {
          if (arr[i] > arr[i - 1]) answer.push(arr[i]);
        }
        return answer;
      }
      let arr = [7, 3, 9, 5, 6, 12];
      console.log(solution(arr));
    </script>
  </body>
</html>
```

</details>

## 보이는 학생

```
선생님이 N(1<=N<=1000)명의 학생을 일렬로 세웠습니다.
일렬로 서 있는 학생의 키가 앞에 서부터 순서대로 주어질 때, 맨 앞에 서 있는 선생님이 볼 수 있는 학생의 수를 구하는 프로그 램을 작성하세요.
(앞에 서 있는 사람들보다 크면 보이고, 작거나 같으면 보이지 않습니다.)

▣ 입력설명
첫 줄에 정수 N이 입력된다. 그 다음줄에 N명의 학생의 키가 앞에서부터 순서대로 주어진다.

▣ 출력설명
선생님이 볼 수 있는 최대학생수를 출력한다.

▣ 입력예제 1
8
130 135 148 140 145 150 150 153

▣ 출력예제 1
5
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
      function solution(arr) {
        let answer = 1,
          max = arr[0];

        return answer;
      }
      let arr = [130, 135, 148, 140, 145, 150, 150, 153];
      console.log(solution(arr));
    </script>
  </body>
</html>
```

</details>

<details>
<summary>내가 쓴 풀이 보기</summary>

```
1. 130 이 첫 max이다
2. max랑 그 다음 학생이랑 비교한다.
3. max보다 크면 그 학생을 max로 바꾼다
4. 반복해서 바뀐 수를 증감한다.
```

```html
<html>
  <head>
    <meta charset="UTF-8" />
    <title>출력결과</title>
  </head>
  <body>
    <script>
      function solution(arr) {
        let answer = 1; // 처음 보이는 학생의 수를 더해야하기 때문에 1로 두었음
        let max = arr[0];
        console.log(max);
        for (var x = 0; x < arr.length; x++) {
          if (arr[x + 1] > max) {
            max = arr[x + 1];
            console.log("max changed:", max);
            answer++;
          }
        }

        return answer;
      }
      let arr = [130, 135, 148, 140, 145, 150, 150, 153];
      console.log(solution(arr));
    </script>
  </body>
</html>
```

</details>

<details>
<summary>선생님이 쓴 풀이 보기</summary>

```html
<html>
  <head>
    <meta charset="UTF-8" />
    <title>출력결과</title>
  </head>
  <body>
    <script>
      function solution(arr) {
        let answer = 1; // 처음 보이는 학생의 수를 더해야하기 때문에 1로 두었음
        let max = arr[0];
        for (let i = 1; i < arr.length; i++) {
          if (arr[i] > max) {
            answer++;
            max = arr[i];
          }
        }
        return answer;
      }
      let arr = [130, 135, 148, 140, 145, 150, 150, 153];
      console.log(solution(arr));
    </script>
  </body>
</html>
```

</details>

## 가위 바위 보

```
A, B 두 사람이 가위바위보 게임을 합니다. 총 N번의 게임을 하여 A가 이기면 A를 출력하고, B가 이기면 B를 출력합니다. 비길 경우에는 D를 출력합니다.
가위, 바위, 보의 정보는 1:가위, 2:바위, 3:보로 정하겠습니다.
예를 들어 N=5이면
두 사람의 각 회의 가위, 바위, 보 정보가 주어지면 각 회를 누가 이겼는지 출력하는 프로그램 을 작성하세요.

▣ 입력설명
첫 번째 줄에 게임 횟수인 자연수 N(1<=N<=100)이 주어집니다.
두 번째 줄에는 A가 낸 가위, 바위, 보 정보가 N개 주어집니다.
세 번째 줄에는 B가 낸 가위, 바위, 보 정보가 N개 주어집니다.

▣ 출력설명
각 줄에 각 회의 승자를 출력합니다. 비겼을 경우는 D를 출력합니다.

▣ 입력예제 1
5
23313
11223

▣ 출력예제 1
A
B
A
B
D
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
      function solution(a, b) {
        let answer = "";

        return answer;
      }
      let a = [2, 3, 3, 1, 3];
      let b = [1, 1, 2, 2, 3];
      console.log(solution(a, b));
    </script>
  </body>
</html>
```

</details>

<details>
<summary>내가 쓴 풀이 보기</summary>

<img width="500" src="./images/gbb.jpg" alt="가위바위보"/>

```
처음에 가위 바위 보를 숫자 1,2,3 으로 받아서 비교를 하기 위해서는 문자열로만 가능하다고 생각했다.
if else와 else를 쓰기 위해서는 숫자로 비교해야 함
```

```html
<html>
  <head>
    <meta charset="UTF-8" />
    <title>출력결과</title>
  </head>
  <body>
    <script>
      function solution(n, a, b) {
        let answer = [];
        let A = [];
        let B = [];
        for (let i = 0; i < n; i++) {
          A.push(a[i].toString());
          B.push(b[i].toString());
        }
        // console.log('A: ',A);
        // console.log('B: ',B);
        for (let j = 0; j < n; j++) {
          if (A[j] === "1" && B[j] === "3") answer.push("A");
          if (A[j] === "2" && B[j] === "1") answer.push("A");
          if (A[j] === "3" && B[j] === "2") answer.push("A");

          if (B[j] === "1" && A[j] === "3") answer.push("B");
          if (B[j] === "2" && A[j] === "1") answer.push("B");
          if (B[j] === "3" && A[j] === "2") answer.push("B");

          if (B[j] === "1" && A[j] === "1") answer.push("D");
          if (B[j] === "2" && A[j] === "2") answer.push("D");
          if (B[j] === "3" && A[j] === "3") answer.push("D");
        }
        return answer;
      }
      n = 7;
      let personA = [2, 3, 3, 1, 3, 2, 3];
      let personB = [1, 1, 2, 2, 3, 2, 1];
      console.log(solution(n, personA, personB));
    </script>
  </body>
</html>
```

</details>

<details>
<summary>선생님이 쓴 풀이 보기</summary>

```html
<html>
  <head>
    <meta charset="UTF-8" />
    <title>출력결과</title>
  </head>
  <body>
    <script>
      function solution(a, b) {
        let answer = "";
        for (let i = 0; i < a.length; i++) {
          if (a[i] === b[i]) answer += "D ";
          else if (a[i] === 1 && b[i] === 3) answer += "A ";
          else if (a[i] === 2 && b[i] === 1) answer += "A ";
          else if (a[i] === 3 && b[i] === 2) answer += "A ";
          else answer += "B ";
        }

        return answer;
      }

      let a = [2, 3, 3, 1, 3];
      let b = [1, 1, 2, 2, 3];
      console.log(solution(a, b));
    </script>
  </body>
</html>
```

</details>

## 점수계산

```
OX 문제는 맞거나 틀린 두 경우의 답을 가지는 문제를 말한다.
여러 개의 OX 문제로 만들어진 시험에서 연속적으로 답을 맞히는 경우에는 가산점을 주기 위해서 다음과 같이 점수 계산을 하기로 하였다.
1번 문제가 맞는 경우에는 1점으로 계산한다. 앞의 문제에 대해서는 답을 틀리다가 답이 맞는 처음 문제는 1점으로 계산한다.
또한, 연속으로 문제의 답이 맞는 경우에서 두 번째 문제는 2점, 세 번째 문제는 3점, ..., K번째 문제는 K점으로 계산한다. 틀린 문제는 0점으로 계산한다.
예를 들어, 아래와 같이 10 개의 OX 문제에서 답이 맞은 문제의 경우에는 1로 표시하고, 틀린 경 우에는 0으로 표시하였을 때, 점수 계산은 아래 표와 같이 계산되어, 총 점수는 1+1+2+3+1+2=10 점이다.

1011100110

채점 1 0 1 1 1 0 0 1 1 0
점수 1 0 1 2 3 0 0 1 2 0

시험문제의 채점 결과가 주어졌을 때, 총 점수를 계산하는 프로그램을 작성하시오.

▣ 입력설명
첫째 줄에 문제의 개수 N (1 ≤ N ≤ 100)이 주어진다. 둘째 줄에는 N개 문제의 채점 결과를 나 타내는 0 혹은 1이 빈 칸을 사이에 두고 주어진다. 0은 문제의 답이 틀린 경우이고, 1은 문제의 답이 맞는 경우이다.

▣ 출력설명
첫째 줄에 입력에서 주어진 채점 결과에 대하여 가산점을 고려한 총 점수를 출력한다.

▣ 입력예제 1
10
1 0 1 1 1 0 0 1 1 0

▣ 출력예제 1 10
```

<details>
<summary>예제 코드 보기</summary>

```
1. return할 answer 변수와 증감식을 저장할 cnt 변수를 저장

cnt가 1을 만나면 +1
cnt가 0을 만나면 0을 재할당

2. index, 즉 요소를 따로 확인할 필요가 없으므로 for of문을 통해 더욱 간단하게 표현할 수 있다.
```

```html
<html>
  <head>
    <meta charset="UTF-8" />
    <title>출력결과</title>
  </head>
  <body>
    <script>
      function solution(arr) {
        let answer = 0,
          cnt = 0;

        return answer;
      }
      let arr = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
      console.log(solution(arr));
    </script>
  </body>
</html>
```

</details>

<details>
<summary>내가 쓴 풀이 보기</summary>

```html
<html>
  <head>
    <meta charset="UTF-8" />
    <title>출력결과</title>
  </head>
  <body>
    <script>
      function solution(arr) {
        let answer = 0,
          cnt = 0;
        for (let i = 0; i < arr.length; i++) {
          if (arr[i] !== 0) {
            answer = answer + arr[i];
            if (arr[i] === arr[i + 1]) {
              cnt++;
              answer = answer + cnt;
            } else cnt = 0;
          }
        }
        return answer;
      }
      let arr = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
      console.log(solution(arr));
    </script>
  </body>
</html>
```

</details>

<details>
<summary>선생님이 쓴 풀이 보기</summary>

```html
<html>
  <head>
    <meta charset="UTF-8" />
    <title>출력결과</title>
  </head>
  <body>
    <script>
      function solution(arr) {
        let answer = 0,
          cnt = 0;
        for (let x of arr) {
          if (x === 1) {
            cnt++;
            answer += cnt;
          } else cnt = 0;
        }
        return answer;
      }

      let arr = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
      console.log(solution(arr));
    </script>
  </body>
</html>
```

</details>

## 등수구하기

```
N(1<=N<=100)명의 학생의 국어점수가 입력되면 각 학생의 등수를 입력된 순서대로 출력하는 프로그램을 작성하세요.

▣ 입력설명
첫 줄에 N(3<=N<=1000)이 입력되고, 두 번째 줄에 국어점수를 의미하는 N개의 정수가 입력 된다.
같은 점수가 입력될 경우 높은 등수로 동일 처리한다. 즉 가장 높은 점수가 92점인데 92점이 3명 존재하면 1등이 3명이고 그 다음 학생은 4등이 된다.

▣ 출력설명
입력된 순서대로 등수를 출력한다.

▣ 입력예제 1
5
87 89 92 100 76

▣ 출력예제 1
4 3 2 1 5
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
      function solution(arr) {
        let n = arr.length;

        return answer;
      }

      let arr = [87, 89, 92, 100, 76];
      console.log(solution(arr));
    </script>
  </body>
</html>
```

</details>

<details>
<summary>내가 쓴 풀이 보기</summary>

```
접근 방식이 잘못 되었다.
배열의 각 인덱스 요소의 값을 올려주기 위해서 cnt 변수를 생각했지만,
처음 answer에 빈 배열로 넘겨주었기 때문에, 요소에 삽입이 불가능하다.

answer를 차라리 배열로 만들어, 초기값을 각각 1로 준다.

let answer= [1,1,1,1,1];

후에 이중 for문을 돌면서, 각 조건에 만족하면 answer[i]++
즉, answer의 i 번째 요소의 '값'을 증가시키는 방향으로 가면 좋을 것 같다.
```

```html
<!-- 실패 -->
<html>
  <head>
    <meta charset="UTF-8" />
    <title>출력결과</title>
  </head>
  <body>
    <script>
      function solution(arr) {
        let n = arr.length;
        let answer = [];
        let cnt = 1;

        for (let i = 0; i < n; i++) {
          for (let j = 0; j < n; j++) {
            if (arr[j] > arr[i]) console.log(j, arr[j], i, arr[i]);
            cnt++;
          }
        }

        return answer;
      }

      let arr = [87, 89, 92, 100, 76];
      console.log(solution(arr));
    </script>
  </body>
</html>
```

</details>

<details>
<summary>선생님이 쓴 풀이 보기</summary>

```html
<html>
  <head>
    <meta charset="UTF-8" />
    <title>출력결과</title>
  </head>
  <body>
    <script>
      function solution(arr) {
        let n = arr.length;
        let answer = [1, 1, 1, 1, 1];
        // let answer = Array.from({ length: n}, () => 1);

        for (let i = 0; i < n; i++) {
          for (let j = 0; j < n; j++) {
            // i가 주인공이다
            // i를 기준으로 arr[j]가 arr[i] 보다 크다면, answer[i] 번째 요소에 값을 더한다
            if (arr[j] > arr[i]) answer[i]++;
          }
        }

        return answer;
      }

      let arr = [87, 92, 92, 100, 76];
      console.log(solution(arr));
    </script>
  </body>
</html>
```

</details>

## 격자판 최대합

```
격자판 최대합
5*5 격자판에 아래롸 같이 숫자가 적혀있습니다.
[자바스크립트 알고리즘 문제풀이]

N*N의 격자판이 주어지면 각 행의 합, 각 열의 합, 두 대각선의 합 중 가 장 큰 합을 출력합니다.

▣ 입력설명
첫 줄에 자연수 N이 주어진다.(1<=N<=50)
두 번째 줄부터 N줄에 걸쳐 각 줄에 N개의 자연수가 주어진다. 각 자연수는 100을 넘지 않는다.

▣ 출력설명 최대합을 출력합니다.

▣ 입력예제 1
5

10 13 10 12 15
12 39 30 23 11
11 25 50 53 15
19 27 29 37 27
19 13 30 13 19

▣ 출력예제 1
155
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
      function solution(arr) {
        let answer = Number.MIN_SAFE_INTEGER;
        let n = arr.length;

        return answer;
      }

      let arr = [
        [10, 13, 10, 12, 15],
        [12, 39, 30, 23, 11],
        [11, 25, 50, 53, 15],
        [19, 27, 29, 37, 27],
        [19, 13, 30, 13, 19],
      ];
      console.log(solution(arr));
    </script>
  </body>
</html>
```

</details>

<details>
<summary>내가 쓴 풀이 보기</summary>

```
새로운 유형이라 처음 봄, 선생님의 문제 풀이를 보고 이해함
```

</details>

<details>
<summary>선생님이 쓴 풀이 보기</summary>

```html
<html>
  <head>
    <meta charset="UTF-8" />
    <title>출력결과</title>
  </head>
  <body>
    <script>
      function solution(arr) {
        let answer = Number.MIN_SAFE_INTEGER;
        let n = arr.length;
        // console.log(arr.length);
        let hang = 0;
        let yeol = 0;
        for (let i = 0; i < n; i++) {
          hang = yeol = 0;
          for (let j = 0; j < n; j++) {
            // 행 탐색, 열 탐색을 이중 for문으로 진행한다
            hang += arr[i][j]; //j가 돈다. 01 02 03 04
            yeol += arr[j][i]; //j가 돈다. 10 20 30 40
          }
          answer = Math.max(answer, hang, yeol); // answer에는 인수 세개 중 가장 큰 수 저장된다
        }
        hang = yeol = 0;
        for (let i = 0; i < n; i++) {
          hang += arr[i][i]; // 00, 11, 22, 33, 44
          yeol += arr[i][n - i - 1];
        }
        answer = Math.max(answer, hang, yeol); // answer에는 인수 세개 중 가장 큰 수 저장된다
        return answer;
      }

      let arr = [
        [10, 13, 10, 12, 15],
        [12, 39, 30, 23, 11],
        [11, 25, 50, 53, 15],
        [19, 27, 29, 37, 27],
        [19, 13, 30, 13, 19],
      ];
      console.log(solution(arr));
    </script>
  </body>
</html>
```

</details>

# 기본 문제 풀이

## 확인하는 법

1. 해당 섹션 다운로드 또는 html 코드 복사
2. vs code 확장프로그램 live server 실행
3. 콘솔창을 통해 결과 확인

## 목차

- [큰 수 출력하기](#큰-수-출력하기)
- [보이는 학생](#보이는-학생)
- [가위 바위 보](#가위-바위-보)
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

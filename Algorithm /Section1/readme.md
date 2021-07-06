# 기본 문제 풀이

## 확인하는 법

1. 해당 섹션 다운로드 또는 html 코드 복사
2. vs code 확장프로그램 live server 실행
3. 콘솔창을 통해 결과 확인

## 목차

- [세 수 중 최솟값](#세-수-중-최솟값)
- [삼각형 판별하기](#삼각형-판별하기)
- [연필 개수](#연필-개수)
- [1부터 N까지 합 출력하기](#1부터-N까지-합-출력하기)
- [최솟값 구하기](#최솟값-구하기)
- [홀수](#홀수)
- [10부제](#10부제)
- [일곱 난쟁이](#일곱-난쟁이)
- [A를 #으로](#A를-#으로)
- [문자 찾기](#문자-찾기)
- [대문자 찾기](#대문자-찾기)
- [대문자로 통일하기](#대문자로-통일하기)

## 세 수 중 최솟값

```
100이하의 자연수 A, B, C를 입력받아 세 수 중 가장 작은 값을 출력하는 프로그램을 작성하 세요.(정렬을 사용하면 안됩니다)

▣ 입력설명
첫 번째 줄에 100이하의 세 자연수가 입력된다.

▣ 출력설명
첫 번째 줄에 가장 작은 수를 출력한다.

▣ 입력예제 1 6 5 11

▣ 출력예제 1 5
```

<details>
<summary> 기본 세팅 </summary>

```html
<html>
  <head>
    <meta charset="UTF-8" />
    <title>출력결과</title>
  </head>
  <body>
    <script>
      function solution(a, b, c) {
        let answer;

        // 이 사이에 최솟값을 구하는 함수 solution()에 대한 식을 넣습니다.

        return answer;
      }
      console.log(solution(6, 1, 11));
    </script>
  </body>
</html>
```

</details>

<details>
<summary> 내가 쓴 풀이 </summary>
<img width="400" src="./images/01.jpg" alt="최솟값"/>
</details>

<details>
<summary> 정답 코드 보러 가기 </summary>

```html
<html>
  <head>
    <meta charset="UTF-8" />
    <title>출력결과</title>
  </head>
  <body>
    <script>
      function solution(a, b, c) {
        let answer;
        if (a > b) {
          answer = b;
        } else {
          answer = a;
        }

        if (answer > c) {
          answer = c;
        }
        return answer;
      }
      console.log(solution(6, 1, 11));
    </script>
  </body>
</html>
```

</details>

<br/>

## 삼각형 판별하기

```
길이가 서로 다른 A, B, C 세 개의 막대 길이가 주어지면 이 세 막대로 삼각형을 만들 수 있 으면 “YES"를 출력하고, 만들 수 없으면 ”NO"를 출력한다.

▣ 입력설명
첫 번째 줄에 100이하의 서로 다른 A, B, C 막대의 길이가 주어진다.

▣ 출력설명
첫 번째 줄에 “YES", "NO"를 출력한다.

▣ 입력예제 1
6 7 11

▣ 출력예제 1
YES

▣ 입력예제 1
13 33 17

▣ 출력예제 1
NO

```

<details>
<summary> 기본 세팅 </summary>

```html
<html>
  <head>
    <meta charset="UTF-8" />
    <title>출력결과</title>
  </head>
  <body>
    <script>
      function solution(a, b, c) {
        let answer = "YES";
        let max;

        return answer;
      }
      console.log(solution(13, 33, 17));
    </script>
  </body>
</html>
```

</details>

<details>
<summary> 내가 쓴 풀이 </summary>

```html
<html>
  <head>
    <meta charset="UTF-8" />
    <title>출력결과</title>
  </head>
  <body>
    <script>
      function solution(a, b, c) {
        let answer = "YES",
          max;
        // 일단 제일 큰 수를 맥스로 넣어야 함
        // 제일 큰 수(max) 보다 나머지 두 파라미터의 값이 커야 참 (YES)
        // 그 다음 나머지 파라미터 두 개의 합이 맥스보다 작으면 오답이됨 (NO)

        // 1. a가 맥스
        if (a > b) {
          max = a;
          if (max > b + c) {
            answer = "YES";
          } else {
            answer = "NO";
          }

          // 2. b가 맥스
        } else {
          max = b;
          if (max > a + c) {
            answer = "YES";
          } else {
            answer = "NO";
          }
        }
        return answer;
      }
      console.log(solution(13, 33, 19));
    </script>
  </body>
</html>
```

</details>

<details>
<summary> 선생님 풀이 보러 가기 </summary>

```html
<html>
  <head>
    <meta charset="UTF-8" />
    <title>출력결과</title>
  </head>
  <body>
    <script>
      function solution(a, b, c) {
        let answer = "YES",
          max;
        let sum = a + b + c;
        if (a > b) max = a;
        else max = b;
        if (c > max) max = c;
        // 세 막대의 합(sum)에서 가장 큰 막대(max)의 길이를 뺐을 때
        // 두 막대기 길이의 합(sum -max)이 가장 큰 막대의 길이(max)보다 작을 경우 거짓
        if (sum - max <= max) answer = "NO";

        return answer;
      }
      console.log(solution(6, 7, 11));
    </script>
  </body>
</html>
```

</details>

<details>
<summary>차이점은?</summary>

```
변수가 주어지지 않더라도 새롭게 만들어 쓸 수 있는 생각을 할 필요가 있다 (변수 max를 새로 선언하는 경우)
결과값은 같더라도 코드의 길이를 줄일 수 있는 방법을 더 생각하면 좋을 것 같다.
```

</details>

## 연필 개수

```
연필 1 다스는 12자루입니다. 학생 1인당 연필을 1자루씩 나누어 준다고 할 때 N명이 학생수 를 입력하면 필요한 연필의 다스 수를 계산하는 프로그램을 작성하세요.

▣ 입력설명
첫 번째 줄에 1000 이하의 자연수 N이 입력된다.

▣ 출력설명
첫 번째 줄에 필요한 다스 수를 출력합니다.

▣ 입력예제 1
25

▣ 출력예제 1
3

▣ 입력예제 2
178

▣ 출력예제 2
15
```

<details>
<summary> 기본 세팅 </summary>

```html
<html>
  <head>
    <meta charset="UTF-8" />
    <title>출력결과</title>
  </head>
  <body>
    <script>
      function solution(n) {
        let answer;

        return answer;
      }
      console.log(solution(178));
    </script>
  </body>
</html>
```

</details>

<details>
<summary> 내가 쓴 풀이 </summary>

```html
<html>
  <head>
    <meta charset="UTF-8" />
    <title>출력결과</title>
  </head>
  <body>
    <script>
      function solution(n) {
        // 한 다스는 열두자루
        // 연필의 다스 수이므로, floor 메서드를 통해 처리
        let answer;
        answer = Math.floor(n / 12) + 1;
        return answer;
      }
      console.log(solution(13));
    </script>
  </body>
</html>
```

</details>

<details>
<summary> 선생님 풀이 보러 가기 </summary>

```html
<html>
  <head>
    <meta charset="UTF-8" />
    <title>출력결과</title>
  </head>
  <body>
    <script>
      function solution(n) {
        let answer;
        answer = Math.ceil(n / 12);
        return answer;
      }
      console.log(solution(178));
    </script>
  </body>
</html>
```

</details>

<details>
<summary> 차이점은? </summary>

```
Math 객체를 두 가지 방법이 있음

floor()를 통해서 나머지를 버리고 + 1 을 하거나,
ceil()을 통해 나머지가 있을 경우 올림 하는 경우

Math.random()을 사용하여 floor로 버리는 난 수 만드는 방법을 사용해서 ceil() 메서드의 존재 유무조차 몰랐음
MDN에서 math 객체 내장 메서드 공부를 좀 더 해야 겠다
```

</details>

## 1부터 N까지 합 출력하기

```
자연수 N이 입력되면 1부터 N까지의 합을 출력하는 프로그램을 작성하세요.

▣ 입력설명
첫 번째 줄에 20이하의 자연수 N이 입력된다..

▣ 출력설명
첫 번째 줄에 1부터 N까지의 합을 출력한다.

▣ 입력예제 1
6

▣ 출력예제 1
21

▣ 입력예제 2
10

▣ 출력예제 2
55
```

<details>
<summary> 기본 세팅 </summary>

```html
<html>
  <head>
    <meta charset="UTF-8" />
    <title>출력결과</title>
  </head>
  <body>
    <script>
      function solution(n) {
        let answer = 0;
        return answer;
      }
      console.log(solution(6));
    </script>
  </body>
</html>
```

</details>

<details>
<summary> 내가 쓴 풀이 </summary>

```html
<html>
  <head>
    <meta charset="UTF-8" />
    <title>출력결과</title>
  </head>
  <body>
    <script>
      function solution(n) {
        let answer = 0;
        answer = (n * (n + 1)) / 2;
        return answer;
      }

      console.log(solution(6));
    </script>
  </body>
</html>
```

</details>

<details>
<summary> 선생님 풀이 보러 가기 </summary>

```html
<html>
  <head>
    <meta charset="UTF-8" />
    <title>출력결과</title>
  </head>
  <body>
    <script>
      function solution(n) {
        let answer = 0;
        for (let i = 1; i <= n; i++) {
          answer = answer + i;
        }
        return answer;
      }

      console.log(solution(10));
    </script>
  </body>
</html>
```

</details>

<details>
<summary> 차이점은? </summary>

```
xx
```

</details>

## 최솟값 구하기

```
7개의 수가 주어지면 그 숫자 중 가장 작은 수를 출력하는 프로그램을 작성하세요.

▣ 입력설명
첫 번째 줄에 7개의 수가 주어진다.

▣ 출력설명
첫 번째 줄에 가장 작은 값을 출력한다.

▣ 입력예제 1
5 3 7 11 2 15 17

▣ 출력예제 1
2
```

<details>
<summary> 기본 세팅 </summary>

```html
<html>
  <head>
    <meta charset="UTF-8" />
    <title>출력결과</title>
  </head>
  <body>
    <script>
      function solution(arr) {
        let answer,
          min = Number.MAX_SAFE_INTEGER;

        return answer;
      }
      let arr = [5, 7, 1, 3, 2, 9, 20];
      console.log(solution(arr));
    </script>
  </body>
</html>
```

</details>

<details>
<summary> 내가 쓴 풀이 </summary>

```html
<!-- 실패 🥲 -->

<html>
  <head>
    <meta charset="UTF-8" />
    <title>출력결과</title>
  </head>
  <body>
    <script>
      function solution(arr) {
        let answer,
          min = Number.MAX_SAFE_INTEGER;
        console.log("배열의 길이:", arr.length);
        for (let i = 1; i <= arr.length; i++) {
          if (arr[i - 1] > arr[i]) min = arr[i];
          else min = arr[i - 1];
        }
        // 그다음 여기서 처음 가져온 값과 비교해서 해당 값이 비교값 보다 작으면 answer 에 저장

        if (min < answer) answer = min;
        console.log("answer: ", answer);

        return answer;
      }
      let arr = [5, 7, 1, 3, 2, 9, 20];
      console.log(solution(arr));
    </script>
  </body>
</html>
```

</details>

<details>
<summary> 선생님 풀이 보러 가기 </summary>

```html
<html>
  <head>
    <meta charset="UTF-8" />
    <title>출력결과</title>
  </head>
  <body>
    <script>
      function solution(arr) {
        let answer,
          min = Number.MAX_SAFE_INTEGER; // Number 객체의 .MAX_SAFE_INTEGER를 통해 integer 의 가장 큰 수가 저장된다.
        console.log("초기 min 객체:", min);
        for (let i = 0; i < arr.length; i++) {
          if (arr[i] < min) min = arr[i];
        }
        answer = min;
        return answer;
      }
      let arr = [5, 7, 1, 3, 2, 9, 20];
      console.log(solution(arr));
    </script>
  </body>
</html>
```

> 내장객체 사용하기

```html
<html>
  <head>
    <meta charset="UTF-8" />
    <title>출력결과</title>
  </head>
  <body>
    <script>
      function solution(arr) {
        // let answer= Math.min(arr);   // NaN : 인자로만(숫자) 넘겨줘야 한다.
        let answer = Math.min(...arr); // spread 연산자를 통해 인자들을 펼쳐준다. (arr[0], arr[1], ... arr[6])
        // let answer = Math.min.apply(null, arr);
        return answer;
      }
      let arr = [5, 7, 1, 3, 2, 9, 20];
      console.log(solution(arr));
    </script>
  </body>
</html>
```

</details>

<details>
<summary> 차이점은? </summary>

```
1. 배열의 길이만큼 for 문을 돌린다는 생각까지는 성공했으나, for 문 내부에서 값 비교하는 부분이 잘못됨
2. min = Number.MAX_SAFE_INTEGER 의 Number 내장 객체의 MAX_SAFE_INTEGER에 대한 개념이 없어서, 처음 초기화를 어떻게 해야 할 지 생각하지 못했던 것 같다.
```

</details>

## 홀수

```
7개의 자연수가 주어질 때, 이들 중 홀수인 자연수들을 모두 골라 그 합을 구하고, 고른 홀수들 중 최소값을 찾는 프로그램을 작성하세요.

예를 들어, 7개의 자연수 12, 77, 38, 41, 53, 92, 85가 주어지면 이들 중 홀수는 77, 41, 53, 85이므로 그 합은

77 + 41 + 53 + 85 = 256

이 되고,

41 < 53 < 77 < 85 이므로 홀수들 중 최소값은 41이 된다.

▣ 입력설명
첫 번째 줄에 자연수 7개가 주어진다. 주어지는 자연수는 100보다 작다. 홀수가 한 개 이상 반드시 존재한다.

▣ 출력설명
첫째 줄에 홀수들의 합을 출력하고, 둘째 줄에 홀수들 중 최소값을 출력한다.

▣ 입력예제 1
12 77 38 41 53 92 85

▣ 출력예제 1
256
41
```

<details>
<summary> 기본 세팅 </summary>

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

      arr = [12, 77, 38, 41, 53, 92, 85];
      console.log(solution(arr));
    </script>
  </body>
</html>
```

</details>

<details>
<summary> 내가 쓴 풀이 </summary>

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
        let odd = [];
        let min = Number.MAX_SAFE_INTEGER;
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
          if (arr[i] % 2 === 1) {
            odd.push(arr[i]);
          }
        }
        for (let k = 0; k < odd.length; k++) {
          if (odd[k] < min) min = odd[k];
        }
        for (let l = 0; l < odd.length; l++) {
          sum = sum + odd[l];
        }
        answer.push(sum);
        answer.push(min);
        return answer;
      }

      arr = [12, 77, 38, 41, 53, 92, 85];
      console.log(solution(arr));
    </script>
  </body>
</html>
```

</details>

<details>
<summary> 선생님 풀이 보러 가기 </summary>

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
        let sum = 0;
        let min = Number.MAX_SAFE_INTEGER;
        for (let x of arr) {
          if (x % 2 === 1) {
            sum += x; //sum=sum+1;
            if (x < min) min = x;
          }
        }
        answer.push(sum);
        answer.push(min);
        return answer;
      }

      arr = [12, 77, 38, 41, 53, 92, 85];
      console.log(solution(arr));
    </script>
  </body>
</html>

<!-- 
    '==' 과 '==='의 차이

    == > 값 비교
    === > 값 + 타입 비교

    하나로 통일하기만 하면 문제가 없음
    === 추천

 -->
```

</details>

<details>
<summary> 차이점은? </summary>

```
코드의 간소화를 위해서 if (홀수값 sum 구하기) 문 내부에서 if(홀수의 최소값 구하기)문을 다시 돌렸다.
```

</details>

## 10부제

```
서울시는 6월 1일부터 교통 혼잡을 막기 위해서 자동차 10부제를 시행한다. 자동차 10부제는 자동차 번호의 일의 자리 숫자와 날짜의 일의 자리 숫자가 일치하면 해당 자동차의 운행을 금 지하는 것이다. 예를 들어, 자동차 번호의 일의 자리 숫자가 7이면 7일, 17일, 27일에 운행하 지 못한다. 또한, 자동차 번호의 일의 자리 숫자가 0이면 10일, 20일, 30일에 운행하지 못한다.

여러분들은 일일 경찰관이 되어 10부제를 위반하는 자동차의 대수를 세는 봉사활동을 하려고 한다. 날짜의 일의 자리 숫자가 주어지고 7대의 자동차 번호의 끝 두 자리 수가 주어졌을 때 위반하는 자동차의 대수를 출력하는 프로그램을 작성하세요.

▣ 입력설명
첫 줄에는 날짜의 일의 자리 숫자가 주어지고 두 번째 줄에는 7대의 자동차 번호의 끝 두 자 리 숫자가 주어진다.

▣ 출력설명
주어진 날짜와 자동차의 일의 자리 숫자를 보고 10부제를 위반하는 차량의 대수를 출력합니다.

▣ 입력예제 1
3
25 23 11 47 53 17 33

▣ 출력예제 1
3

▣ 입력예제 2
0
12 20 54 30 87 91 30

▣ 출력예제 2
3
```

<details>
<summary> 기본 세팅 </summary>

```html
<html>
  <head>
    <meta charset="UTF-8" />
    <title>출력결과</title>
  </head>
  <body>
    <script>
      function solution(day, arr) {
        let answer = 0;

        return answer;
      }

      arr = [25, 23, 11, 47, 53, 17, 33];
      console.log(solution(3, arr));
    </script>
  </body>
</html>
```

</details>

<details>
<summary> 내가 쓴 풀이 </summary>

```html
<html>
  <head>
    <meta charset="UTF-8" />
    <title>출력결과</title>
  </head>
  <body>
    <script>
      function solution(day, arr) {
        let answer = 0;
        // 각각 배열을 돌면서 day를 10으로 나눴을 때 해당하는 arr[i] 원소의 값과 같으면 answer를 증가
        for (let value of arr) {
          if (value % 10 == day) answer++;
        }
        return answer;
      }

      arr = [25, 23, 11, 47, 53, 17, 33];
      console.log(solution(3, arr));
    </script>
  </body>
</html>
```

</details>

<details>
<summary> 선생님 풀이 보러 가기 </summary>

```html
<html>
  <head>
    <meta charset="UTF-8" />
    <title>출력결과</title>
  </head>
  <body>
    <script>
      function solution(day, arr) {
        let answer = 0;
        for (let x of arr) {
          if (x % (10 === day)) answer++;
        }
        return answer;
      }

      arr = [25, 23, 11, 47, 53, 17, 33];
      console.log(solution(3, arr));
    </script>
  </body>
</html>
```

</details>

<details>
<summary> 차이점은? </summary>

```
없음, 예~
```

</details>

<details>
<summary> 레퍼런스(참고사항) </summary>

<a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/for...of">MDN, for of 문</a>
<a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach">MDN, for each문</a>

</details>

## 일곱 난쟁이

```
왕비를 피해 일곱 난쟁이들과 함께 평화롭게 생활하고 있던 백설공주에게 위기가 찾아왔다. 일과를 마치고 돌아온 난쟁이가 일곱 명이 아닌 아홉 명이었던 것이다.
아홉 명의 난쟁이는 모두 자신이 "백설 공주와 일곱 난쟁이"의 주인공이라고 주장했다. 뛰어난 수학적 직관력을 가지고 있던 백설공주는, 다행스럽게도 일곱 난쟁이의 키의 합이 100이 됨을 기억해 냈다.

아홉 난쟁이의 키가 주어졌을 때, 백설공주를 도와 일곱 난쟁이를 찾는 프로그램을 작성하시오.

▣ 입력설명
아홉 개의 줄에 걸쳐 난쟁이들의 키가 주어진다. 주어지는 키는 100을 넘지 않는 자연수이며, 아홉 난쟁이의 키는 모두 다르며, 가능한 정답이 여러 가지인 경우에는 아무거나 출력한다.

▣ 출력설명
입력된 순서대로 일곱 난쟁이의 키를 출력한다.

▣ 입력예제 1
20 7 23 19 10 15 25 8 13

▣ 출력예제 1
20 7 23 19 10 8 13
```

<details>
<summary> 기본 세팅 </summary>

```html
<html>
  <head>
    <meta charset="UTF-8" />
    <title>출력결과</title>
  </head>
  <body>
    <script>
      function solution(arr) {
        let answer = arr;

        return answer;
      }

      let arr = [20, 7, 23, 19, 10, 15, 25, 8, 13];
      console.log(solution(arr));
    </script>
  </body>
</html>
```

</details>

<details>
<summary> 내가 쓴 풀이 </summary>

```html
<!-- 실패, 무슨 소리인지 접근 방법을 모르겠다. -->
<html>
  <head>
    <meta charset="UTF-8" />
    <title>출력결과</title>
  </head>
  <body>
    <script>
      function solution(arr) {
        let answer = arr;
        let sum;
        const jogun = 100;
        // 아홉 난쟁이들의 키의 합을 구함
        sum = answer.reduce(function (x, i) {
          return x + i;
        });
        console.log("sum:", sum);
        if (sum !== jogun) {
          // answer - 두 난쟁이의 키의 합 = jogun
          arr = arr.filter(function (v, i) {
            // 난쟁이의 합(sum)이 조건(100)과 같도록 필터링
            return (sum = 100);
          });
          console.log(sum);
        }

        return answer;
      }

      let arr = [20, 7, 23, 19, 10, 15, 25, 8, 13];
      console.log(solution(arr));
    </script>
  </body>
</html>
```

</details>

<details>
<summary> 선생님 풀이 보러 가기 </summary>

```
얍
```

</details>

<details>
<summary> 차이점은? </summary>

```
얍
```

</details>

## A를 #으로

```
대문자로 이루어진 영어단어가 입력되면 단어에 포함된 ‘A'를 모두 ’#‘으로 바꾸어 출력하는 프로그램을 작성하세요.

▣ 입력설명
첫 번째 줄에 문자열이 입력된다.

▣ 출력설명
첫 번째 줄에 바뀐 단어를 출력한다.

▣ 입력예제 1 BANANA

▣ 출력예제 1 B#N#N#
```

<details>
<summary> 기본 세팅 </summary>

```html
<html>
  <head>
    <meta charset="UTF-8" />
    <title>출력결과</title>
  </head>
  <body>
    <script>
      function solution(s) {
        let answer = s;

        return answer;
      }

      let str = "BANANA";
      console.log(solution(str));
    </script>
  </body>
</html>
```

</details>

<details>
<summary> 내가 쓴 풀이 </summary>

```html
<!-- 실패 🥲 -->
<html>
  <head>
    <meta charset="UTF-8" />
    <title>출력결과</title>
  </head>
  <body>
    <script>
      function solution(s) {
        let answer = s;

        console.log("prev", answer); // BANANA 정상 출력
        // answer = String.replace(/A/g, "#"); 도 안됨
        answer.replace(/A/g, "#");
        // 안 바뀜, answer가 string인 것을 인식을 못하는 것 같음

        return answer;
      }

      let str = "BANANA";
      console.log(solution(str));
    </script>
  </body>
</html>
```

</details>

<details>
<summary> 선생님 풀이 보러 가기 </summary>

```html
<html>
  <head>
    <meta charset="UTF-8" />
    <title>출력결과</title>
  </head>
  <body>
    <script>
      function solution(s) {
        let answer = "";
        for (let x of s) {
          console.log(x); // for of 문은 문자도 배열과 같이 탐색이 된다.
          if (x == "A") answer += "#";
          else answer += x;
        }
        return answer;
      }

      let str = "BANANA";
      console.log(solution(str));
    </script>
  </body>
</html>
```

> string의 메서드 replace 사용하기

```html
<html>
  <head>
    <meta charset="UTF-8" />
    <title>출력결과</title>
  </head>
  <body>
    <script>
      function solution(s) {
        let answer = s;
        /* s = s.replace(/A/g, "#"); >> x 
        why? 문자열은 주소를 참조하는 것이 아닌 값이 복사되는 것이다
        s는 s 대로 answer와 다른 고유한 주소를 가지고 있을 것
        */
        answer = answer.replace(/A/g, "#"); // replace를 사용하기 위해서는 얕은 복사가 필요하다
        return answer;
      }

      let str = "BANANA";
      console.log(solution(str));
    </script>
  </body>
</html>
```

</details>

<details>
<summary> 차이점은? </summary>

```
값을 재 할당하기 위한 얕은 복사, 깊은 복사 등 해당 개념이 부족한 것 같다
```

</details>

## 문자 찾기

```
한 개의 문자열을 입력받고, 특정 문자를 입력받아 해당 특정문자가 입력받은 문자열에 몇 개 존재하는지 알아내는 프로그램을 작성하세요.

문자열의 길이는 100을 넘지 않습니다.

▣ 입력설명
첫 줄에 문자열이 주어지고, 두 번째 줄에 문자가 주어진다.

▣ 출력설명
첫 줄에 해당 문자의 개수를 출력한다.

▣ 입력예제 1
COMPUTERPROGRAMMING R

▣ 출력예제 1
3
```

<details>
<summary> 기본 세팅 </summary>

```html
<html>
  <head>
    <meta charset="UTF-8" />
    <title>출력결과</title>
  </head>
  <body>
    <script>
      function solution(s, t) {
        let answer;

        return answer;
      }
      let str = "COMPUTERPROGRAMMING";
      console.log(solution(str, "R"));
    </script>
  </body>
</html>
```

</details>

<details>
<summary> 내가 쓴 풀이 </summary>

```html
<html>
  <head>
    <meta charset="UTF-8" />
    <title>출력결과</title>
  </head>
  <body>
    <script>
      function solution(s, t) {
        let answer;
        let count = 0;
        for (v of s) {
          if (v === t) count++;
        }
        answer = count;
        return answer;
      }

      let str = "COMPUTERPROGRAMMING";
      console.log(solution(str, "R"));
    </script>
  </body>
</html>
```

</details>

<details>
<summary> 선생님 풀이 보러 가기 </summary>

```html
<html>
  <head>
    <meta charset="UTF-8" />
    <title>출력결과</title>
  </head>
  <body>
    <script>
      function solution(s, t) {
        let answer = 0;
        for (let x of s) {
          if (x === t) answer++;
        }
        return answer;
      }

      let str = "COMPUTERPROGRAMMING";
      console.log(solution(str, "R"));
    </script>
  </body>
</html>
```

> split 사용하기

```html
<html>
  <head>
    <meta charset="UTF-8" />
    <title>출력결과</title>
  </head>
  <body>
    <script>
      function solution(s, t) {
        let answer = s.split(t);
        console.log("splited answer: ", answer);
        // ["COMPUTE", "P", "OG", "AMMING"] 이기 때문에 맨 뒤의 문자열에는 R이 포함되어 있지 않아 -1을 해준다
        answer = answer.length - 1;
        console.log("answer.length: ", answer);
        return answer;
      }

      let str = "COMPUTERPROGRAMMING";
      console.log(solution(str, "R"));
    </script>
  </body>
</html>
```

</details>

<details>
<summary> 차이점은? </summary>

```
x, split의 활용법을 배웠으나, 개수를 구하는 식에서는 후위 증감 연산자(++)를 통해 계산하는 것이 더욱 효율적으로 보임
```

</details>

## 대문자 찾기

```
한 개의 문자열을 입력받아 해당 문자열에 알파벳 대문자가 몇 개 있는지 알아내는 프로그램 을 작성하세요.

▣ 입력설명
첫 줄에 문자열이 입력된다. 문자열의 길이는 100을 넘지 않습니다.

▣ 출력설명
첫 줄에 대문자의 개수를 출력한다.

▣ 입력예제 1
KoreaTimeGood

▣ 출력예제 1
3
```

<details>
<summary> 기본 세팅 </summary>

```html
<html>
  <head>
    <meta charset="UTF-8" />
    <title>출력결과</title>
  </head>
  <body>
    <script>
      function solution(s) {
        let answer;

        return answer;
      }

      let str = "KoreaTimeGood";
      console.log(solution(str));
    </script>
  </body>
</html>
```

</details>

<details>
<summary> 내가 쓴 풀이 </summary>

> 배열의 길이를 리턴하기

```html
<html>
  <head>
    <meta charset="UTF-8" />
    <title>출력결과</title>
  </head>
  <body>
    <script>
      function solution(s) {
        let answer;
        let arr = [];
        var regex = /[A-Z]/g;
        console.log("s:", s);
        for (let v of s) {
          if ((v = v.match(regex))) arr.push(v);
        }
        console.log(arr.length);
        answer = arr.length;
        return answer;
      }

      let str = "KoreaTimeGood";
      console.log(solution(str));
    </script>
  </body>
</html>
```

> count 변수로 카운트하기

```html
<html>
  <head>
    <meta charset="UTF-8" />
    <title>출력결과</title>
  </head>
  <body>
    <script>
      function solution(s) {
        let answer;
        let count = 0;
        var regex = /[A-Z]/g;
        console.log("s:", s);
        for (let v of s) {
          if ((v = v.match(regex))) count++;
        }
        answer = count;
        return answer;
      }

      let str = "KoreaTimeGood";
      console.log(solution(str));
    </script>
  </body>
</html>
```

</details>

<details>
<summary> 선생님 풀이 보러 가기 </summary>

```html
<html>
  <head>
    <meta charset="UTF-8" />
    <title>출력결과</title>
  </head>
  <body>
    <script>
      function solution(s) {
        let answer = 0;
        for (let x of s) {
          if (x === x.toUpperCase()) answer++;
        }
        return answer;
      }
      let str = "KoreaTimeGood";
      console.log(solution(str));
    </script>
  </body>
</html>
```

> 아스키 코드로 확인해보기

```html
<html>
  <head>
    <meta charset="UTF-8" />
    <title>출력결과</title>
  </head>
  <body>
    <script>
      function solution(s) {
        let answer = 0;
        for (let x of s) {
          let num = x.charCodeAt();
          if (num >= 65 && num <= 90) answer++;
        }
        return answer;
      }
      let str = "KoreaTimeGood";
      console.log(solution(str));
    </script>
  </body>
</html>
```

</details>

<details>
<summary> 차이점은? </summary>

```
    대문자 [A-Z] 아스키 코드 65 ~ 90
    소문자 [a-z] 아스키 코드 97 ~ 122
```

</details>

## 대문자로 통일하기

```
대문자와 소문자가 같이 존재하는 문자열을 입력받아 대문자로 모두 통일하여 문자열을 출력 하는 프로그램을 작성하세요.

▣ 입력설명
첫 줄에 문자열이 입력된다. 문자열의 길이는 100을 넘지 않습니다.

▣ 출력설명
첫 줄에 대문자로 통일된 문자열이 출력된다.

▣ 입력예제 1
ItisTimeToStudy

▣ 출력예제 1
ITISTIMETOSTUDY
```

<details>
<summary> 기본 세팅 </summary>

```html
<html>
  <head>
    <meta charset="UTF-8" />
    <title>출력결과</title>
  </head>
  <body>
    <script>
      function solution(s) {
        let answer = s;
      }
      let str = "ItisTimeToStudy";
      console.log(solution(str));
    </script>
  </body>
</html>
```

</details>

<details>
<summary> 내가 쓴 풀이 </summary>

```html
<html>
  <head>
    <meta charset="UTF-8" />
    <title>출력결과</title>
  </head>
  <body>
    <script>
      function solution(s) {
        let answer = s;
        answer = answer.toUpperCase();
        return answer;
      }
      let str = "ItisTimeToStudy";
      console.log(solution(str));
    </script>
  </body>
</html>
```

</details>

<details>
<summary> 선생님 풀이 보러 가기 </summary>

```html
<html>
  <head>
    <meta charset="UTF-8" />
    <title>출력결과</title>
  </head>
  <body>
    <script>
      function solution(s) {
        let answer = "";
        for (let x of s) {
          if (x === x.toLowerCase()) {
            answer += x.toUpperCase();
          } else answer += x;
        }

        return answer;
      }
      let str = "ItisTimeToStudy";
      console.log(solution(str));
    </script>
  </body>
</html>
```

</details>

<details>
<summary> 차이점은? </summary>

```
오히려 나의 답이 더 간소화된 것으로 보일 수 있다
선생님은 소문자에 대해서 대문자로 바꿔주고 기존 대문자는 그대로 유지하는 방법을 사용하였음
```

</details>

## 대소문자 변환

```
대문자와 소문자가 같이 존재하는 문자열을 입력받아 대문자는 소문자로 소문자는 대문자로 변환하여 출력하는 프로그램을 작성하세요.

▣ 입력설명
첫 줄에 문자열이 입력된다. 문자열의 길이는 100을 넘지 않습니다.

▣ 출력설명
첫 줄에 대문자는 소문자로, 소문자는 대문자로 변환된 문자열을 출력합니다.

▣ 입력예제 1
StuDY

▣ 출력예제 1
sTUdy
```

<details>
<summary> 기본 세팅 </summary>

```html

```

</details>

<details>
<summary> 내가 쓴 풀이 </summary>

```

```

</details>

<details>
<summary> 선생님 풀이 보러 가기 </summary>

```html

```

</details>

<details>
<summary> 차이점은? </summary>

```

```

</details>

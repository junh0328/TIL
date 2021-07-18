# 문자열 탐색

## 확인하는 법

1. 해당 섹션 다운로드 또는 html 코드 복사
2. vs code 확장프로그램 live server 실행
3. 콘솔창을 통해 결과 확인

## 목차

- [회문 문자열](#회문-문자열)
- [유효한 팰린드롬](#유효한-팰린드롬)
- [숫자만 추출](#숫자만-추출)
- [정리](#정리)

## 회문 문자열

```
앞에서 읽을 때나 뒤에서 읽을 때나 같은 문자열을 회문 문자열이라고 합니다.
문자열이 입력되면 해당 문자열이 회문 문자열이면 "YES", 회문 문자열이 아니면 “NO"를 출력 하는 프로그램을 작성하세요.
단 회문을 검사할 때 대소문자를 구분하지 않습니다.

▣ 입력설명
첫 줄에 정수 길이 100을 넘지 않는 공백이 없는 문자열이 주어집니다.

▣ 출력설명
첫 번째 줄에 회문 문자열인지의 결과를 YES 또는 NO로 출력합니다.

▣ 입력예제 1
gooG

▣ 출력예제 1
YES

```

<details>
<summary>예제 코드 보기</summary>

```
1. 대소문자를 구분하지 않으므로 모든 문자열을 대문자 또는 소문자로 재할당할 것
2. for 문을 돌 때, 맨 첫번째 요소[i] 값과, 마지막 요소[?]의 값을 비교할 것
3. 반복문을 돌려서 하나라도 다를 시에 answer를 NO로 바꾸고 탈출
4. 다르다면 회문이 아닌 것이다
5. 문자열의 길이가 짝수일 경우와 홀수일 경우를 생각해보자
```

```html
<html>
  <head>
    <meta charset="UTF-8" />
    <title>출력결과</title>
  </head>
  <body>
    <script>
      function solution(s) {
        let answer = "YES";

        return answer;
      }

      let str = "gooG";
      console.log(solution(str));
    </script>
  </body>
</html>
```

</details>

<details>
<summary>내 코드 보기</summary>

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>정답</title>
  </head>
  <body>
    <script>
      function solution(str) {
        let answer = "YES";
        let n = str.length;
        let lowerStr = str.toLowerCase();

        for (let i = 0; i < n / 2; i++) {
          if (lowerStr[i] !== lowerStr[n - 1 - i]) {
            answer = "NO";
            break;
          }
        }
        return answer;
      }
      let str = "gocg";
      console.log(solution(str));
    </script>
  </body>
</html>
```

</details>

<details>
<summary>선생님 코드 보기</summary>

> for문과 if문 만을 통해서 걸러내기

```html
<html>
  <head>
    <meta charset="UTF-8" />
    <title>출력결과</title>
  </head>
  <body>
    <script>
      function solution(s) {
        let answer = "YES";
        s = s.toLowerCase();
        let len = s.length;

        for (let i = 0; i < Math.floor(len / 2); i++) {
          if (s[i] !== s[len - 1 - i]) {
            answer = "NO";
          }
        }
        return answer;
      }
      let str = "goag";
      console.log(solution(str));
    </script>
  </body>
</html>
```

> String prototype (split, reverse, join) 사용하기

```
console.log(s.split("")) > (4) ["g","o","o","g"]
console.log(s.split("").reverse()) > (4) ["g","o","o","g"]
console.log(s.split("").reverse().join("")) > goog

문자열은 원시 타입으로 불변성을 지닌다. s.xxx를 하더라도 변수 s의 값은 변하지 않는다.
따라서 해당 메서드를 통해 만든 값과 변수 s를 비교하여 다르다면 "NO"를 리턴하는 방법이다
```

```html
<html>
  <head>
    <meta charset="UTF-8" />
    <title>출력결과</title>
  </head>
  <body>
    <script>
      function solution(s) {
        let answer = "YES";
        s = s.toLowerCase();

        if (s.split("").reverse().join("") != s) return "NO";
        return answer;
      }
      let str = "gooG";
      console.log(solution(str));
    </script>
  </body>
</html>
```

</details>

## 유효한 팰린드롬

```
앞에서 읽을 때나 뒤에서 읽을 때나 같은 문자열을 팰린드롬이라고 합니다.
문자열이 입력되면 해당 문자열이 팰린드롬이면 "YES", 아니면 “NO"를 출력하는 프로그램을 작성하세요.
단 회문을 검사할 때 알파벳만 가지고 회문을 검사하며, 대소문자를 구분하지 않습니다. 알파벳 이외의 문자들의 무시합니다.

▣ 입력설명
첫 줄에 정수 길이 100을 넘지 않는 공백이 없는 문자열이 주어집니다.

▣ 출력설명
첫 번째 줄에 팰린드롬인지의 결과를 YES 또는 NO로 출력합니다.

▣ 입력예제 1
found7, time: study; Yduts; emit, 7Dnuof

▣ 출력예제 1
YES
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
      function solution(s) {
        let answer = "YES";

        return answer;
      }
      let str = "found7, time: study; Yduts; emit, 7Dnuof";
      console.log(solution(str));
    </script>
  </body>
</html>
```

</details>

<details>
<summary>내 코드 보기</summary>

```html
<!-- 실패 -->

<!DOCTYPE html>
<head>
  <title>Document</title>
</head>
<body>
  <script>
    function solution(arr){
      let answer = 'YES';
      let s = arr;
      let answerArr = []
      const regex = /a-z/g

      for(let a of s){
        // 1차적으로 대문자를 없앤다.
        a = a.toLowerCase();
        answerArr.push(a);
      }
      console.log(answerArr);

      return answer;
    }
    let arr = ['found7', 'time:', 'study;', 'Yduts;', 'emit,', '7Dnuof'];
    console.log(solution(arr));

  </script>
</body>
</html>
```

</details>

<details>
<summary>선생님 코드 보기</summary>

```

  1. 대문자를 소문자로
  2. String.prototype.replace()를 통해 [a-z]가 아니라면, '' 빈 문자열로 바꿔라
  3. 뭐든지 배열로 해결하려고 생각하지 않아도 된다.


  console.log(s.split(""));
  // (28) ["f", "o", "u", "n", "d", "t", "i", "m", "e", "s", "t", "u", "d", "y", "y", "d", "u", "t", "s", "e", "m", "i", "t", "d", "n", "u", "o", "f"]

  console.log(s.split("").reverse());
  // 28) ["f", "o", "u", "n", "d", "t", "i", "m", "e", "s", "t", "u", "d", "y", "y", "d", "u", "t", "s", "e", "m", "i", "t", "d", "n", "u", "o", "f"]

  console.log(s.split("").reverse().join(""));
  // foundtimestudyydutsemitdnuof

```

```html
<html>
  <head>
    <meta charset="UTF-8" />
    <title>출력결과</title>
  </head>
  <body>
    <script>
      function solution(s) {
        let answer = "YES";
        s = s.toLowerCase().replace(/^[a-z]/g, "");

        if (s.split("").reverse().join("") !== s) return "NO";
        return answer;
      }
      let str = "found7, time: study; Yduts; emit, 7Dnuof";
      console.log(solution(str));
    </script>
  </body>
</html>
```

</details>

## 숫자만 추출

```
문자와 숫자가 섞여있는 문자열이 주어지면 그 중 숫자만 추출하여 그 순서대로 자연수를 만 듭니다.
만약 “tge0a1h205er”에서 숫자만 추출하면 0, 1, 2, 0, 5이고 이것을 자연수를 만들면 1205 이 됩니다.
추출하여 만들어지는 자연수는 100,000,000을 넘지 않습니다.

▣ 입력설명
첫 줄에 숫자가 썩인 문자열이 주어집니다. 문자열의 길이는 50을 넘지 않습니다.

▣ 출력설명
첫 줄에 자연수를 출력합니다.

▣ 입력예제 1
g0en2T0s8eSoft

▣ 출력예제 1
208
```

<details>
<summary>예제 코드 보기</summary>

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Document</title>
  </head>
  <body>
    <script>
      function solution(s) {
        let answer;

        return answer;
      }
      let str = "g0en2T0s8eSoft";
      console.log(solution(str));
    </script>
  </body>
</html>
```

</details>

<details>
<summary>내 코드 보기</summary>

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Document</title>
  </head>
  <body>
    <script>
      function solution(s) {
        let answer;
        s = s.toLowerCase().replace(/[a-z]/g, "");
        answer = Number(s);
        // answer = parseInt(s);

        return answer;
      }
      let str = "g0en2T0s8eSoft";
      console.log(solution(str));
    </script>
  </body>
</html>
```

</details>

<details>
<summary>선생님 코드 보기</summary>

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Document</title>
  </head>
  <body>
    <script>
      function solution(str) {
        let answer = "";
        for (let x of str) {
          if (!isNaN(x)) answer += x;
          // isNaN (숫자가 아니니?) > true 일 경우 숫자가 아닌 경우이므로 !isNaN으로 숫자만 추출한다.
        }
        answer = parseInt(answer);
        return answer;
      }
      let str = "g0en2T0s8eSoft";
      console.log(solution(str));
    </script>
  </body>
</html>
```

</details>

## 가장 짧은 문자열

```
한 개의 문자열 s와 문자 t가 주어지면 문자열 s의 각 문자가 문자 t와 떨어진 최소거리를 출 력하는 프로그램을 작성하세요.

▣ 입력설명
첫 번째 줄에 문자열 s와 문자 t가 주어진다. 문자열과 문자는 소문자로만 주어집니다. 문자열의 길이는 100을 넘지 않는다.

▣ 출력설명
첫 번째 줄에 각 문자열 s의 각 문자가 문자 t와 떨어진 거리를 순서대로 출력한다.

▣ 입력예제 1
teachermode e

▣ 출력예제 1
10121012210
```

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

## 문자열 압축

```
알파벳 대문자로 이루어진 문자열을 입력받아 같은 문자가 연속으로 반복되는 경우 반복되는 문자 바로 오른쪽에 반복 횟수를 표기하는 방법으로 문자열을 압축하는 프로그램을 작성하시 오. 단 반복횟수가 1인 경우 생략합니다.

▣ 입력설명
첫 줄에 문자열이 주어진다. 문자열의 길이는 100을 넘지 않는다.

▣ 출력설명
첫 줄에 압축된 문자열을 출력한다.

▣ 입력예제 1
KKHSSSSSSSE

▣ 출력예제 1
K2HS7E
```

<details>
<summary>예제 코드 보기</summary>

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Document</title>
  </head>
  <body>
    <script>
      function solution(s) {
        let answer = "";

        return answer;
      }
      let str = "KKHSSSSSSSE";
      console.log(solution(str));
    </script>
  </body>
</html>
```

</details>

<details>
<summary>내 코드 보기</summary>

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Document</title>
  </head>
  <body>
    <script>
      function solution(s) {
        let answer = "";
        let cnt = 1;
        // 각각의 값을 담는다. let cnt = [1,1,1,1];
        for (let i = 0; i < s.length; i++) {
          if (s[i] === s[i + 1]) {
            cnt++;
          } else {
            // 문자열이 달라질 때, (K > H) 앞에서 다룬 s[i]와 cnt 값을 answer에 넣어준다.
            answer += s[i] + cnt;
            cnt = 1;
          }
        }
        answer = answer.replace(/[1]/g, "");

        return answer;
      }
      let str = "KKHSSSSSSSE";
      console.log(solution(str));
    </script>
  </body>
</html>
```

</details>

<details>
<summary>선생님 코드 보기</summary>

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Document</title>
  </head>
  <body>
    <script>
      function solution(s) {
        let answer = "";
        let cnt = 1;
        s = s + " ";
        for (let i = 0; i < s.length - 1; i++) {
          if (s[i] === s[i + 1]) cnt++;
          else {
            answer += s[i];
            if (cnt > 1) answer += String(cnt);
            cnt = 1;
          }
        }

        return answer;
      }
      let str = "KKHSSSSSSSE";
      console.log(solution(str));
    </script>
  </body>
</html>
```

</details>

## 정리

( ) 사용한 함수들
(✔️) 다시 보면 좋은 함수들

```

String
String.prototype.split()
String.prototype.reverse()
String.prototype.join()
String.prototype.replace()

정규표현식

```

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

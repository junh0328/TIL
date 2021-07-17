# 문자열 탐색

## 확인하는 법

1. 해당 섹션 다운로드 또는 html 코드 복사
2. vs code 확장프로그램 live server 실행
3. 콘솔창을 통해 결과 확인

## 목차

- [회문 문자열](#회문-문자열)
- [유효한 팰린드롬](#유효한-팰린드롬)
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

# 기본 문제 풀이

## 목차

- [세 수 중 최솟값](#세-수-중-최솟값)
- [삼각형 판별하기](#삼각형-판별하기)

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

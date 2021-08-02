// /* property shorthand (단축 속성명) */
// var a = "foo";
// var b = 42;
// var c = {};

// console.log("a:", a, "b:", b, "c:", c);

// var o = {
//   a: a,
//   b: b,
//   c: c,
// };

// console.log("o:", o);

// // 프로퍼티 {key: value}에서 해당 key , value의 값이 일치한다면 단축 속섬영을 사용할 수 있습니다.
// // 다음과 같이 key값을 변수명으로 생성할 수 있습니다.

// var o2 = { a, b, c };

// console.log("o2:", o2);

// /* 그럼 어떻게 사용할 수 있을까요? */

function useHeader() {
  const teamName = "MIC-TEAM";

  return { teamName };
}

console.log(useHeader());

// const 키워드로 선언된 teamName이라는 변수는 string 타입의 원시값 MIC-TEAM을 가지고 있습니다.

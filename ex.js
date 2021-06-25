// function barklately() {
//   setTimeout(() => {
//     console.log("멍멍");
//   }, 1000);
// }

// barklately().then(() => {
//   console.log("done it!");
// });

// setTimeout(() => {
//   bark("바우와우");
// }, 0);

// bark("와우");

// function bark(a) {
//   console.log(a);
// }

// CallMe는 안됨
// getData는 됨

/*
setTimeout() 콜백을 return 될 Promise 반환 값보다 위에 두면 resolve 되지 않습니다.
*/

const wrongCallMe = () => {
  setTimeout(() => {
    return new Promise(function (resolve, reject) {
      var data = "와우와우왕";
      resolve(data);
    }, 300);
  });
};

const callMe = () => {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      var data = "와우와우왕";
      resolve(data);
    }, 300);
  });
};

wrongCallMe().then((resolvedData) => {
  console.log(resolvedData);
});

const getData = () => {
  return new Promise(function (resolve, reject) {
    var data = 100;
    resolve(data);
  });
};

// resolve()의 결과 값 data를 resolvedData로 받음
getData().then((resolvedData) => {
  console.log(resolvedData); // 100
});

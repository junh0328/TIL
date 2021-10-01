function solution(board, moves) {
  let answer = 0;
  let stack = [];

  moves.forEach((pos) => {
    for (let i = 0; i < board.length; i++) {
      if (board[i][pos - 1] !== 0) {
        let tmp = board[i][pos - 1];
        board[i][pos - 1] = 0;
        if (tmp === stack[stack.length - 1]) {
          stack.pop();
          answer += 2;
        } else stack.push(tmp);
        break;
      }
    }
  });

  console.log(answer);
  return answer;
}

let board = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];

let moves = [1, 5, 3, 5, 1, 2, 1, 4];

solution(board, moves);

/*

moves의 각 원소를 바탕으로 돌아야 하므로 moves 배열에 대해서 forEach 문을 돈다

임시로 뽑은 값을 저장할 변수 tmp를 선언할 때, pos는 자바스크립트의 인덱스 기준이 아니므로 -1을 해준다

값을 먼저 tmp에 저장한 후에, 해당 자리에 있던 값을 0으로 재할당해야 한다

바로 stack에 넣기 전에 먼저 stack의 제일 위에 우리가 뽑은 임시 값인 tmp와 같은 값이 존재하는 지 조건식을 단다

만약 동일한 요소가 있을 경우 스택에서 해당 요소를 빼고 answer를 2개 더한다 (넣으려는 요소 + 안에 있는 요소)

만약 동일한 요소가 없을 경우에는 스택에 넣어준다(push)

값을 뽑은 후에 break 문을 걸지 않을 경우 ① [3,0] = 4 ② [4,0] = 3을 한번에 뽑을 수 있다

따라서 반복문이 성립되면 더이상 진행하지 안도록 break를 걸어준다
*/

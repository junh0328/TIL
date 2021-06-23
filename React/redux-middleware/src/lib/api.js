import axios from "axios";

// case 1 결과를 변수에 할당하고 변수를 리턴
export const getPostAPI = (id) => {
  let result = axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return result;
};

/*
case 2 리턴하기
export const getPostAPI = (id) => {
  return axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
};
*/

/*
case 3 화살표 함수의 중괄호와 리턴 생략
export const getPostAPI = (id) => axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
*/

export const getUsersAPI = (id) => {
  return axios.get(`https://jsonplaceholder.typicode.com/users/`);
};

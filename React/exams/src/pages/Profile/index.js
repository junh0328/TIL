import React from "react";
import { withRouter } from "react-router-dom";
import WithRouterSample from "../WithRouterSample";

const data = {
  leejunhee: {
    name: "이준희",
    description: "리액트를 좋아하는 개발자",
  },
  gildong: {
    name: "홍길동",
    description: "고전 소설 홍길동전의 주인공",
  },
};

const Profile = ({ match }) => {
  const { username } = match.params;
  console.log("match: ", match);
  console.log("match.params ", match.params);
  console.log("match.params.username: ", username);
  const profile = data[username];
  if (!profile) {
    return <div>존재하지 않는 사용자입니다.</div>;
  }
  return (
    <div>
      <h3>
        {username}({profile.name})
      </h3>
      <p>{profile.description}</p>
      <WithRouterSample />
    </div>
  );
};

export default withRouter(Profile);

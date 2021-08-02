# 잔기술 모음집

## 들어가며

<p>이 readme에는 프로젝트 진행 중에 React 개념에 넣기에는 애매한 tips(이런 상황에서는 이렇게 해보면 어떨까?)를 적어보았습니다.</p>

## 목차

- [첫 번째 useState로 막대 그래프 비율 관리하기](#첫-번째-useState로-막대-그래프-비율-관리하기)
- [두 번째 잊지 말자, useCallback 상황 소개](#두-번째-잊지-말자,-useCallback-상황-소개)
- [세 번째 ES6 property-shorthand를 사용하기](#세-번째-ES6-property-shorthand를-사용하기)

## 첫 번째 useState로 막대 그래프 비율 관리하기

<p>지난 주말 (6월 27일) 회의를 통해서 현재 만들고 있는 프로젝트의 변경 사항에 대해 논의 했습니다. 따로 세부적으로 기획을 하거나 디자인을 한 것이 아닌, 타깃 사이트를 잡고 진행한 프로젝트였기 때문에 큰 문제가 없이 빨리 끝낼 수 있을 것이라 생각했지만 마음처럼 쉽지 않았다. 우리만의 무언가를 보여주기 위해서 백엔드 개발자인 진수님이 순수 figma를 작성하여 '이런 식으로 해보면 어떨까요..?' 라는 주제를 던져 주셨다. </p>

<img width="600" src="./images/1.png" alt="초기 피그마 디자인"/>

<p>너무 타깃 사이트를 따라 가기만 바빠서 생각하지 못했던 부분인데, 이를 우리 프로젝트에 추가하기로 결정하였지만, 생각보다 꽤 까다로운 부분이 모여있었다. 그래서 바로 개발부터 들어가는 것이 아닌 생각을 한 번 정리하고 들어가는 방법을 선택하였다. 예전에는 잘 못느꼈는데 계속 복잡한 작업을 하다보니 이러한 방식이 더 개발에 효율적이라고 느껴진다.</p>

<img width="600" src="./images/2.jpeg" alt="피그마 분석본">

> 로직은 다음과 같다

1. 음료에 해당하는 버튼 클릭, 리뷰 작성
2. 가게 정보를 비롯한 사용자 input (선택한 음료, 리뷰)를 서버에 저장 (post 요청)
3. 이를 바탕으로 변경 시, reducer에서 감지하고 review list를 업데이트 (get 요청)
4. 막대 그래프를 통해 비율과 해당하는 비율 표시하기
5. 기타 반응형 작업

<p>우선 form 태그와 관련된 DOM 이벤트도 안 써본지 엄청 오래 되었고, 리액트와 타입스크립트 문법을 배우면서 등한시 했던 부분이라 까다롭더라도 한 번 해보고 싶었다</p>

> 1,2 카테고리를 선택하고 코멘트와 함께 데이터를 보내는 로직

```js
const Store = () => {
  // 카테고리 관리
  const [inputStatus, setInputStatus] = useState("");
  // 라우팅을 통해 파라미터로 전달받는 가게 이름(title과 가게 고유id)
  const { title, id } = useParams();
  // 사용자 입력 input을 관리한 레퍼런스
  const commentRef = useRef();

  // 카테고리 선택을 위한 함수
  const handleClickRadioButton = useCallback((radioBtnName) => {
    setInputStatus(radioBtnName);
  }, []);

  // onSubmit 관련 함수
  const onSubmitForm = useCallback(
    (e) => {
      e.preventDefault();
      const comment = commentRef.current;
      if (comment.value.trim() === "" || inputStatus === "") {
        alert("게시글을 입력 또는 카테고리 선택을 완료해야 합니다");
        comment.focus();
        return;
      }
      alert(
        `가게id: ${id} \n가게이름: ${title}\n커멘트: ${
          comment.value
        }\n카테고리: ${inputStatus ? inputStatus : "없음"}`
      );
      comment.value = "";
    },
    [inputStatus]
  );

  return (
    {/* 리뷰 작성하기 관련 */}
      <StoreContent>
        <form onSubmit={onSubmitForm}>
          <MyGraph>
            <InnerGraph width={categoryRate} />
          </MyGraph>
          <FormCategoryWrap>
            <FormCategoryMain>
              <input type="radio" name="category" value="pepsi" defaultChecked={inputStatus === 'pepsi'} onClick={() => handleClickRadioButton('pepsi')}/>
              <img src={pepsi} />
            </FormCategoryMain>
            <FormCategoryMain>
              <img src={coca} />
              <input type="radio" name="category" value="coca" defaultChecked={inputStatus === 'coca'} onClick={() => handleClickRadioButton('coca')}/>
            </FormCategoryMain>
          </FormCategoryWrap>
          <div>
            <MyCard title="홍길동" style={{ margin: '6% 0' }}>
              <input ref={commentRef} />
            </MyCard>
            <CustomBtn>리뷰쓰기</CustomBtn>
          </div>
        </form>
      </StoreContent>

  )
};
```

1. 두 개의 선택지에서 하나만 선택을 하기 위해서는 같은 name 프로퍼티를 가지고 있어야 한다
2. 리액트에서 input 태그 내부에서 state를 통해 관리하기 위해서는 checked 대신 defaultChecked를 사용한다.
3. inputStatus를 비워두고 해당 라디오 버튼이 클릭되면 handleClickRadioButton함수를 통해 inputStatus에 해당 값(value)을 저장한다
4. inputStatus === 'coca' , 즉 체크가 되어 있는 상태에서만 defaultChecked를 통해 표시된다.
5. 따라서 useState를 통해 value 값을 관리하고 있기 때문에ㅔ, inputStatus를 onSubmit 시에 해당 데이터와 함께 dispatch 시킬 수 있다.
6. 현재 alert()로 보여지고 있는 데이터는 dispatch를 통해 액션을 서버로 보내준다.

> 3,4 review list를 업데이트 및 막대 그래프를 통해 비율과 해당하는 비율 표시하기

<p>위의 과정을 통해 mongoDB에 저장이 된다면, 우리는 서버로 부터 새로운 리뷰 리스트를 전달 받는다. 리뷰 리스트는 reducer에서 initialState를 통해 관리되고, 우리는 이를 useSelector()를 통해 불러온 뒤 매핑해준다. 이때 다시 넘겨받는 reviewList의 객체 안의 category 프로퍼티를 통해 비율을 표시해줘야 한다.</p>

```js
const Store = () => {
  // 카테고리 비율
  const [categoryRate, setCategoryRate] = useState(100);

  // 해당 가게에 대한 리뷰 리스트
  const reviewList = [
    {
      id: 1,
      storeName: "헤반트 범계점",
      userName: "윤성님",
      comment: "존맛탱 가게입니다 추천해요",
      category: "펩시",
    },
    {
      id: 2,
      storeName: "헤반트 범계점",
      userName: "도해님",
      comment: "튀김이 바삭바삭해용.튀김이 바삭바삭해용",
      category: "코카콜라",
    },
    {
      id: 3,
      storeName: "헤반트 범계점",
      userName: "진수님",
      comment: "여긴 왜 제로콜라 없나요?",
      category: "펩시",
    },
    {
      id: 4,
      storeName: "헤반트 범계점",
      userName: "준희님",
      comment: "펩시 제로 라임맛 최고",
      category: "펩시",
    },
  ];

  // 카테고리 비율을 계산할 함수 calCategory() 실행 후 결과 값을 CategoryRate state에 담고 props로 전달
  useEffect(() => {
    const categoryResult = calCategory(reviewList);
    setCategoryRate(categoryResult);
  }, [reviewList]);

   const calCategory = useCallback((reviewList) => {
    // 펩시 개수, 콜라 개수
    let pepsiArr = [];
    let cocaArr = [];

    reviewList.map((r) => {
      if (r.category === '펩시') {
        pepsiArr.push(r.category);
      } else if (r.category === '코카콜라') {
        cocaArr.push(r.category);
      }
    });

    return Math.floor((pepsiArr.length / reviewList.length) * 100);
  }, []);

  return (
        // 막대그래프의 비율을 관리할 categoryRate
        <MyGraph>
          <InnerGraph width={categoryRate} />
        </MyGraph>

        // 리뷰 리스트 관련
        <StoreContent>
          <StoreContentHeader>
            <StoreContentHeaderMain>리뷰 </StoreContentHeaderMain>
            <StoreContentHeaderSub>
              {reviewList.length ? <span>{reviewList.length}개</span> : <span>0개</span>}
            </StoreContentHeaderSub>
          </StoreContentHeader>
          {storeReview.length ? (
            <StoreContentReview>
              {reviewList.map((review) => (
                <StoreContentReviewWrap key={review.id}>
                  <MyCard title={review.userName} bordered={false} category={review.category.toString()}>
                    <p>{review.comment}</p>
                    <p>{review.category === '펩시' ? <img src={pepsi} /> : <img src={coca} />}</p>
                  </MyCard>
                </StoreContentReviewWrap>
              ))}
            </StoreContentReview>
          ) : (
            <Skeleton></Skeleton>
          )}
        </StoreContent>
  )
};
...
📁 style.js
// width를 props로 전달받음
export const InnerGraph = styled.div`
  background: #bbdefb;
  width: ${(props) => props.width}%;
  padding: 8px;
  border-radius: 20px;
`;
```

1. 서버로 부터 넘겨받을 데이터를 더미데이터로 구현해 두었다 (reviewList)
2. useEffect()를 통해 reviewList를 감지한다 변화가 있을 시, 해당 변화를 감지할 calCategory 함수를 사용한다.
3. calCategory 함수를 통해 reviewList의 각 객체 안에 들어있는 category 프로퍼티에 접근한다.
4. 후에 각각의 배열 (pepsiArr, cocaArr)에 해당하는 값이 있다면 넣어주고, 비율을 계산하여 리턴한다.

```js
return Math.floor((pepsiArr.length / reviewList.length) * 100); // 펩시의 백분율(%)을 계산하는 식 (나머지는 floor 함수를 통해 버림하였다)
```

5. 마지막으로 calCategory 함수의 리턴 값을 setCategoryRate(categoryResult)를 통해 categoryRate state를 새로 업데이트 해준다.
6. 해당 state를 props로 전달하여, emotion을 통해 해당 width를 통해 막대 그래프의 비율을 조정할 수 있다.

### 결과

<img src="./images/previous.gif" alt="기존 데이터">

> 데이터를 추가하면 정상적으로 비율과 배경이 변화한다

<img src="./images/update.gif" alt="변화된 데이터">

### 레퍼런스

- <a href="https://taehoblog.netlify.app/react/radiobutton/">리액트 라디오 버튼</a>
- <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Math/floor">MDN: Math.floor</a>
- <a href="https://www.google.com/search?q=%EB%B0%B0%EC%97%B4+%ED%94%84%EB%A1%9C%ED%8D%BC%ED%8B%B0+%EC%B6%94%EC%B6%9C%ED%95%98%EA%B8%B0&rlz=1C5CHFA_enKR920KR920&sxsrf=ALeKk03bnq9RNoznCQVXOJzP2L2OczMNTg%3A1625054492051&ei=HF3cYLPPAse2mAWmrJrICw&oq=%EB%B0%B0%EC%97%B4+%ED%94%84%EB%A1%9C%ED%8D%BC%ED%8B%B0+%EC%B6%94%EC%B6%9C%ED%95%98%EA%B8%B0&gs_lcp=Cgdnd3Mtd2l6EANKBAhBGAFQ2wpYghBgwhFoAXAAeACAAaYCiAHLC5IBBTEuMS41mAEAoAEBqgEHZ3dzLXdpesABAQ&sclient=gws-wiz&ved=0ahUKEwizzfTdp7_xAhVHG6YKHSaWBrkQ4dUDCA4&uact=5">키워드로 검색: 배열 프로퍼티 추출하기</a>

## 두 번째 잊지 말자, useCallback 상황 소개

<p>콜라맵 프로젝트를 진행하는 중에, input 값을 추출하여 서버에 데이터를 전송하는 부분이 있었다. 카카오 API에서 제공하는 가게의 고유 id와, 가게의 이름, 글쓴이, 카테고리, 댓글(코멘트)를 서버에 넘겨줘야하는 상황이다. form 태그를 통해서 실제로 컨트롤하는 것은 카테고리 분류에 대한 값과 댓글을 처리하는 방법이다. 이를 각각 useState와 useRef를 사용하여 처리하였다.</p>

```js
const Store = () => {
  // 카테고리 관리
  const [inputStatus, setInputStatus] = useState("");
  // 파라미터를 통해 가게 고유 아이디와 가게 이름을 넘겨받음
  const { title, id } = useParams();
  // 댓글 (코멘트)관리
  const commentRef = useRef();
  ...

  // input button type radio에게 useState를 부여할 함수(handleClickRadioButton)
  const handleClickRadioButton = useCallback((radioBtnName) => {
    setInputStatus(radioBtnName);
  }, []);

  // form 태그의 메서드 onSubmit={onSubmitForm}에 들어가는 함수
  ...
  const onSubmitForm = useCallback(
    (e) => {
      e.preventDefault();
      const comment = commentRef.current;
      if (comment.value.trim() === '' || inputStatus === '') {
        alert('게시글을 입력 또는 카테고리 선택을 완료해야 합니다');
        comment.focus();
        return;
      }
      alert(
        `가게id: ${id} \n가게이름: ${title}\n커멘트: ${comment.value}\n카테고리: ${inputStatus ? inputStatus : '없음'}`,
      );
      comment.value = '';
    },
    [],
  );
};
```

<img src="./images/callbackError.png" alt="callbackError"/>

<p>분명히 useEffect와 useState를 통해서 카테고리의 값이 변경될 때마다 감지가 되는데, form 태그로 해당 state를 전달하지 못하는 것이였다. 전에도 이런적이 있었는데, 리뷰를 받고 어영부영 넘겨서 해결했던 부분이여서 또 까먹었던 것 같다. 구글링을 계속 해보았는데, 내가 원하는 정보는 찾을 수 없었다. 하지만, 슬랙에서 다른 프론트 엔드 파트 인원분들께 여쭤보니, useCallback()을 사용할 때 두 번째 파라미터에 우리가 감지하고 싶어하는 state를 넣어 주지 않았다는 것을 알 수 있다.</p>

> useCallback 의 첫번째 파라미터에는 우리가 생성해주고 싶은 함수를 넣어주고, 두번째 파라미터에는 배열을 넣어주면 되는데 이 배열에는 어떤 값이 바뀌었을 때 함수를 새로 생성해주어야 하는지 명시해주어야 합니다.

<p>지금 찾아보니 지금 이 정리본에도 적혀 있는 내용인데, 이미 안다고 생각하고 대충 보고 넘긴 경향이 있는 것 같다.</p>

> 바꾼 로직

```js
const Store = () => {
  // 카테고리 관리
  const [inputStatus, setInputStatus] = useState("");
  // 파라미터를 통해 가게 고유 아이디와 가게 이름을 넘겨받음
  const { title, id } = useParams();
  // 댓글 (코멘트)관리
  const commentRef = useRef();
  ...

  // input button type radio에게 useState를 부여할 함수(handleClickRadioButton)
  const handleClickRadioButton = useCallback((radioBtnName) => {
    setInputStatus(radioBtnName);
  }, []);

  // form 태그의 메서드 onSubmit={onSubmitForm}에 들어가는 함수
  ...
  const onSubmitForm = useCallback(
    (e) => {
      e.preventDefault();
      const comment = commentRef.current;
      if (comment.value.trim() === '' || inputStatus === '') {
        alert('게시글을 입력 또는 카테고리 선택을 완료해야 합니다');
        comment.focus();
        return;
      }
      alert(
        `가게id: ${id} \n가게이름: ${title}\n커멘트: ${comment.value}\n카테고리: ${inputStatus ? inputStatus : '없음'}`,
      );
      comment.value = '';
    },
    [inputStatus],
    // inputStatus를 추가 > onSubmitForm 함수가 useState를 통해 관리되는 state의 업데이트 값을 인식하지 못한다.
    // 추가적으로 의존성을 띄게 되는 state가 있다면 [] 파라미터에 의존성을 추가해줄 것
  );
};
```

## 세 번째 ES6 property-shorthand를 사용하기

<p>새롭게 현업을 시작하는 과정에서, 전에도 해결하지 못한(?) 방식으로 코드를 짜시는 팀원분을 만났습니다.</p>

### return문에 { } 객체형식으로 변수 반환하기

```js
function useHeader() {
  const teamName = "MIC-TEAM";

  return { teamName };
}

export default useHeader;
```

### 해당 teamName 객체의 사용

```js
import React from "react";
import useHeader from "../../hooks/useHeader";
import { container } from "./styles";

function Header() {
  const { teamName } = useHeader();

  return <h1 css={container}>{teamName}</h1>;
}

export default Header;
```

<p>끈질긴 질문 끝에 property-shorthand라 불리우는 ES6의 문법이라는 단서를 얻을 수 있었습니다.</p>

<p>property-shorthand에 대한 기본적인 내용은 다음과 같습니다.</p>

```js
/* property shorthand (단축 속성명) */
var a = "foo";
var b = 42;
var c = {};

console.log("a:", a, "b:", b, "c:", c);
// a: foo b: 42 c: {}

var o = {
  a: a,
  b: b,
  c: c,
};

console.log("o:", o);
// o: { a: 'foo', b: 42, c: {} }

// 프로퍼티 {key: value}에서 해당 key , value의 값이 일치한다면 단축 속성명을 사용할 수 있습니다.
// 다음과 같이 key값을 변수명으로 생성할 수 있습니다.

var o2 = { a, b, c };

console.log("o2:", o2);
// o2: { a: 'foo', b: 42, c: {} }
```

<p>프로퍼티를 구성하는 {key : value}의 형태에서, key와 value의 값이 일치하게 구성한다면, 단축 속성명 (property-shorthand)을 사용할 수 있습니다. 따라서 처음 제시한 코드를 풀어보면 다음과 같습니다.</p>

```js
case 1: 단축 속성명 사용 전,

function useHeader() {
  const teamName = "MIC-TEAM";

  return { teamName: teamName };
}

export default useHeader;

console.log(useHeader());
// { teamName: 'MIC-TEAM' }

case 2: 단축 속성명 사용 후,

function useHeader() {
  const teamName = "MIC-TEAM";

  return { teamName };
}

export default useHeader;

console.log(useHeader());
// { teamName: 'MIC-TEAM' }
```

<p>호출된 함수가 객체 형식으로 반환할 때, 프로퍼티의 value를 적어주지 않더라도 같은 값을 반환하는 것을 알 수 있었습니다.</p>
<p>따라서, useHeader 함수를 호춣하며 { } 중괄호 내부에 담는 { teamName } 은 실질적으로 teamName이라는 식별자에 의해 참조가 가능한 메모리에 저장된 원시값인 'MIC-TEAM' 문자열을 의미합니다.</p>

```js
import React from "react";
import useHeader from "../../hooks/useHeader";
import { container } from "./styles";

function Header() {
  const { teamName } = useHeader();

  return <h1 css={container}>{teamName}</h1>;
}

export default Header;
```

<p>사실 아직까지는 그냥 이렇게 분리해서 사용해야 하는 이유를 발견하지 못했습니다. 조금 더 공부하면서, 해당 부분을 단축 속성명을 사용하며 생기는 이점에 대해 알아보겠습니다.</p>

```
아하~ 저 useHeader에 리턴하는 값이 teamName 하나라면 준희님 말씀처럼 값만 던져주는 게 더 좋은 코드인 것 같습니다~!
그런데 보통 useHeader 같은 커스텀 훅은 비즈니스 로직 처리 후 리턴 값이 여러 키, 밸류를 담고 있는 객체가 전달되는 게 보통인 것 같아서 미리 객체로 만들어서 리턴 시켜줬습니다
```

<p>와 같은 답변을 받았습니다...! 후에 비즈니스 로직이 추가되면, 반드시 객체로 반환하는 이유를 찾아 추가적으로 작성해보도록 하겠습니다!</p>

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let [글제목, 글제목변경] = useState(['남자코트 추천', '강남 우동맛집', '파이썬독학']);
  //변수: 갑자기 변경되면 html에 자동으로 반영이 되지 않음
  //state: 변경되어도 html에 자동으로 반영이 됨
  //state는 변경사항을 바로바로 반영되게 하고 싶을 때 쓰기! 
  //(값이 별로 변하지 않는 변수에는 굳이 사용 X)
  let [좋아요, 좋아요변경] = useState(0);
  //좋아요 변경 = state 변경용 함수
  //array나 object 다룰 때는 원본 유지하기

  //onClick {}안에는 항상 함수 넣어야함!
  //state는 등호로 변경 X
  return (
    <div className="App">
     <div className="black-nav">
      <h4>ReactBlog</h4>
     </div>

     <button onClick={()=>{
      글제목.sort();
    }}>가나다순정렬</button>

     <button onClick={()=>{
        글제목[0] = '여자코트 추천';
        글제목변경(글제목);
        //let copy = [...글제목];
        //copy[0] = '여자코트 추천';
     }}>글수정</button>

     <div className='list'>
      <h4>{ 글제목[0] }<span onClick={()=>{좋아요변경(좋아요 + 1)}}>👍</span> {좋아요} </h4>
      <p>2월 17일 발행</p>
     </div>

     <div className='list'>
      <h4>{ 글제목[1] }</h4>
      <p>2월 17일 발행</p>
     </div>

     <div className='list'>
      <h4>{ 글제목[2] }</h4>
      <p>2월 17일 발행</p>
     </div>

     <Modal></Modal> 

    </div>
  );
}
//<Modal></Modal>대신 <Modal/>도 가능
//component 만들때는 하나의 div로 묶기
//component 안에 두 개 이상의 div를 써야할 때 : 전부 <div></div>로 묶기 or <></>로 묶기
function Modal(){
  return (
    <div className='modal'>
    <h4>제목</h4>
    <p>날짜</p>
    <p>상세내용</p>
    </div>
  )
}
//component 쓰는 경우 : 반복적인 html을 축약할 때, 큰 페이지들, 자주 변경되는 것들
//component : state를 가져다 쓸 때 에러
export default App;

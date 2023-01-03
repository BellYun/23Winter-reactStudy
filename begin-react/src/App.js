import React from "react";
import Hello from "./Hello";
import "./App.css"

function App(){
  const name = 'react';
  const style = {
    backgroundColor : 'black',
    color : 'aqua',
    fontSize : 24,
    padding : "1rem"//태그 내부 주석 작성
  }


  return (
    <>
      <Hello/>
      <div style={style}>{name}</div>
      <div className="gray-box"></div>{/*css클래스를 가져오는 방법*/}
    </>
  );
}

export default App;
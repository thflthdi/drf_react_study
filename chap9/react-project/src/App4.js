import React, { useState, useEffect } from 'react';

class App1 extends React.Component {
  state = {
    value1: 0,
    value2: 0,
  };
  render() {
    return (
      <div>
        hello App1
        <hr />
      </div>
    );
  }
}

// function Clock() {
//   const [date, setDate] = useState(new Date());
//   useEffect(() => {
//     const interval = setInterval(() => setImmediate(new Date()), 1000);
//     return () => clearInterval(interval);
//   }, []);
//   return <div>현재 시각은 {date.toISOString().slice(11, 19)}입니다.</div>;
// }

function App2() {
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const [value, setValue] = useState({ value1: 0, value2: 0 }); //지정한 값 전체를 업데이트 해야함
  //array로 받으면 현재 상태에 대한 getter setter를 받는다.

  useEffect(() => {}); // render 시에 호출
  useEffect(() => {}, []); // 마운트 될 시에 호출 2번쨰 인자가 빈어레이면 컴포넌트가 마운트 될 때에만 호출하겠다.
  useEffect(() => {}, [value]); // value가 변경될 시에 호출

  const onClick = () => {
    setValue((prevState) => ({ ...prevState, value1: 10 }));
  };
  return (
    <div>
      Hello App2
      <hr />
      {JSON.stringify(value)}
      <button onClick={onClick}>click</button>
      {/* <Clock /> */}
    </div>
  );
}

export default App2;

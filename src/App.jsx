import { useState } from 'react';
import './App.css';
import Header from './components/Header.jsx';
import Nav from './components/Nav.jsx';
import Figure from './components/Figure.jsx';

function App() {
  // 4단계 선택 상태(useState) 만들기
  const [id, setId] = useState(1);

  // 2단계 works 데이터 준비
  const works = [
    { id: 1, title: 'work 1', url: '', desc: '미션1 설명입니다.' },
    { id: 2, title: 'work 2', url: '', desc: '미션2 설명입니다.' },
    { id: 3, title: 'work 3', url: '', desc: '미션3 설명입니다.' },
    { id: 4, title: 'work 4', url: '', desc: '미션4 설명입니다.' },
  ];

  return (
    <>
      <Header />
      <Nav data={works} />
      <Figure />
    </>
  );
}

export default App;

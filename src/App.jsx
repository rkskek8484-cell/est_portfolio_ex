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
    { id: 1, title: 'work 1', url: 'portfolio_dist/images/img-1.jpg', desc: 'Work 1 description' },
    { id: 2, title: 'work 2', url: 'portfolio_dist/images/img-2.jpg', desc: 'Work 2 description' },
    { id: 3, title: 'work 3', url: 'portfolio_dist/images/img-3.jpg', desc: 'Work 3 description' },
    { id: 4, title: 'work 4', url: 'portfolio_dist/images/img-4.jpg', desc: 'Work 4 description' },
  ];

  // 6단계 선택된 id와 일치하는 작품 찾기
  const selectWork = works.find((w) => w.id === id);

  return (
    <>
      <Header />
      <Nav data={works} onChangeMode={(id) => setId(id)} />
      {/* 8단계 예외 처리  */}
      {selectWork && <Figure data={selectWork} url={selectWork.url} desc={selectWork.desc} />}
    </>
  );
}

export default App;

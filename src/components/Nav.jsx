import './Nav.css';

function Nav({ data, onChangeMode, activeId }) {
  return (
    <nav>
      {/* 3단계 메뉴 목록 출력 */}
      <ul className='menu'>
        {data.map((work) => (
          <li key={work.id} className={activeId === work.id ? 'active' : ''}>
            {/* 선택 미션 - 버튼으로 바꾸기  */}
            <button
              type='button'
              aria-current={activeId === work.id ? true : false}
              onClick={(e) => {
                e.preventDefault();
                onChangeMode(work.id);
              }}
            >
              {work.title}
            </button>
            {/* <a href=''>{work.title}</a> */}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;

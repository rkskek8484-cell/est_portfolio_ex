function Nav({ data, onChangeMode }) {
  return (
    <nav>
      {/* 3단계 메뉴 목록 출력 */}
      <ul>
        {data.map((work) => (
          <li
            key={work.id}
            // 5단계 Nav 클릭 이벤트
            onClick={(e) => {
              e.preventDefault();
              onChangeMode(work.id);
            }}
          >
            {/* 선택 미션 - 버튼으로 바꾸기  */}
            <button
              type='button'
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

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
            <a href=''>{work.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;

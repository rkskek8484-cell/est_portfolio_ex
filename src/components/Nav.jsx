function Nav({ data }) {
  return (
    <nav>
      {/* 3단계 메뉴 목록 출력 */}
      <ul>
        {data.map((work) => (
          <li key={work.id}>
            <a href=''>{work.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;

function Figure({ url, desc, data }) {
  return (
    <figure>
      {/* 7단계 Figure에서 이미지/설명 출력 */}
      <img alt='img-1' src={url} />
      <figcaption>{desc}</figcaption>
    </figure>
  );
}

export default Figure;

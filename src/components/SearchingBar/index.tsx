/** @jsxImportSource @emotion/react */
import { ChangeEvent, useState, FormEvent } from "react";
import styles from "./styles";
import searchImg from "../../assets/Search.png";
import "../../styles/common.css";
//{ onSearch } 프롭으로 넣기
const SearchingBar = () => {
  const [keyword, setKeyword] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setKeyword(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    // onSearch(keyword);
  };

  return (
    <form onSubmit={handleSubmit} css={styles.form}>
      <img src={searchImg} css={styles.image} />
      <input
        type="text"
        value={keyword}
        onChange={handleChange}
        placeholder="링크를 검색해 보세요"
        css={styles.input}
      />
    </form>
  );
};

export default SearchingBar;

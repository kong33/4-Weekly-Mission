/** @jsxImportSource @emotion/react */
import styles from './styles'
import useSearch from 'hooks/useSearch'
import searchImg from '../../assets/Search.png'
import '../../styles/common.css'
//{ onSearch } 프롭으로 넣기
const SearchingBar = () => {
  const { keyword, handleChange, handleSubmit, handleCancel } = useSearch()

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
      <button onClick={handleCancel}>삭제</button>
    </form>
  )
}

export default SearchingBar

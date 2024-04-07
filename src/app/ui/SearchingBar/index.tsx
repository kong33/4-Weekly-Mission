import searchImg from '@/src/public/images/search.png';
import Image from 'next/image';
import styles from './style.module.scss';
import { ChangeEventHandler } from 'react';
import Input from '../Input';

type SearcingBarPrpos = {
  keyword: string;
  handleInputChange: ChangeEventHandler<HTMLInputElement>;
};

const SearchingBar = ({ keyword, handleInputChange }: SearcingBarPrpos) => {
  return (
    <form className={styles.form}>
      <div className={styles.imageWrapper}>
        <Image src={searchImg} width={16} height={16} alt="돋보기" />
      </div>
      <Input
        type="search"
        onChange={handleInputChange}
        value={keyword}
        placeholder="링크를 검색해 보세요"
        className={styles.input}
      />
    </form>
  );
};

export default SearchingBar;

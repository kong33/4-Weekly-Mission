import useGetCardInShared from '@/src/shared/hooks/useGetCardInShared';
import { useState, ChangeEvent } from 'react';
import Layout from '@/src/widgets/Layout';
import UserProfile from '@/src/entities/profile/ui/UserProfile';
import SearchingBar from '@/src/shared/ui/SearchingBar';
import CardList from '@/src/widgets/CardList';
import styles from './style.module.scss';
const Shared = () => {
  const { cardDetail } = useGetCardInShared();
  const [keyword, setKeyword] = useState('');
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value.toLowerCase());
  };
  return (
    <Layout isLogined={false}>
      <>
        <UserProfile />,
        <div className={styles.container}>
          <SearchingBar keyword={keyword} handleInputChange={handleChange} />,
          <CardList items={cardDetail} />
        </div>
        ,
      </>
    </Layout>
  );
};
export default Shared;

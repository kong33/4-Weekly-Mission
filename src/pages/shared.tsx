import { ReactElement , useState, ChangeEvent} from "react";
import { NextPageWithLayout } from "./_app";
import Layout from "@/src/layouts/MainLayout";
import useGetCardInShared from "@/src/features/sharedpage/useGetCardInShared";
import UserProfile from "@/src/features/sharedpage/UserProfile";
import SearchingBar from "@/src/app/ui/SearchingBar";
import CardList from "@/src/features/CardList";
import styles from '@/src/styles/SharedPage.module.scss'

const SharedPage : NextPageWithLayout = () => {
 
  const { cardDetail } = useGetCardInShared();
  const [keyword, setKeyword] = useState('');
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value.toLowerCase());
  };
  return (
      <>
        <UserProfile />,
        <div className={styles.container}>
          <SearchingBar keyword={keyword} handleInputChange={handleChange} />,
          <CardList items={cardDetail} />
        </div>
        ,
      </>
  );

}

SharedPage.getLayout = function getLayout(page: ReactElement){
    return(
        <Layout isLogined={false}>
            {page}
        </Layout>
    )
}
export default SharedPage


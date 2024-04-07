import { ReactElement , useState, ChangeEvent} from "react";
import { NextPageWithLayout } from "./_app";
import Layout from "@/layouts/MainLayout";
import useGetCardInShared from "@/features/sharedpage/useGetCardInShared";
import UserProfile from "@/features/sharedpage/UserProfile";
import SearchingBar from "@/app/ui/SearchingBar";
import CardList from "@/features/CardList";
import styles from '@/styles/SharedPage.module.scss'

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


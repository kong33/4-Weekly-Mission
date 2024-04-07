import { ReactElement } from "react";
import { NextPageWithLayout } from "./_app";
import Layout from "@/layouts/MainLayout";
import { useState } from "react";
import useGetFilters from "@/features/sharedpage/Filter/useGetFilters";


const SharedPage : NextPageWithLayout = () => {
    const [clickedFilterId, setClickedFilterId] = useState<number | null>(null);
    const [keyword, setKeyword] = useState('');
    const { filtersId, filtersTitle } = useGetFilters();
    //cardsDetail을 어떻게 관리할 지 고민되는군
    const { cardsDetail } = useGetClickedCards({ clickedFilterId });
    const { HeaderRef, isOver } = useObserver();
  
    const handleFilterClick = (e: MouseEvent<HTMLButtonElement>) => {
      const target = e.target as HTMLButtonElement;
      setClickedFilterId(Number(target.id));
    };
  
    const handleKeywordChange = (e: ChangeEvent<HTMLInputElement>) => {
      setKeyword(e.target.value.toLowerCase());
    };
    const debouncedSearchText = useDebounce(keyword, 200);
  
    // 유저의 키보드 액션 ==>
    // keyword state를 change ==>
    // keyword state를 debounce에 묶어 마지막 keyword에 들어간 내용으로 변수에 할당 ex.debouncedKeyword ==>
    // debouncedKeyword를 가지고 원본 배열 filtering ==>
    // useMemo를 사용(사용 이유 : state가 변형될때마다 debouncedKeyword를 가지고 필터링 하는 배열을 다시 계산할 필요가 없기 떄문)
    //디바운스를 걸어버리기
    const filteredCardsDetail = useMemo(() => {
      if (!debouncedSearchText) return cardsDetail;
      return cardsDetail?.filter(
        (item: Item) =>
          item.url?.toLowerCase().includes(debouncedSearchText.toLowerCase()) ||
          item.title?.toLowerCase().includes(debouncedSearchText.toLowerCase()) ||
          item.description?.toLowerCase().includes(debouncedSearchText.toLowerCase()),
      );
    }, [cardsDetail, debouncedSearchText]);
  
    return(
        <>
        <div ref={HeaderRef} style={{ opacity: isOver ? '0' : '1' }}>
          <AddLink />
        </div>
        ,
        <div className={styles.container}>
          <SearchingBar keyword={keyword} handleInputChange={handleKeywordChange} />
          <div className={styles.button}>
            {filtersTitle.map((filter, index) => (
              <Filter
                title={filter}
                key={filtersId[index]}
                id={filtersId[index]}
                onClick={(e) => handleFilterClick(e)}
              />
            ))}
          </div>
        </div>
        ,
        <div className={styles.cardContainer}>
          <CardList items={filteredCardsDetail} />
        </div>
        ,
        <div className={styles.fixedLinkDefault} style={{ opacity: isOver ? '1' : '0' }}>
          <AddLink />
        </div>
        ,
      </>
    );
}

SharedPage.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout isLogined = {false}>
            {page}
        </Layout>
    )
}

export default SharedPage
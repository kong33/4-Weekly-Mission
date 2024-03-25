import { useState, useEffect } from 'react'
import { LinkListProps } from 'index.types'
import { Item } from 'index.types'
import api from '../utils/api'
import useSearch from './useSearch'

const useGetCardsInFolder = (clickedButtonId: number | null) => {
  const [cardDetailAll, setCardDetailAll] = useState<Item[] | []>([])
  const [cardSearchDetail, setCardSearchDetail] = useState<Item[] | []>([])
  const { keyword } = useSearch()

  //클릭된 버튼이 "전체"가 아니면 쿼리스트링 / "전체"이면 뒤에 아무것도 붙이지 x
  let query = `users/11/links${
    clickedButtonId ? '?folderId=' + clickedButtonId : ''
  }`

  const fetchData = async () => {
    try {
      const result = await api(query)
      //data가 존재하면 ? data 반환 : null 반환
      //cardetail이 null이면 부모에서 특정 ui 띄워주어야 함
      //받은 keyword가 존재하는지 filter로 확인 ( 이걸 훅으로 빼야겠지? ㄴㄴ)
      let currentObj = result['data'].length > 0 ? result['data'] : null
      currentObj = currentObj?.map((item: LinkListProps) => {
        const { created_at, image_source, ...rest } = item
        return {
          createdAt: created_at,
          imageSource: image_source,
          ...rest,
        }
      })

      setCardDetailAll(currentObj)
      setCardSearchDetail(currentObj)

      const searched = currentObj?.filter((item: Item) => {
        item.url.toLowerCase().includes(keyword) ||
          item.title?.toLowerCase().includes(keyword) ||
          item.description?.toLowerCase().includes(keyword)
        //Object.values(item).join('');
      })
      console.log(searched)
      if (searched) setCardSearchDetail(searched)
    } catch (error: unknown) {
      setCardDetailAll([])
    }
  }

  useEffect(() => {
    fetchData()
    console.log(cardSearchDetail)
  }, [clickedButtonId, cardSearchDetail])
  if (keyword) return { cardDetail: cardSearchDetail }
  else return { cardDetail: cardDetailAll }
}

export default useGetCardsInFolder

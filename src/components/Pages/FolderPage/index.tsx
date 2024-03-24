/** @jsxImportSource @emotion/react */
import { useState } from 'react'
import { MouseEvent } from 'react'
import Layout from '../../Layout'
import AddLink from './AddLink/index'
import NavButton from './NavButton'
import Cards from '../../Cards'
import SearchingBar from '../../SearchingBar/index'
import useGetButttonList from '../../../hooks/useGetButtonList'
import useGetCardsInFolder from '../../../hooks/useGetCardsInFolder'
import '../../../styles/common.css'
import { divCss, btnCss, outerDivCss } from './styles'

const FolderPage = () => {
  const [clickedButtonId, setClickedButtonId] = useState<string | null>(null)
  const { buttonsId, buttonsTitle } = useGetButttonList()
  const { cardDetail } = useGetCardsInFolder(clickedButtonId)

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLButtonElement
    setClickedButtonId(target.id)
  }

  return (
    <Layout
      children={[
        <AddLink />,
        <div css={divCss}>
          <SearchingBar />,
          <div css={btnCss}>
            {buttonsTitle.map((button, index) => (
              <NavButton
                title={button}
                key={buttonsId[index]}
                id={buttonsId[index]?.toString()}
                onClick={(e) => handleClick(e)}
              />
            ))}
          </div>
          ,
        </div>,
        <div css={outerDivCss}>
          <Cards items={cardDetail} />
        </div>,
      ]}
    />
  )
}

export default FolderPage

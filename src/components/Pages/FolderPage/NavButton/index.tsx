/** @jsxImportSource @emotion/react */
import '../../../../styles/reset.css'
import '../../../../styles/common.css'
import { btnCss } from './styles'
import { MouseEvent } from 'react'
type NavButton = {
  title: string | null
  key: number | null
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void
  id: string | null | undefined
}
const NavButton = ({ title, key, onClick, id }: NavButton) => {
  return (
    <button key={key} onClick={onClick} css={btnCss} id={id ?? undefined}>
      {title}
    </button>
  )
}
export default NavButton

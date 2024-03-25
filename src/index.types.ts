import { ReactNode, MouseEvent } from 'react'

// Modal
export type ModalProps = {
  children: ReactNode
  isOpen: boolean
}

export type CloseButtonProps = {
  children: ReactNode
  handleClick: () => void
}

export type ButtonProps = {
  children: string
  handleClick: () => void
}

export type HeaderProps = {
  Title: ReactNode
  Description: ReactNode
}

export type Children = {
  children: ReactNode[] | ReactNode
}

//useGetButtonList
export type ButtonListProps = {
  id: number
  created_at: string
  name: string
  user_id: number
  favorite: boolean
  link: object
}

export interface LinkListProps {
  id: number
  created_at: string
  updated_at: string | null
  url: string
  title: string | null
  description: string | null
  image_source: string | null
  folder_id: number | null
}
export interface Item {
  id: number
  createdAt: string
  updated_at: string | null
  url: string
  title: string | null
  description: string | null
  imageSource: string | null
  folder_id: number | null
}
//prop 아무데나 붙이지 말기

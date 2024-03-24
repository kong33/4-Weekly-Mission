import { ReactNode, MouseEvent } from 'react'

export interface Item {
  createdAt: string
  imageSource?: string
  description: string
  id: number
}

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
  id: number;
  created_at : string;
  name: string;
  user_id: number;
  favorite: boolean;
  link: object;
}

export type LinkListProps = {
  id: number;
  created_at: string;
  updated_at: string | null
  url: string;
  title: string | null
  description: string | null
  image_source: string | null
  folder_id: number | null
}
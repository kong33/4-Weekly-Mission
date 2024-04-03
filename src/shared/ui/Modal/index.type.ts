import { ReactNode } from 'react';
export type ModalProps = {
  children: ReactNode;
  isOpen: boolean;
};

export type ButtonProps = {
  children: string;
  handleClick: () => void;
};

export type HeaderProps = {
  Title: ReactNode;
  Description: ReactNode;
  btnChildren: ReactNode;
  handleClick: () => void;
};

export type Children = {
  children: ReactNode[] | ReactNode;
};

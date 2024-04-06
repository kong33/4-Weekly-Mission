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
  title: string;
  description: string;
  btnChildren: ReactNode;
  handleClick: () => void;
};

export type Children = {
  children: ReactNode[] | ReactNode;
};

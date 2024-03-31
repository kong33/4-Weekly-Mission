import '@/styles/reset.module.scss';
import '@/styles/common.module.scss';
import styles from './style.module.scss';

import { MouseEventHandler } from 'react';

type FilterProps = {
  title?: string;
  keyValue?: number;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  id: number | null | undefined;
};

const Filter = ({ title, keyValue, onClick, id }: FilterProps) => {
  return (
    <button
      key={keyValue}
      onClick={onClick}
      className={styles.button}
      id={id ? id.toString() : undefined}
    >
      {title}
    </button>
  );
};

export default Filter;

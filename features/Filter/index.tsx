import '@/styles/reset.module.scss';
import '@/styles/common.module.scss';
import styles from './style.module.scss';

import { MouseEventHandler } from 'react';

type FilterProps = {
  title: string | null;
  key: number | null;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  id: number | null | undefined;
};

const Filter = ({ title, key, onClick, id }: FilterProps) => {
  return (
    <button
      key={key}
      onClick={onClick}
      className={styles.button}
      id={id ? id.toString() : undefined}
    >
      {title}
    </button>
  );
};

export default Filter;

import styles from './style.module.scss';
import Image from 'next/image';
import LinkImg from '@/src/public/images/link.png'
import Button from '@/src/shared/ui/Button';

const AddLink = () => {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <Image alt="링크" src={LinkImg} height={20} width={20} />
        <input className={styles.input} placeholder="링크를 추가해 보세요" />
        <div className={styles.BtnWrapper}>
          <Button title="추가하기" size="input small" isLoading={false} />
        </div>
      </form>
    </div>
  );
};

export default AddLink;

import useGetAvatar from '@/shared/hooks/useGetAvatar';
import Image from 'next/image';
import Button from '../../../../features/Button';
import styles from './style.module.scss';
const Avatar = () => {
  const { userEmail, userAvatarImg, isLoading } = useGetAvatar();

  return (
    <div className={styles.container}>
      <div className={styles.imgWrapper}>
        <Image alt="프로필 이미지" src={userAvatarImg} width={28} height={28} />
      </div>

      <p className={styles.p}>{userEmail}</p>
      <Button title="로그인" size="small" isLoading={isLoading} />
    </div>
  );
};

export default Avatar;

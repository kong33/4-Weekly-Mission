import '@/styles/reset.module.scss';
import '@/styles/common.module.scss';
import styles from './style.module.scss';
import Avatar from './Avatar';
import Logo from './Logo';

const FolderHeader = () => {
  return (
    <div className={styles.container}>
      <Logo />
      <Avatar />
    </div>
  );
};
export default FolderHeader;

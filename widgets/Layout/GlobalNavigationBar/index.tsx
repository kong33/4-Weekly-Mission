import '@/styles/reset.module.scss';
import '@/styles/common.module.scss';
import styles from './style.module.scss';
import Avatar from './Avatar';
import Logo from './Logo';
import Button from '@/components/Button';
//login 했으면 avatar 띄우고 아니면 button 띄우기
const GlobalNavigationBar = ({ afterLogin }: { afterLogin: boolean }) => {
  return (
    <div className={styles.container}>
      <Logo />
      {afterLogin && <Avatar />}
      {!afterLogin && <Button title="로그인" size="small" isLoading={false} />}
    </div>
  );
};
export default GlobalNavigationBar;

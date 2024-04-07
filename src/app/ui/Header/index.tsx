import styles from './style.module.scss';
import Avatar from './Aavatar';
import Logo from './Logo';
import Button from '../Button';
import Link from 'next/link';

//login 했으면 avatar 띄우고 아니면 button 띄우기
const Header = ({ isLoggedIn }: { isLoggedIn: boolean }) => {
  return (
    <div className={styles.container}>
      <Link href='/'>
        <Logo />
      </Link>
      {isLoggedIn && <Avatar />}
      {!isLoggedIn && <Button title="로그인" size="small" isLoading={false} />}
    </div>
  );
};
export default Header;

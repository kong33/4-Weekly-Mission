import {
    FacebookIcon,
    TwitterIcon,
    YoutubeIcon,
    InstagramIcon,
  } from './SocialMediaLinks/index';
  import { NavLink } from 'react-router-dom';
  import styles from './style.module.scss';
  
  const Footer = () => {
    return (
      <div className={styles.container}>
        <section className={styles.p}>
          <p>@codeit - 2023</p>
        </section>
  
        <nav className={styles.nav}>
          <NavLink to="/policy" className={styles.navLink}>
            Privacy Policy
          </NavLink>
          <NavLink to="/faq" className={styles.navLink}>
            FAQ
          </NavLink>
        </nav>
  
        <section className={styles.icons}>
          {ICON_LIST.map((icon) => (
            <icon.component key={icon.id} />
          ))}
        </section>
      </div>
    );
  };
  export default Footer;
  
  const ICON_LIST = [
    { component: FacebookIcon, id: 0 },
    { component: TwitterIcon, id: 1 },
    { component: YoutubeIcon, id: 2 },
    { component: InstagramIcon, id: 3 },
  ];
  
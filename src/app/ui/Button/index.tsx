import styles from './style.module.scss';

type ButtonProps = {
  title: string;
  size: string;
  isLoading: boolean;
};

const Button = ({ title, size, isLoading }: ButtonProps) => {
  return (
    <button
      type="submit"
      className={`${styles.CTA} ${styles[size]}`}
      style={isLoading ? { display: 'none' } : { display: 'block' }}
    >
      {title}
    </button>
  );
};

export default Button;

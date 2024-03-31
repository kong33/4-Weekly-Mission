import '@/styles/reset.module.scss';
import '@/styles/common.module.scss';
import '@/features/Button/style.module.scss';

type ButtonProps = {
  title: string;
  size: string;
  isLoading: boolean;
};

const Button = ({ title, size, isLoading }: ButtonProps) => {
  return (
    <button
      type="submit"
      className={`CTA ${size}`}
      style={isLoading ? { display: 'none' } : { display: 'block' }}
    >
      {title}
    </button>
  );
};

export default Button;

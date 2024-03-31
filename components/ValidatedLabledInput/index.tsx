import { MouseEventHandler, useState } from 'react';
import Input from '../Input';
import EyeOff from '@/public/svgs/eye-off.svg';
import EyeOn from '@/public/svgs/eye-on.svg';

type InputFieldProps = {
  label?: string;
  errorMessage?: string;
  icon?: React.ReactNode;
} & React.ComponentType<'input'>;

const InputField = ({
  label,
  errorMessage,
  icon,
  ...rest
}: InputFieldProps) => {
  const [inputValue, setInputValue] = useState('');
  const [isIconClicked, setIsIconClicked] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  const handleIconClicked = () => {
    setIsIconClicked((prev) => (!prev));
  };

  return (
    <div>
      <label>
        {label}
        <input onChange={handleInputChange}/>
      </label>

      {errorMessage && <p>{errorMessage}</p>}

      {icon && (
        <button type="button" onClick={handleIconClicked}>
          {icon}
        </button>
      )}
    </div>
  );
};

export default InputField;

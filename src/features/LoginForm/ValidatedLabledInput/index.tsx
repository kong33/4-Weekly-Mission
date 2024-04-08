// import { MouseEventHandler, useState } from 'react';
// import Input from '@/src/app/ui/Input';
// import EyeOff from '@/public/svgs/eye-off.svg';
// import EyeOn from '@/public/svgs/eye-on.svg';

// type InputFieldProps = {
//   label?: string;
//   errorMessage?: string;
//   icon?: React.ReactNode;
// } & React.ComponentType<'input'>;

// const InputField = ({
//   label,
//   errorMessage,
//   icon,
//   ...rest
// }: InputFieldProps) => {
//   const [isIconClicked, setIsIconClicked] = useState(false);

//   const handleIconClicked = () => {
//     setIsIconClicked((prev) => !prev);
//   };

//   return (
//     <div>
//       <label>
//         {label}
//         <Input props={...rest}/>
//       </label>

//       {errorMessage && <p>{errorMessage}</p>}

//       {icon && (
//         <button type="button" onClick={handleIconClicked}>
//           {isIconClicked ? <EyeOn /> : <EyeOff />}
//         </button>
//       )}
//     </div>
//   );
// };

// export default InputField;

// import InputField from '../ValidatedLabledInput';
// import { useImperativeHandle, useState } from 'react';
// import Button from '../Button';

// const LOGINFORM_VALUE = {
//   email: '',
//   password: '',
// };

// const LoginForm = () => {
//   const [formValues, setFormValues] = useState(LOGINFORM_VALUE);

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormValues({ ...formValues, [name]: value });
//   };

//   const handleSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
//     e.preventDefault();

//     if(!validator.email.rule(formValues.email))console.log(validator.email.message)
//     if(!validator.password.rule(formValues.password))console.log(validator.password.message)
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <InputField
//         onChange={handleInputChange}
//         name="email"
//         placeholder=""
//         type="text"
//       />
//       <InputField
//         onChange={handleInputChange}
//         name="password"
//         placeholder=""
//         type="password"
//       />
//       <Button title="로그인" size="large" isLoading={false} />
//     </form>
//   );
// };

// export default LoginForm;

// const validator = {
//   email: {
//     rule: (value: string) => value.includes('@'),
//     message: '이메일 형식이 아닙니다.',
//   },
//   password: {
//     rule: (value: string) => value.length >= 8,
//     message: '비밀번호는 8자리 이상이어야 합니다.',
//   },

//   filterInvalid: (form: typeof LOGINFORM_VALUE) => {
//     return Object.entries(form).filter(
//       ([key, value]) => !validator[key].rule(value),
//     );
//   },
// };

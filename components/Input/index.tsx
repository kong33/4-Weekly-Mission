interface inputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = (props: inputProps) => {
  return <input {...props}></input>;
};

export default Input;

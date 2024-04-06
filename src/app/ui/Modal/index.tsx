import styles from './style.module.scss';
import { Fragment, ReactNode } from 'react';
import { ModalProps, HeaderProps, Children, ButtonProps } from './index.type';

const Modal = ({ children, isOpen }: ModalProps): JSX.Element => {
  return (
    <>
      {isOpen ? (
        <div className={styles.background}>
          <LayOut>{children}</LayOut>
        </div>
      ) : null}
    </>
  );
};

const LayOut = ({ children }: Children) => {
  return <div className={styles.layout}>{children}</div>;
};

const Title = ({ children }: { children: string }) => {
  return <h1>{children}</h1>;
};

const Description = ({ children }: { children: string }) => {
  return <p>{children}</p>;
};

const Header = ({
  title,
  description,
  btnChildren,
  handleClick,
}: HeaderProps) => {
  return (
    <div>
      {<Title>{title}</Title>}
      {<Description>{description}</Description>}
      <button onClick={handleClick}>{btnChildren}</button>
    </div>
  );
};

const Body = ({ children }: { children: ReactNode[] }) => {
  return (
    <div>
      {children?.map((child, index) => (
        <Fragment key={index}>{child}</Fragment>
      ))}
    </div>
  );
};

const Button = ({ children, handleClick }: ButtonProps) => {
  return <>{children && <button onClick={handleClick}>{children}</button>}</>;
};

Modal.Title = Title;
Modal.Description = Description;
Modal.Header = Header;
Modal.Body = Body;
Modal.Button = Button;

export default Modal;

import Link from 'next/link';
import styles from './button.module.sass';

interface IButton {
  text: string;
  color: string;
  href: string;
}

const Button = ({ text, color, href }: IButton) => {
  return (
    <Link href={href} className={`${styles.button} ${styles[color]}`}>
      {text}
    </Link>
  );
};

export default Button;

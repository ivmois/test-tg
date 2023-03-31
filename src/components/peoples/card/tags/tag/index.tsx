import { colorTeg } from '@/services/service';
import styles from './tag.module.sass';

interface ITag {
  text: string;
}

const Tag = ({ text }: ITag) => {
  const color = colorTeg[text] ?? colorTeg.birthyear;

  return <span className={`${styles.tag} ${styles[color]}`}>{text}</span>;
};

export default Tag;

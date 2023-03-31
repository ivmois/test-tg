import { colorTeg, noData } from '@/services/service';
import Tag from './tag';
import styles from './tags.module.sass';

interface ITags {
  gender: string;
  birthyear: string;
}

const Tags = ({ gender, birthyear }: ITags) => {
  return (
    <div aria-label="tags" className={styles.tags}>
      {colorTeg[gender] && <Tag text={gender} />}
      {!noData[birthyear] && <Tag text={birthyear} />}
    </div>
  );
};

export default Tags;

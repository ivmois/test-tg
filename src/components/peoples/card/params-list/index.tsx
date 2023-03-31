import { languageContext } from '@/context/languageContext';
import { noData, peopleParams } from '@/services/service';
import { useContext } from 'react';
import Params from './params';
import styles from './params-list.module.sass';

interface IParams {
  type: 'Modal' | 'Card';
  height: string;
  mass: string;
}

const ParamsList = ({ type, height, mass }: IParams) => {
  const language = useContext(languageContext);

  return (
    <ul aria-label='params' className={styles[`paramsList${type}`]}>
      {!noData[height] && (
        <li className={styles[`paramsItem${type}`]}>
          <Params value={height} name={peopleParams[`${language.language}Height`]} />
        </li>
      )}
      {!noData[mass] && (
        <li className={styles[`paramsItem${type}`]}>
          <Params value={mass} name={peopleParams[`${language.language}Mass`]} />
        </li>
      )}
    </ul>
  );
};

export default ParamsList;

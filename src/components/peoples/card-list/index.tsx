import { languageContext } from '@/context/languageContext';
import { peopleParams } from '@/services/service';
import { IPeople } from '@/types/types';
import { useContext, useEffect, useState } from 'react';
import Card from '../card';
import Select from '../select';
import styles from './card-list.module.sass';

interface ICardList {
  peoples: IPeople[];
}

const CardList = ({ peoples }: ICardList) => {
  const [selectEye, setSelectEye] = useState('all');
  const [selectHeir, setSelectHeir] = useState('all');
  const [selectSkin, setSelectSkin] = useState('all');
  const [filterPeoples, setIsFilterPeoples] = useState<IPeople[]>([]);

  const { language } = useContext(languageContext);

  useEffect(() => {
    const filter = () => {
      return peoples
        .filter((people) => {
          if (selectEye !== 'all') {
            return people.eye === selectEye;
          } else {
            return true;
          }
        })
        .filter((people) => {
          if (selectHeir !== 'all') {
            return people.hair === selectHeir;
          } else {
            return true;
          }
        })
        .filter((people) => {
          if (selectSkin !== 'all') {
            return people.skin === selectSkin;
          } else {
            return true;
          }
        });
    };

    setIsFilterPeoples(filter());
  }, [peoples, selectEye, selectHeir, selectSkin]);

  const onSelectEye = (value: string) => {
    setSelectEye(value);
  };
  const onSelectHeir = (value: string) => {
    setSelectHeir(value);
  };
  const onSelectSkin = (value: string) => {
    setSelectSkin(value);
  };

  return (
    <div className={styles.cards}>
      <form className={styles.filter}>
        <Select onSelect={onSelectEye} peoplesData={peoples} param={'eye'} name={peopleParams[`${language}EyeColor`]} />
        <Select onSelect={onSelectHeir} peoplesData={peoples} param={'hair'} name={peopleParams[`${language}HairColor`]} />
        <Select onSelect={onSelectSkin} peoplesData={peoples} param={'skin'} name={peopleParams[`${language}SkinColor`]} />
      </form>
      <ul className={styles.cardList}>
        {filterPeoples.map((people) => (
          <Card key={people.name} peopleData={people} />
        ))}
        <li className={styles.lastItem}></li>
      </ul>
    </div>
  );
};

export default CardList;

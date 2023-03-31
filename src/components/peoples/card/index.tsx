import CardModal from '@/components/peoples/card/card-modal';
import { IPeople } from '@/types/types';
import { useState } from 'react';
import styles from './card.module.sass';
import Tags from './tags';
import ParamsList from './params-list';

interface ICard {
  peopleData: IPeople;
}

const Card = ({ peopleData }: ICard) => {
  const [modalIsActive, setModalIsActive] = useState(false);

  const handleClick = () => {
    setModalIsActive(true);
  };

  const handleClose = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    setModalIsActive(false);
  };

  return (
    <li className={styles.card} onClick={handleClick} aria-label="card">
      <h3 className={styles.name}>{peopleData.name}</h3>
      <ParamsList type="Card" mass={peopleData.mass} height={peopleData.height} />
      <Tags gender={peopleData.gender} birthyear={peopleData.birthyear} />
      {modalIsActive && <CardModal peopleData={peopleData} handleClose={(e) => handleClose(e)} />}
    </li>
  );
};

export default Card;

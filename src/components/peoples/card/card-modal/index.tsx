import { languageContext } from '@/context/languageContext';
import { genderImg, noData, peopleParams } from '@/services/service';
import { IPeople } from '@/types/types';
import Image from 'next/image';
import { useContext } from 'react';
import ReactDOM from 'react-dom';
import ParamsList from '../params-list';
import Tags from '../tags';
import styles from './card-modal.module.sass';

interface ICardModal {
  peopleData: IPeople;
  handleClose: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const CardModal = ({ peopleData, handleClose }: ICardModal) => {
  const modalElement = document.querySelector('#modal');
  if (!modalElement) return null;

  const language = useContext(languageContext);

  return ReactDOM.createPortal(
    <div className={styles.modalWrap}>
      <div aria-label="modal" className={styles.modal}>
        <button className={styles.close} onClick={handleClose}></button>
        <div className={styles.container}>
          <div className={styles.gender}>
            {genderImg[peopleData.gender] && (
              <Image className={styles.genderImg} src={genderImg[peopleData.gender]} width="342" height="305" alt="hermaphrodite" />
            )}
            <Tags gender={peopleData.gender} birthyear={peopleData.birthyear} />
          </div>
          <div className={styles.specifications}>
            <div className={styles.descr}>
              <h3 className={styles.name}>{peopleData.name}</h3>
              <div className={styles.colors}>
                {!noData[peopleData.eye] && (
                  <span>
                    {peopleParams[`${language.language}EyeColor`]}: {peopleData.eye}
                  </span>
                )}
                {!noData[peopleData.hair] && (
                  <span>
                    {peopleParams[`${language.language}HairColor`]}: {peopleData.hair}
                  </span>
                )}
                {!noData[peopleData.skin] && (
                  <span>
                    {peopleParams[`${language.language}SkinColor`]}: {peopleData.skin}
                  </span>
                )}
              </div>
            </div>
            <ParamsList type="Modal" mass={peopleData.mass} height={peopleData.height} />
          </div>
        </div>
      </div>
    </div>,
    modalElement
  );
};

export default CardModal;

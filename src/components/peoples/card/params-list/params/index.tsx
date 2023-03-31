import styles from './params.module.sass';

interface IParam {
  value: string;
  name: string;
}

const Params = ({ value, name }: IParam) => {
  return (
    <div className={styles.parms}>
      <div className={styles.parmValue}> {value} </div>
      <div className={styles.parmName}> {name} </div>
    </div>
  );
};

export default Params;

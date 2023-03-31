import styles from '@/styles/404.module.sass';
import Layout from '@/components/layout';
import Button from '@/components/button';
import { ColorBotton } from '@/types/enums';

const Error = () => {
  return (
    <Layout>
      <div className={styles.content}>
        <div className={styles.container}>
          <p className={styles.text}>404</p>
          <Button text="Return" color={ColorBotton.green} href="/" />
        </div>
      </div>
    </Layout>
  );
};

export default Error;

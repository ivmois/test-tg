import { ColorBotton } from '@/types/enums';
import Image from 'next/image';
import Button from '../button';
import Container from '../container';
import styles from './hero.module.sass';

const Hero = () => {
  return (
    <main className={styles.main}>
      <Container>
        <div className={styles.content}>
          <div className={styles.descr}>
            <h2 className={styles.title}>Find all your favorite character</h2>
            <p className={styles.text}>You can find out all the information about your favorite characters</p>
            <Button text="See more..." color={ColorBotton.yellow} href="/characters" />
          </div>
          <Image className={styles.img} src="/banner.png" width="793" height="680" alt="yoda" />
        </div>
      </Container>
    </main>
  );
};

export default Hero;

import styles from './container.module.sass';

interface IContainer {
  children: React.ReactNode;
}

const Container = ({ children }: IContainer) => {
  return (
    <div className={styles.container}>{children}</div>
  )
}

export default Container

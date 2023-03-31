import styles from './layout.module.sass';

interface ILayout {
  children: React.ReactNode;
}

const Layout = ({ children }: ILayout) => {
  return <div className={styles.layout}>{children}</div>;
};

export default Layout;

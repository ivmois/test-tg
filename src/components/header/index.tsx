import React from 'react';
import styles from './header.module.sass';
import Image from 'next/image';
import Container from '../container';
import NavListItem from './nav-list-item';

const navMenu = [
  { id: '1', text: 'Home', href: '/' },
  { id: '2', text: 'Characters', href: '/characters' },
];

const Header = () => {
  return (
    <div className={styles.header}>
      <Container>
        <div className={styles.content}>
          <Image className={styles.logo} src="/logo.png" alt="logo" width="150" height="90" />
          <nav className={styles.nav}>
            <ul className={styles.list}>
              {navMenu.map((item) => (
                <NavListItem key={item.id} href={item.href} text={item.text} />
              ))}
            </ul>
          </nav>
        </div>
      </Container>
    </div>
  );
};

export default Header;

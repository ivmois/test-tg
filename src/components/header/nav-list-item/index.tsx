import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './nav-list-item.module.sass';

interface INavListItem {
  href: string;
  text: string;
}

const NavListItem = ({ href, text }: INavListItem) => {
  const router = useRouter();

  return (
    <li className={styles.listItem}>
      <Link className={router.route === href ? styles.linkActive : styles.link} href={href}>
        {text}
      </Link>
    </li>
  );
};

export default NavListItem;

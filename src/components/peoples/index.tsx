import Image from 'next/image';
import { useContext, useEffect, useRef, useState } from 'react';
import Container from '../container';
import styles from './peoples.module.sass';
import { IPeople } from '@/types/types';
import CardList from './card-list';
import { languageContext } from '@/context/languageContext';
import axios from 'axios';
import { getPeople, langApi } from '@/services/service';
import { useRouter } from 'next/router';

const Peoples = () => {
  const { language, handleTranslate } = useContext(languageContext);
  const [peoples, setPeoples] = useState<IPeople[]>([]);
  const bottomOfList = useRef<HTMLDivElement>(null);
  const [nextPage, setNextPage] = useState<number | null>(1);
  const [count, setCount] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    let update = false;
    setPeoples([]);
    !update && setNextPage(1);
    return () => {
      update = true;
    };
  }, [language]);

  useEffect(() => {
    let update = false;
    function load() {
      setLoading(true);
      axios('https://swapi.dev/api/people/', { params: { page: nextPage, format: language === 'wookiee' ? 'wookiee' : 'json' } })
        .then((response) => {
          let data = response.data;

          //На формате wookiee в первой и последней странице приходит не корректный JSON, нужно взять в двойные ковычки "whhuanan"
          if (typeof data === 'string') {
            data = JSON.parse(data.replace('whhuanan', '"whhuanan"'));
          }

          const peoplesList = data[langApi[`${language}Results`]].map((item: any) => {
            const people: IPeople = getPeople(item, language);
            return people;
          });

          !update && setPeoples((prev) => [...prev, ...peoplesList]);

          if (!count) setCount(response.data[langApi[`${language}Count`]]);

          if (data[langApi[`${language}Next`]] && data[langApi[`${language}Next`]] !== 'whhuanan') {
            setNextPage((prev) => {
              if (prev) return ++prev;
              return prev;
            });
          } else {
            setNextPage(null);
          }
        })
        .catch((e) => {
          //На формате wookiee некотрые страницы приходят не корректными, пропускаем их
          if (e.response.status === 500) {
            setNextPage((prev) => {
              if (prev) return ++prev;
              return prev;
            });
          } else {
            setNextPage(null);
          }
          if (e.response.status === 404) {
            router.push('/404');
          }
        })
        .finally(() => {
          setLoading(false);
        });
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && nextPage) load();
      },
      {
        rootMargin: '30%',
      }
    );

    if (bottomOfList.current) {
      observer.observe(bottomOfList.current);
    }

    return () => {
      update = true;

      if (bottomOfList.current) {
        observer.unobserve(bottomOfList.current);
      }
    };
  }, [nextPage, language]);

  return (
    <main className={styles.main}>
      <Container>
        <div className={styles.content}>
          <span className={styles.lang}> language: {language} </span>
          <h2 className={styles.title}>
            {count} {language === 'wookiee' ? 'rcwochuanaoc' : 'Peoples for you to choose your favorite'}
          </h2>
          <CardList peoples={peoples} />
          {loading && (
            <div className={styles.loader}>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          )}
          <div ref={bottomOfList} />
          <button onClick={handleTranslate} className={styles.translate}>
            <Image src="/translate.png" width="100" height="100" alt="translate" />
          </button>
        </div>
      </Container>
    </main>
  );
};

export default Peoples;

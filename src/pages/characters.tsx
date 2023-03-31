import Header from '@/components/header';
import Layout from '@/components/layout';
import Peoples from '@/components/peoples';
import { LanguageContextProvider } from '@/context/languageContext';

const Characters = () => {
  return (
    <LanguageContextProvider>
      <Layout>
        <Header />
        <Peoples />
      </Layout>
    </LanguageContextProvider>
  );
};

export default Characters;

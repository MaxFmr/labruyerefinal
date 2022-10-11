import ArticlePreview from '../components/ArticlePreview/ArticePreview';
import Hero from '../components/Hero/Hero';
import Header from '../components/Header/Header';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import axios from 'axios';

const ActusPage = ({ posts }) => {
  const router = useRouter();

  const [articles, setarticles] = useState(initialState);

  useEffect(() => {
    const fetchArticles = async () => {
      const data = await axios.get('/api/article');

      setarticles(data.data);
    };
    fetchArticles();
  }, []);

  return (
    <>
      <Header />
      <Hero
        bgPath={'/assets/photos/service.webp'}
        logoPath={'/assets/logo.svg'}
        title={'Nos actualités'}
        text='l Lorem ipsum dolor sit amet consectetur adipisicing elit
        Eaque officiis illo dolores, quidem, facilis iure odio omnis ipsa
        repellendus aspernatur et excepturi saepe incidunt voluptate
        laborum provident illum! Dignissimos, soluta! Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Adipisci, minima quasi?
    !'
      />
      {articles.map((art, index) => {
        return (
          <div key={index}>
            <ArticlePreview article={art} />
          </div>
        );
      })}
    </>
  );
};

export default ActusPage;

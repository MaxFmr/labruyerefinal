import ArticlePreview from '../components/ArticlePreview/ArticePreview';
import Hero from '../components/Hero/Hero';
import { useRouter } from 'next/router';

import axios from 'axios';

const ActusPage = ({ posts }) => {
  const router = useRouter();

  return (
    <>
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
      {posts.map((art) => {
        return (
          <div onClick={() => router.push(`/article/${art.title}`)}>
            <ArticlePreview article={art} />
          </div>
        );
      })}
    </>
  );
};

export async function getStaticProps() {
  const res = await axios.get(process.env.NEXT_PUBLIC_HOST + '/api/article');
  const posts = res.data;

  return { props: { posts } };
}

export default ActusPage;

import ArticlePreview from '../components/ArticlePreview/ArticePreview';
import Hero from '../components/Hero/Hero';
import { useRouter } from 'next/router';

import axios from 'axios';

const ActusPage = ({ posts }) => {
  const router = useRouter();

  return (
    <>
      <Hero />
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

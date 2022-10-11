import axios from 'axios';

const articlePage = ({ post }) => {
  return <div>{post.title}</div>;
};

export async function getStaticPaths() {
  const res = await axios.get('/api/article');
  const posts = res.data;

  const paths = posts.map((post) => ({
    params: { title: post.title },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const res = await axios.get('/api/article/' + params.title);
  const post = res.data;

  return { props: { post } };
}

export default articlePage;

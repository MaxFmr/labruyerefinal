import connectMongo from '../../../utils/connectMongo';
import Article from '../../../models/article';

export async function findOneArticle(title) {
  await connectMongo();
  const article = await Article.findOne({ postTitle: title });
  return article;
}

const CrudArticleRoute = async (req, res) => {
  await connectMongo();

  if (req.method === 'GET') {
    //read

    try {
      const article = await Article.findOne(req.query.title);
      res.json(article);
    } catch (error) {
      res.send(error);
    }
  }
};

export default CrudArticleRoute;

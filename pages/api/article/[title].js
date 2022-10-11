import connectMongo from '../../../utils/connectMongo';
import Article from '../../../models/article';

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

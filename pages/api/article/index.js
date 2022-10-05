import connectMongo from '../../../utils/connectMongo';
import Article from '../../../models/article';

const CrudArticleRoute = async (req, res) => {
  await connectMongo();

  if (req.method === 'POST') {
    //create
    try {
      const createdProduct = await Article.create(req.body);
      res.json(createdProduct);
    } catch (error) {
      console.log(error);
      res.json({ error });
    }
  }
  if (req.method === 'GET') {
    //read

    try {
      const articles = await Article.find();
      res.json(articles);
    } catch (error) {
      res.send(error);
    }
  }
  if (req.method === 'PUT') {
    //replace/update
  }
  if (req.method === 'PATCH') {
    //modify/Update
  }
  if (req.method === 'DELETE') {
    try {
      const articleToDelete = await Article.findByIdAndDelete(req.query.id);
      res.json(
        { message: `Article "${articleToDelete.title}" supprimé.` },
        articleToDelete
      );
    } catch (error) {
      res.send(error);
    }
  }
};

export default CrudArticleRoute;

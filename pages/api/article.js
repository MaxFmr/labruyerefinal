import connectMongo from '../../utils/connectMongo';
import Article from '../../models/article';

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
      const products = await Article.find();
      res.json(products);
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
    //Delete
  }
};

export default CrudArticleRoute;

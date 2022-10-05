const AdminRoute = async (req, res) => {
  if (req.method === 'POST') {
    //create
    try {
      const mdp = 'labruyereadmin';
      if (req.body.password === mdp) {
        res.json({ login: 'ok' });
      } else {
        res.json({ message: 'wrong password' });
      }
    } catch (error) {
      console.log(error);
      res.json({ error });
    }
  }
  if (req.method === 'GET') {
    //read
  }
  if (req.method === 'PUT') {
    //replace/update
  }
  if (req.method === 'PATCH') {
    //modify/Update
  }
  if (req.method === 'DELETE') {
  }
};

export default AdminRoute;

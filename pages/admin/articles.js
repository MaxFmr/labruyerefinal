import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';

const Articles = () => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [date, setDate] = useState('');
  const [photo1, setPhoto1] = useState('');
  const [photo2, setPhoto2] = useState('');
  const [photo3, setPhoto3] = useState('');
  const [articles, setArticles] = useState([]);
  const [articleMod, setArticlMod] = useState(true);
  const [isAuth, setIsAuth] = useState(false);
  const [password, setPassword] = useState('');

  const LogIn = async () => {
    const response = await axios.post(
      process.env.NEXT_PUBLIC_HOST + '/api/admin',
      { password: password }
    );
    if (response.data.login === 'ok') {
      setIsAuth(true);
    } else {
      alert('Votre mot de passe est erroné');
    }
  };

  useEffect(() => {
    const fetchArticles = async () => {
      const data = await axios.get(
        process.env.NEXT_PUBLIC_HOST + '/api/article'
      );

      setArticles(data.data);
    };
    fetchArticles();
  }, [articleMod]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const post = {
        title,
        text,
        date,
        photos: [photo1, photo2, photo3],
      };

      const reponse = await axios.post(
        process.env.NEXT_PUBLIC_HOST + '/api/article',

        post
      );
      reponse.data.title && alert('votre article a été ajouté');
      setArticlMod(!articleMod);
    } catch (error) {
      alert(error.message);
    }
  };

  const removeArticle = async (id) => {
    const articleToDelete = await axios.delete(
      process.env.NEXT_PUBLIC_HOST + '/api/article' + `?id=${id}`
    );
    alert(articleToDelete.data.message);
    return setArticlMod(!articleMod);
  };

  return (
    <>
      {isAuth ? (
        <div>
          <div>
            <h3>Les articles diffusés</h3>
          </div>
          <div>
            <h3>Ajouter un article</h3>
            <form onSubmit={handleSubmit}>
              <input
                type='text'
                placeholder='titre'
                onChange={(e) => setTitle(e.target.value)}
              />
              <input type='date' onChange={(e) => setDate(e.target.value)} />

              <div>
                <textarea
                  type='text'
                  placeholder='votre text'
                  onChange={(e) => setText(e.target.value)}
                  cols={50}
                  rows={20}
                />
              </div>

              <h2>URL photo1</h2>
              <input type='text' onChange={(e) => setPhoto1(e.target.value)} />
              <h2>URL photo2</h2>
              <input type='text' onChange={(e) => setPhoto2(e.target.value)} />
              <h2>URL photo3</h2>
              <input type='text' onChange={(e) => setPhoto3(e.target.value)} />
              <p>{photo3}</p>
              <button type='submit'>valider</button>
            </form>
            {articles.length > 0 &&
              articles.map((art) => {
                return (
                  <div key={art._id}>
                    <span>
                      {art._id}{' '}
                      <button
                        onClick={() => {
                          removeArticle(art._id);
                        }}>
                        X
                      </button>
                    </span>
                  </div>
                );
              })}
          </div>
        </div>
      ) : (
        <>
          <input
            type='password'
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button
            onClick={() => {
              LogIn();
            }}>
            valider
          </button>
        </>
      )}
    </>
  );
};

export default Articles;

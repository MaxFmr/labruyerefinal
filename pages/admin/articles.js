import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';

const Articles = () => {
  const [title1, setTitle1] = useState('');
  const [postTitle, setPostTitle] = useState('');
  const [title2, setTitle2] = useState('');
  const [title3, setTitle3] = useState('');
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
  const [text3, setText3] = useState('');
  const [date, setDate] = useState('');
  const [photo1, setPhoto1] = useState('');
  const [photo2, setPhoto2] = useState('');
  const [photo3, setPhoto3] = useState('');
  const [articles, setArticles] = useState([]);
  const [articleMod, setArticlMod] = useState(true);
  const [isAuth, setIsAuth] = useState(false);
  const [password, setPassword] = useState('');

  const LogIn = async () => {
    const response = await axios.post('/api/admin', { password: password });
    if (response.data.login === 'ok') {
      setIsAuth(true);
    } else {
      alert('Votre mot de passe est erroné');
    }
  };

  useEffect(() => {
    const fetchArticles = async () => {
      const data = await axios.get('/api/article');

      setArticles(data.data);
    };
    fetchArticles();
  }, [articleMod]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const post = {
        postTitle,
        title1,
        text1,
        title2,
        text2,
        title3,
        text3,

        date,
        photos: [photo1, photo2, photo3],
      };

      const reponse = await axios.post(
        '/api/article',

        post
      );
      reponse.data.title && alert('votre article a été ajouté');
      setArticlMod(!articleMod);
    } catch (error) {
      alert(error.message);
    }
  };

  const removeArticle = async (id) => {
    const articleToDelete = await axios.delete('/api/article' + `?id=${id}`);
    alert('article suprimé');
    return setArticlMod(!articleMod);
  };

  return (
    <div style={{ display: 'flex', margin: '20px' }}>
      {isAuth ? (
        <div style={{ color: 'black' }}>
          <div>
            <h3>Ajouter un article</h3>
            <form onSubmit={handleSubmit}>
              <h3>Date</h3>
              <input
                type='date'
                onChange={(e) => setDate(e.target.value)}
                required
              />
              <h3>Texte</h3>
              <h4>Titre du post</h4>
              <input
                type='text'
                onChange={(e) => setPostTitle(e.target.value)}
                required
              />

              <h4>Paragraphe1</h4>
              <input
                type='text'
                placeholder='titre1'
                onChange={(e) => setTitle1(e.target.value)}
                required
              />
              <div>
                <textarea
                  type='text'
                  placeholder='votre texte'
                  onChange={(e) => setText1(e.target.value)}
                  cols={50}
                  rows={20}
                  required
                />
              </div>

              <h4>URL photo1</h4>
              <input
                type='text'
                onChange={(e) => setPhoto1(e.target.value)}
                required
              />
              <p>{photo1}</p>

              <h4>Paragraphe2</h4>

              <input
                type='text'
                placeholder='titre2'
                onChange={(e) => setTitle2(e.target.value)}
              />
              <div>
                <textarea
                  type='text'
                  placeholder='votre texte'
                  onChange={(e) => setText2(e.target.value)}
                  cols={50}
                  rows={20}
                />
              </div>
              <h3>URL photo2</h3>

              <input type='text' onChange={(e) => setPhoto2(e.target.value)} />
              <p>{photo2}</p>

              <h4>Paragraphe3</h4>
              <input
                type='text'
                placeholder='titre3'
                onChange={(e) => setTitle3(e.target.value)}
              />
              <div>
                <textarea
                  type='text'
                  placeholder='votre texte'
                  onChange={(e) => setText3(e.target.value)}
                  cols={50}
                  rows={20}
                />
              </div>
              <h3>URL photo3</h3>
              <input type='text' onChange={(e) => setPhoto3(e.target.value)} />
              <p>{photo3}</p>
              <button type='submit'>valider</button>
            </form>
            <div>
              <h3>Les articles diffusés</h3>
            </div>
            {articles.length > 0 &&
              articles.map((art) => {
                return (
                  <div key={art._id}>
                    <div>
                      <span>{art._id}</span>
                    </div>
                    <div>
                      <span>{art.postTitle}</span>
                      <button
                        onClick={() => {
                          removeArticle(art._id);
                        }}>
                        X
                      </button>
                    </div>
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
    </div>
  );
};

export default Articles;

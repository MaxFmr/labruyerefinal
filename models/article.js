import { Schema, model, models } from 'mongoose';

const ArticleSchema = new Schema({
  postTitle: { type: String, required: true, unique: false },
  title1: { type: String, required: true, unique: false },
  text1: {
    type: String,
    required: true,
    unique: false,
  },
  title2: { type: String, required: false, unique: false },
  text2: {
    type: String,
    required: false,
    unique: false,
  },
  title3: { type: String, required: false, unique: false },
  text3: {
    type: String,
    required: false,
    unique: false,
  },
  photos: {
    type: Array,
    required: true,
    unique: false,
  },
  date: {
    type: String,
    required: true,
    unique: false,
  },
});

const Article = models.Article || model('Article', ArticleSchema);

export default Article;

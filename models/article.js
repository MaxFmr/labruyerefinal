import { Schema, model, models } from 'mongoose';

const ArticleSchema = new Schema({
  title: { type: String, required: true, unique: false },
  text: {
    type: String,
    required: true,
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

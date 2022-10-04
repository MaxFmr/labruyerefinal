import { Schema, model, models } from 'mongoose';

const ArticleSchema = new Schema({
  title: { type: String, required: true },
  text: {
    type: String,
    required: true,
    unique: true,
  },
  photos: {
    type: Array,
    required: true,
    unique: true,
  },
  date: {
    type: String,
    required: true,
    unique: true,
  },
  links: [],
});

const Article = models.Cart || model('Article', ArticleSchema);

export default Article;

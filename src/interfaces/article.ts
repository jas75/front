export interface Article {
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  source: {id: string, name: string}
  title: string;
  url: string;
  urlToImage: string;
}

export interface ResultArticles {
  articles: Array<Article>;
  status: string;
}

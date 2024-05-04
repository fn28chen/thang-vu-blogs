export interface ICardProps {
  _id: string;
  title: string;
  description: string;
  _createdAt: string;
  slug: string;
  author: {
    name: string;
  };
  categories: {
    categoryTitle: string;
  };
  mainImage: {
    asset: {
      _ref: string;
    };
    alt: string;
  };
}

export interface IBlogCardProps extends ICardProps {
  _createdAt: string;
  slug: string;
  author: {
    name: string;
  };
  categories: {
    categoryTitle: string;
  };
  mainImage: {
    asset: {
      _ref: string;
    };
    alt: string;
  };
}

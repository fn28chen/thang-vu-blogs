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
  
}

export interface IProjCardProps extends ICardProps {
  tools: string[];
  demoURL?: string;
  githubURL?: string;
  imageURL?: string;
  isFeatured?: boolean;
}

export interface IBlogCardProps extends ICardProps {
  brief_description: string;
  url: string;
  file: string;
  tags: string[];
  date: Date;
}

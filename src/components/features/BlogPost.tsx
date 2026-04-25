import React from 'react';
import '../ui/ui.css';
import { Post } from '../../data/posts';

interface Props {
  post: Post;
  children: React.ReactNode;
}

const BlogPost: React.FC<Props> = ({ post, children }) => (
  <article className="blog-post" data-testid="blogPost">
    <div className="book-content ui-card blog-post-content">
      <h1>{post.title}</h1>
      {post.publishedDate && <p className="post-date">{post.publishedDate}</p>}
      <div className="book-summary blog-post-body">{children}</div>
    </div>
  </article>
);

export default BlogPost;

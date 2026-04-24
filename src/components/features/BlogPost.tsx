import React from 'react';
import Markdown from 'markdown-to-jsx';
import '../ui/ui.css';
import { Post } from '../../data/posts';

interface Props {
  post: Post;
  content: string;
}

const BlogPost: React.FC<Props> = ({ post, content }) => (
  <article className="blog-post" data-testid="blogPost">
    <div className="blog-post-content">
      <h1 className="blog-post-title">{post.title}</h1>
      {post.publishedDate && <p className="post-date">{post.publishedDate}</p>}
      <div className="blog-post-body">
        <Markdown>{content}</Markdown>
      </div>
    </div>
  </article>
);

export default BlogPost;

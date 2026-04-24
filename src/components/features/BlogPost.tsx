import React from 'react';
import MarkdownIt from 'markdown-it';
import '../ui/ui.css';
import { Post } from '../../data/posts';

interface Props {
  post: Post;
  content: string;
}

const md = new MarkdownIt({
  html: false,
  linkify: true,
  typographer: true,
});

const BlogPost: React.FC<Props> = ({ post, content }) => (
  <article className="blog-post" data-testid="blogPost">
    <div className="blog-post-content">
      <h1 className="blog-post-title">{post.title}</h1>
      {post.publishedDate && <p className="post-date">{post.publishedDate}</p>}
      <div className="blog-post-body" dangerouslySetInnerHTML={{ __html: md.render(content) }} />
    </div>
  </article>
);

export default BlogPost;

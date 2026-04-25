import React from 'react';
import Link from 'next/link';
import { Post } from '../../data/posts';
import './ui.css';

interface Props {
  /** The post published before (older) */
  prev?: Post;
  /** The post published after (newer) */
  next?: Post;
}

const PostNav: React.FC<Props> = ({ prev, next }) => {
  if (!prev && !next) return null;

  return (
    <nav className="post-nav" aria-label="Post navigation">
      <div className="post-nav-inner">
        {prev ? (
          <Link href={`/${prev.location}/read/${prev.slug}`} className="post-nav-link post-nav-prev">
            <span className="post-nav-direction">← Previous</span>
            <span className="post-nav-title">{prev.title}</span>
          </Link>
        ) : (
          <div />
        )}
        {next ? (
          <Link href={`/${next.location}/read/${next.slug}`} className="post-nav-link post-nav-next">
            <span className="post-nav-direction">Next →</span>
            <span className="post-nav-title">{next.title}</span>
          </Link>
        ) : (
          <div />
        )}
      </div>
    </nav>
  );
};

export default PostNav;

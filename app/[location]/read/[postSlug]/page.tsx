import { notFound } from 'next/navigation';
import ReadRoute from '../../../../src/components/features/ReadRoute';
import { getPost, posts } from '../../../../src/data/posts';

interface PageProps {
  params: {
    location: string;
    postSlug: string;
  };
}

export function generateStaticParams() {
  return posts.map(post => ({
    location: post.location,
    postSlug: post.slug,
  }));
}

export default function ReadPage({ params }: PageProps) {
  const post = getPost(params.location, params.postSlug);
  if (!post) {
    notFound();
  }

  return <ReadRoute location={params.location} postSlug={params.postSlug} />;
}

import React from 'react';
import MarkdownIt from 'markdown-it';
import '../ui/ui.css';
import BuyButton from '../ui/BuyButton';
import { Testimonial } from '../../data/hikes';

interface Props {
  bg?: string;
  title: string;
  publishedDate?: string;
  summary: string;
  buyUrl?: string;
  testimonials?: Testimonial[];
}

const md = new MarkdownIt({
  html: false,
  linkify: true,
  typographer: true,
});

const BookPage: React.FC<Props> = ({ bg, title, publishedDate, summary, buyUrl, testimonials }) => {
  return (
    <section className="book-section" style={bg ? { backgroundImage: `url("${bg}")` } : {}} data-testid="bookPage">
      <div className="book-content ui-card">
        <h1>{title}</h1>
        {publishedDate && <p className="post-date">{publishedDate}</p>}
        <div className="book-summary" dangerouslySetInnerHTML={{ __html: md.render(summary) }} />
        <BuyButton href={buyUrl} placeholder={!buyUrl} data-testid="bookPage-buyButton">Buy on Amazon</BuyButton>

        {testimonials && testimonials.length > 0 && (
          <div className="testimonials" style={{ marginTop: '1.75rem' }}>
            {testimonials.map((t, i) => (
              <blockquote key={i} className="testimonial" data-testid={`bookPage-testimonial-${i}`}>
                &ldquo;{t.text}&rdquo;
                <footer>— {t.author}, {t.date} · {t.project}</footer>
              </blockquote>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default BookPage;

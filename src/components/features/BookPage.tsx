import React from 'react';
import '../ui/ui.css';
import BuyButton from '../ui/BuyButton';
import { Testimonial } from '../../data/hikes';
import { Acknowledgement } from '../../data/posts';

interface Props {
  bg?: string;
  title: string;
  publishedDate?: string;
  children: React.ReactNode;
  buyUrl?: string;
  acknowledgements?: Acknowledgement[];
  testimonials?: Testimonial[];
}

const BookPage: React.FC<Props> = ({ bg, title, publishedDate, children, buyUrl, acknowledgements, testimonials }) => {
  return (
    <section className="book-section" style={bg ? { backgroundImage: `url("${bg}")` } : {}} data-testid="bookPage">
      <div className="book-content ui-card">
        <h1>{title}</h1>
        {publishedDate && <p className="post-date">{publishedDate}</p>}
        <div className="book-summary">{children}</div>
        <BuyButton href={buyUrl} placeholder={!buyUrl} data-testid="bookPage-buyButton">Buy on Amazon</BuyButton>

        {acknowledgements && acknowledgements.length > 0 && (
          <section className="acknowledgements" data-testid="bookPage-acknowledgements">
            <h2>Acknowledgements</h2>
            <ul>
              {acknowledgements.map((entry, i) => (
                <li key={i}>
                  <strong>{entry.role}:</strong>{' '}
                  <a href={entry.url} target="_blank" rel="noopener noreferrer">
                    {entry.name}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        )}

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

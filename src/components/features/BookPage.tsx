import React from 'react';
import '../ui/ui.css';
import BuyButton from '../ui/BuyButton';
import { Testimonial } from '../../data/hikes';

interface Props {
  bg: string;
  title: string;
  summary: string;
  onBack: () => void;
  buyUrl?: string;
  testimonials?: Testimonial[];
}

const BookPage: React.FC<Props> = ({ bg, title, summary, onBack, buyUrl, testimonials }) => {
  return (
    <section className="book-section" style={{ backgroundImage: `url("${bg}")` }} data-testid="bookPage">
      <div className="book-content ui-card">
        <h1>{title}</h1>
        <div className="book-summary">
          {summary.split('\n\n').map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
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

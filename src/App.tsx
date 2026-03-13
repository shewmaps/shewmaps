import React, { useEffect } from 'react';

interface Hike {
  id: string;
  name: string;
  dates: string;
  season: string;
  miles: number;
  bookUrl?: string;
  color: string;
  testimonials?: Array<{ text: string; author: string; date: string; project: string }>;
}

const App: React.FC = () => {
  useEffect(() => {
    document.title = 'Brandon Shewmake';
  }, []);

  const hikes: Hike[] = [
    {
      id: 'camino-portugues',
      name: 'Camino Portugués',
      dates: 'Nov 2025',
      season: 'Autumn',
      miles: 100,
      color: '#F8811C'
    },
    {
      id: 'shikoku-pilgrimage',
      name: 'Shikoku Pilgrimage',
      dates: 'Apr–May 2024',
      season: 'Spring',
      miles: 750,
      color: '#F5DFDA'
    },
    {
      id: 'appalachian-trail',
      name: 'Appalachian Trail',
      dates: 'Mar–Aug 2017',
      season: 'Spring–Summer',
      miles: 2190,
      bookUrl: 'https://www.amazon.com/Walking-Dinner-Appalachian-Brandon-Shewmake/dp/B0F1L69MS2',
      color: '#98D983',
      testimonials: [
        {
          text: 'A refreshing and entertaining take on the AT hike.',
          author: 'Jonathan',
          date: 'May 2021',
          project: 'Walking to Dinner on the Appalachian Trail'
        },
        {
          text: 'There are several books out there about the AT but this one is such a unique perspective! Sméagol captures the beauty of everything from the places and the people to the food and the "must sees." I would suggest this book to anyone who is looking to hike the trail or even those that have hiked to recollect and remember just how incredible this adventure is!',
          author: 'Jennifer',
          date: 'Jan 2018',
          project: 'Walking to Dinner on the Appalachian Trail'
        }
      ]
    }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <nav className="nav">
          <a href="#home" className="logo" onClick={() => scrollToSection('home')}>
            shewmaps
          </a>
          <div className="nav-links">
            <a href="#hikes" onClick={() => scrollToSection('hikes')}>
              Hikes
            </a>
            <a href="#about" onClick={() => scrollToSection('about')}>
              About
            </a>
            <a href="#contact" onClick={() => scrollToSection('contact')}>
              Contact
            </a>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section id="home" className="section hero">
        <h1 className="hero-title">Brandon Shewmake</h1>
        <p className="hero-tagline">Thru-hiker | Authorship & Software Engineering</p>
        <p className="hero-mission">I walk long distances and document them through stories and maps.</p>
        <button
          className="cta-button"
          onClick={() => scrollToSection('hikes')}
        >
          Explore Hikes
        </button>
      </section>

      {/* Hikes */}
      <section id="hikes" className="section hikes-section">
        <h2 className="section-title">Hikes</h2>
        <div className="hikes-list">
          {hikes.map((hike) => (
              <div key={hike.id} className="hike-item" style={{ borderLeftColor: hike.color }}>
              <div className="hike-header">
                <h3 className="hike-name">{hike.name}</h3>
                {hike.bookUrl && (
                  <a href={hike.bookUrl} target="_blank" rel="noopener noreferrer" className="book-link">
                    Read the Book
                  </a>
                )}
              </div>
              <div className="hike-meta">
                <span><strong>{hike.miles.toLocaleString()}</strong> miles</span>
                <span>{hike.dates}</span>
                <span>{hike.season}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="section about-section">
        <h2 className="section-title">About</h2>

        <div className="about-subsection">
          <h3>Thru-Hiking</h3>
          <p>
            I started northbound on the Appalachian Trail in 2017. Since then, I've walked Japan's Shikoku Pilgrimage clockwise and a section of the Camino Portugués. The trail strips away everything unnecessary. Every meal tastes better. I come back different.
          </p>
        </div>

        <div className="about-subsection">
          <h3>Authorship</h3>
          <p>
            I write about the places I walk, the people I meet, the food I eat. I'm drawn to the stories of wild ingredients and traditional cooking techniques I encounter on the trail. These are the stories that stay with me. I publish them because I think they matter.
          </p>
          <div className="testimonials">
            {hikes.find(h => h.id === 'appalachian-trail')?.testimonials?.map((testimonial, idx) => (
              <blockquote key={idx} className="testimonial">
                "{testimonial.text}"
                <footer>— {testimonial.author}, {testimonial.date} · {testimonial.project}</footer>
              </blockquote>
            ))}
          </div>
        </div>

        <div className="about-subsection">
          <h3>Software Engineering</h3>
          <p>
            Ten years building full-stack applications in fintech—React, .NET Core, SQL Server. Still consulting. Expanding into GIS and mapping to bring journeys to life digitally.
          </p>
          <div className="testimonials">
            <blockquote className="testimonial">
              "I am going to miss working with Brandon. He really was starting to become part of the team. Whoever ends up with them will be lucky. They are smart and have a great work ethic."
              <footer>— Chris, Apr 2025 · Treasury Management App</footer>
            </blockquote>
            <blockquote className="testimonial">
              "While I knew Brandon would hit the ground running, I've been impressed by the effort he put in with getting Hoverfly up and running in OCP. Being the first time any of us had implemented it like we were, Brandon was key to getting it done—digging in, finding answers, trial and error."
              <footer>— Brian, Jan 2022 · Account Opening App</footer>
            </blockquote>
          </div>
        </div>

        <div className="about-subsection">
          <h3>Education</h3>
          <ul className="education-list">
            <li>
              <strong>Bachelor of Science in Computer Science</strong>
              <br />
              The University of Alabama, 2013
            </li>
            <li>
              <strong>Fundamentals of GIS</strong>
              <br />
              University of California, Davis, Jan 2026
            </li>
            <li>
              <strong>Critical Languages Program Award in Japanese</strong>
              <br />
              Samford University, May 2010
            </li>
          </ul>
        </div>

        <div className="about-subsection">
          <h3>Off-Trail</h3>
          <p>
            I study languages, cook with whatever I can find or forage, and visit my family at the Gulf of Mexico. These are the quiet moments between journeys.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section contact-section">
        <h2 className="section-title">Contact</h2>
        <p className="contact-message">I'd like to hear from you.</p>
        <div className="social-links">
          <a href="https://instagram.com/shewmaps" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
          <a href="https://youtube.com/@shewmaps" target="_blank" rel="noopener noreferrer">
            YouTube
          </a>
          <a href="https://linkedin.com/in/shewmaps" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </div>
        <p className="consulting-note">
          For consulting inquiries, <a href="https://linkedin.com/in/shewmaps" target="_blank" rel="noopener noreferrer">connect with me on LinkedIn</a>.
        </p>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2026 Brandon Shewmake. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
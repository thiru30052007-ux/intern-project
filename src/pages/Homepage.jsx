import { useNavigate } from 'react-router-dom';

const sports = [
  {
    id: 'cricket',
    title: 'Cricket',
    description: 'Professional cricket ground booking available.',
    image:
      'https://media.istockphoto.com/id/177427917/photo/close-up-of-red-cricket-ball-and-bat-sitting-on-grass.jpg?s=612x612&w=0&k=20&c=DcorerbBUeDNTfld3OclgHxCty4jih2yDCzipffX6zw=',
  },
  {
    id: 'football',
    title: 'Football',
    description: 'Modern football turf for matches and practice.',
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018',
  },
  {
    id: 'badminton',
    title: 'Badminton',
    description: 'Indoor badminton courts with quality lighting.',
    image: 'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea',
  },
];

export default function Homepage() {
  const navigate = useNavigate();

  return (
    <div>
      <section className="hero">
        <div className="hero-text">
          <h1>Outdoor Sports Academy Portal</h1>
          <p>Book sports grounds and join academy classes easily.</p>
          <div className="hero-actions">
            <button className="primary-button" onClick={() => navigate('/booking')}>
              Book Slot
            </button>
            <button className="secondary-button" onClick={() => navigate('/info')}>
              View Classes
            </button>
          </div>
        </div>
      </section>

      <section className="gallery-section">
        <h2>Sports Gallery</h2>
        <div className="cards">
          {sports.map((sport) => (
            <article className="card" key={sport.id}>
              <img src={sport.image} alt={sport.title} />
              <div className="card-body">
                <h3>{sport.title}</h3>
                <p>{sport.description}</p>
                <button className="primary-button" onClick={() => navigate(`/sports/${sport.id}`)}>
                  View Details
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contact">
        <h2>Contact Us</h2>
        <p>Email: playzone@gmail.com</p>
        <p>Phone: +91 9876543210</p>
        <p>Location: Tamil Nadu, India</p>
      </section>

      <footer className="footer">
        <p>© 2026 PlayZone - Outdoor Sports Academy Portal.</p>
      </footer>
    </div>
  );
}

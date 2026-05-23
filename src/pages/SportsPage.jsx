import { useParams, useNavigate } from 'react-router-dom';

const sportsData = {
  cricket: {
    title: 'Cricket Academy',
    description:
      'Our cricket academy provides professional coaching, batting practice, bowling sessions, fielding drills, and tournament preparation for students.',
    facilities: ['Professional Cricket Nets', 'Night Practice Facility', 'Fitness Training', 'Weekly Matches'],
    achievements: ['Won District Trophy - 2024', '15 State Level Players Selected', 'Best Cricket Academy Award - 2025', '50+ Tournament Wins'],
    heroClass: 'cricket-bg',
  },
  football: {
    title: 'Football Academy',
    description:
      'Our football academy provides turf practice, stamina training, teamwork coaching, and match preparation for beginners and professionals.',
    facilities: ['Modern Football Turf', 'Professional Coaches', 'Fitness & Warmup Sessions', 'Weekend Matches'],
    achievements: ['State Champions - 2025', '30+ Football Tournaments Conducted', 'Best Young Team Award', 'Professional Training Camps'],
    heroClass: 'football-bg',
  },
  badminton: {
    title: 'Badminton Academy',
    description:
      'Our badminton academy provides indoor court training, reflex practice, shuttle control sessions, and tournament preparation for students.',
    facilities: ['Indoor Courts', 'LED Lighting', 'Professional Coaches', 'Fitness Sessions'],
    achievements: ['National Junior Winners - 2025', '10+ District Champions', 'Best Indoor Sports Academy Award', 'State Tournament Finalists'],
    heroClass: 'badminton-bg',
  },
};

export default function SportsPage() {
  const { sportId } = useParams();
  const navigate = useNavigate();
  const sport = sportsData[sportId];

  if (!sport) {
    return (
      <div className="not-found-page">
        <h2>Sport not found</h2>
        <p>The page you are looking for does not exist.</p>
        <button className="primary-button" onClick={() => navigate('/')}>Go to Home</button>
      </div>
    );
  }

  return (
    <div>
      <div className={`sports-hero ${sport.heroClass}`}>
        <h1>{sport.title}</h1>
      </div>

      <div className="sports-content">
        <h2>About {sport.title.split(' ')[0]}</h2>
        <p>{sport.description}</p>

        <h2>Facilities</h2>
        <ul>
          {sport.facilities.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <h2>Achievements</h2>
        <ul>
          {sport.achievements.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <footer className="footer">
        <button className="secondary-button" onClick={() => navigate('/')}>Back To Home</button>
      </footer>
    </div>
  );
}

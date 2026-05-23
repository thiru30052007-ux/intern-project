import { useNavigate } from 'react-router-dom';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="not-found-page">
      <h2>Page not found</h2>
      <p>Sorry, we couldn’t find the page you were looking for.</p>
      <button className="primary-button" onClick={() => navigate('/')}>Return home</button>
    </div>
  );
}

import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Homepage from './pages/Homepage.jsx';
import Booking from './pages/Booking.jsx';
import Info from './pages/Info.jsx';
import SportsPage from './pages/SportsPage.jsx';
import NotFound from './pages/NotFound.jsx';
import './App.css';

export default function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <main className="app-main">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/info" element={<Info />} />
          <Route path="/sports/:sportId" element={<SportsPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}

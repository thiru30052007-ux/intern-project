import { NavLink } from 'react-router-dom';

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/booking', label: 'Slot Booking' },
  { to: '/info', label: 'Terms' },
];

export default function Navbar() {
  return (
    <header className="navbar">
      <h1 className="logo">PlayZone</h1>
      <nav>
        <ul>
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                end
                className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
          <li>
            <a className="nav-link" href="/#contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

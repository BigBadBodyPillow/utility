import { NavLink } from 'react-router-dom';
//css
import './Navbar.css';

export function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="nav-items">
          {/* <span>Links</span> */}
          {/* <span>Notes</span> */}
          {/* <span>Sheets</span> */}
          <NavLink to="/links">Links</NavLink>
          <NavLink to="/notes">Notes</NavLink>
          <NavLink to="/sheets">sheets</NavLink>
        </div>
      </div>
    </>
  );
}

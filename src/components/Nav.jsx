import { NavLink } from 'react-router-dom';

const links = [
    { to: '/', label: 'about', end: true },
    { to: '/resume', label: 'resume' },
    { to: '/projects', label: 'projects' },
];

export default function Nav() {
    return (
        <nav className="nav">
            <NavLink to="/" className="nav-logo">
                <span>~/</span>noahdelv
            </NavLink>
            <div className="nav-links">
                {links.map(({ to, label, end }) => (
                    <NavLink key={to} to={to} end={end}>
                        {label}
                    </NavLink>
                ))}
            </div>
        </nav>
    );
}

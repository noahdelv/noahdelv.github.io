import { profile } from '../data/profile';

export default function Footer() {
    return (
        <footer className="footer">
            <div>© {new Date().getFullYear()} NOAH ETHAN DEL VALLE</div>
            <div className="footer-links">
                <a href={profile.links.github} target="_blank" rel="noopener noreferrer">
                    GITHUB
                </a>
                <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer">
                    LINKEDIN
                </a>
            </div>
        </footer>
    );
}

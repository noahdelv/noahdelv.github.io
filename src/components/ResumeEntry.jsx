import { Link } from 'react-router-dom';

function Bullets({ items }) {
    return (
        <ul className="bullets">
            {items.map((text) => (
                <li className="bullet" key={text}>
                    <span>{text}</span>
                </li>
            ))}
        </ul>
    );
}

export default function ResumeEntry({ entry, variant = 'major', game = false, children }) {
    const isProject = variant === 'project';
    const bodyClass = ['resume-body', isProject && 'is-project', isProject && game && 'is-game']
        .filter(Boolean)
        .join(' ');

    return (
        <div className={isProject ? 'resume-entry' : 'resume-entry is-major'}>
            <div className="resume-date">{entry.date}</div>
            <div className={bodyClass}>
                <h3 className="resume-org">
                    {entry.slug ? <Link to={`/projects#${entry.slug}`}>{entry.org}</Link> : entry.org}
                </h3>
                <div className="resume-sub">{entry.sub}</div>
                {entry.bullets && <Bullets items={entry.bullets} />}
                {children}
            </div>
        </div>
    );
}

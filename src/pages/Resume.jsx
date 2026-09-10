import { profile } from '../data/profile';
import { education, experience, softwareProjects, gameProjects } from '../data/resume';
import { useTitle } from '../hooks';
import { ArrowUpRight, Printer } from '../components/Icons';
import SectionLabel from '../components/SectionLabel';
import SpecTable from '../components/SpecTable';
import SkillsGrid from '../components/SkillsGrid';
import ResumeEntry from '../components/ResumeEntry';

const asideRows = [
    { key: 'LOCATION', value: 'Ann Arbor, MI' },
    { key: 'DEGREE', value: 'BSE Computer Science' },
];

export default function Resume() {
    useTitle('Resume — Noah Del Valle');

    return (
        <>
            <header className="resume-head">
                <div className="resume-head-main">
                    <div className="section-label is-bare">
                        [ RESUME ]
                    </div>
                    <h1 className="page-title">{profile.name.toUpperCase()}</h1>
                    <div className="btn-row">
                        <a
                            className="btn btn-outline"
                            href={profile.links.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            LINKEDIN
                            <ArrowUpRight />
                        </a>
                        <a
                            className="btn btn-outline"
                            href={profile.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            GITHUB
                            <ArrowUpRight />
                        </a>
                        <button type="button" className="btn btn-primary" onClick={() => window.print()}>
                            PRINT / SAVE PDF
                            <Printer />
                        </button>
                    </div>
                </div>
                <div className="resume-head-aside">
                    <SpecTable rows={asideRows} status={profile.status} />
                </div>
            </header>

            <SectionLabel>EDUCATION</SectionLabel>
            <ResumeEntry entry={education}>
                <div className="coursework">
                    <div className="coursework-label">COURSEWORK</div>
                    <p className="prose" style={{ fontSize: 14 }}>
                        {education.coursework}
                    </p>
                </div>
            </ResumeEntry>

            <SectionLabel>EXPERIENCE</SectionLabel>
            {experience.map((entry) => (
                <ResumeEntry entry={entry} key={entry.org} />
            ))}

            <SectionLabel>TECHNICAL SKILLS</SectionLabel>
            <SkillsGrid />

            <SectionLabel>SOFTWARE PROJECTS</SectionLabel>
            {softwareProjects.map((entry) => (
                <ResumeEntry entry={entry} variant="project" key={entry.org} />
            ))}

            <SectionLabel game>GAME DEVELOPMENT PROJECTS</SectionLabel>
            {gameProjects.map((entry) => (
                <ResumeEntry entry={entry} variant="project" game key={entry.org} />
            ))}
        </>
    );
}

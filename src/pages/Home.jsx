import { Link } from 'react-router-dom';
import { profile } from '../data/profile';
import { projects } from '../data/projects';
import { useTitle } from '../hooks';
import { ArrowRight } from '../components/Icons';
import SectionLabel from '../components/SectionLabel';
import SpecTable from '../components/SpecTable';
import ProjectIndex from '../components/ProjectIndex';
import SkillsGrid from '../components/SkillsGrid';
import portrait from '../assets/avatar.jpg';

export default function Home() {
    useTitle('Noah Del Valle');

    return (
        <>
            <section className="hero">
                <div className="hero-main">
                    <div className="hero-eyebrow">{profile.eyebrow}</div>
                    <h1 className="hero-name">
                        NOAH ETHAN
                        <br />
                        DEL VALLE
                    </h1>
                    <div className="hero-rule" />
                    <p className="prose hero-tagline">{profile.tagline}</p>
                    <div className="btn-row">
                        <Link className="btn btn-primary" to="/projects">
                            VIEW PROJECTS
                            <ArrowRight />
                        </Link>
                        <Link className="btn btn-outline" to="/resume">
                            RESUME
                        </Link>
                    </div>
                </div>
                <div className="hero-aside">
                    <img
                        className="hero-portrait"
                        src={portrait}
                        alt="Noah Del Valle"
                        width="1000"
                        height="1000"
                    />
                    <SpecTable rows={profile.spec} status={profile.status} />
                </div>
            </section>

            <SectionLabel>ABOUT</SectionLabel>
            <section className="about">
                <div className="about-label">BACKGROUND</div>
                <div className="about-body prose">
                    {profile.about.map((paragraph) => (
                        <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                    ))}
                </div>
            </section>

            <SectionLabel meta={`${String(projects.length).padStart(2, '0')} entries — filter on the projects page`}>
                PROJECT INDEX
            </SectionLabel>
            <ProjectIndex />

            <SectionLabel>SKILLS</SectionLabel>
            <SkillsGrid />
        </>
    );
}

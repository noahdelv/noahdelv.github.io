import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

export default function ProjectIndex() {
    return (
        <div>
            <div className="index-head" aria-hidden="true">
                <div>ID</div>
                <div>PROJECT</div>
                <div>STACK</div>
                <div>FOCUS</div>
                <div>PERIOD</div>
                <div style={{ textAlign: 'right' }}>TYPE</div>
            </div>

            {projects.map((project) => (
                <Link className="index-row" to={`/projects#${project.slug}`} key={project.id}>
                    <div className="index-id">{project.id}</div>
                    <div className="index-name">{project.name}</div>
                    <div className="index-cell">{project.indexStack}</div>
                    <div className="index-cell">{project.indexFocus}</div>
                    <div className="index-cell">{project.periodShort}</div>
                    <div className={project.type === 'GAME' ? 'index-type is-game' : 'index-type'}>
                        {project.type}
                    </div>
                </Link>
            ))}
        </div>
    );
}

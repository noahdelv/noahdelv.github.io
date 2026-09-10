import { useMemo, useState } from 'react';
import { projects, collectTags, countByType } from '../data/projects';
import { useTitle } from '../hooks';
import ProjectFilters from '../components/ProjectFilters';
import ProjectEntry from '../components/ProjectEntry';

const stackTags = collectTags('stack');
const focusTags = collectTags('focus');
const counts = { ALL: countByType('ALL'), SWE: countByType('SWE'), GAME: countByType('GAME') };

export default function Projects() {
    useTitle('Projects — Noah Del Valle');

    const [type, setType] = useState('ALL');
    const [activeTags, setActiveTags] = useState([]);

    const visible = useMemo(
        () =>
            projects.filter((project) => {
                if (type !== 'ALL' && project.type !== type) return false;
                return activeTags.every(
                    (tag) => project.stack.includes(tag) || project.focus.includes(tag),
                );
            }),
        [type, activeTags],
    );

    function toggleTag(tag) {
        setActiveTags((current) =>
            current.includes(tag) ? current.filter((t) => t !== tag) : [...current, tag],
        );
    }

    function clear() {
        setType('ALL');
        setActiveTags([]);
    }

    return (
        <>
            <header className="page-head">
                <div className="section-label is-bare">
                    [ PROJECTS ]
                </div>
                <h1 className="page-title">PROJECT INDEX</h1>
                <p className="prose page-intro">
                    Work spanning game development and software engineering. Filter by type, by what it
                    was built with, or by the problem it solves.
                </p>
            </header>

            <ProjectFilters
                type={type}
                onType={setType}
                stackTags={stackTags}
                focusTags={focusTags}
                activeTags={activeTags}
                onToggleTag={toggleTag}
                onClear={clear}
                shown={visible.length}
                total={projects.length}
                counts={counts}
            />

            {visible.length === 0 ? (
                <div className="empty-state">
                    <p>NO PROJECTS MATCH THIS COMBINATION</p>
                    <button type="button" className="clear-btn" onClick={clear}>
                        CLEAR FILTERS
                    </button>
                </div>
            ) : (
                visible.map((project) => <ProjectEntry project={project} key={project.id} />)
            )}
        </>
    );
}

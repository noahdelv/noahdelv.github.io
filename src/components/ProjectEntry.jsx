import { ArrowUpRight, Lock } from './Icons';

function MetaBlock({ label, items }) {
    return (
        <div className="meta-block">
            <div className="meta-label">{label}</div>
            <div className="meta-list">
                {items.map((item) => (
                    <span key={item}>{item}</span>
                ))}
            </div>
        </div>
    );
}

export default function ProjectEntry({ project }) {
    const isGame = project.type === 'GAME';

    return (
        <article className="entry" id={project.slug}>
            <div className="entry-meta">
                <div className="entry-meta-head">
                    <div className="entry-id">{project.id}</div>
                    <div className={isGame ? 'type-badge is-game' : 'type-badge'}>{project.type}</div>
                </div>
                <div className="entry-rule" />
                <div className="meta-block">
                    <div className="meta-label">PERIOD</div>
                    <div className="meta-value">{project.period}</div>
                </div>
                <MetaBlock label="STACK" items={project.stack} />
                <MetaBlock label="FOCUS" items={project.focus} />
            </div>

            <div className="entry-body">
                <h2 className="entry-title">{project.name}</h2>
                <p className="prose">{project.summary}</p>

                {project.note && (
                    <div className="repo-note">
                        <Lock />
                        {project.note}
                    </div>
                )}

                {project.links && (
                    <div className="btn-row">
                        {project.links.map(({ label, href }) => (
                            <a
                                className="btn btn-outline"
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                key={href}
                            >
                                {label}
                                <ArrowUpRight />
                            </a>
                        ))}
                    </div>
                )}

                {project.image && (
                    <img
                        className="entry-shot"
                        src={project.image.src}
                        alt={project.image.alt}
                        height={project.image.height}
                        style={{ height: project.image.height }}
                        loading="lazy"
                    />
                )}

                {project.credit && (
                    <p className="entry-credit">
                        Screenshot from{' '}
                        <a href={project.credit.href} target="_blank" rel="noopener noreferrer">
                            {project.credit.text}
                        </a>{' '}
                        {project.credit.tail}{' '}
                        <a href={project.credit.license.href} target="_blank" rel="noopener noreferrer">
                            {project.credit.license.text}
                        </a>
                        .
                    </p>
                )}

                {project.embed && (
                    <div className="embed-card">
                        <div className="embed-meta">
                            <div className="embed-title">{project.embed.title}</div>
                            <div className="embed-sub">{project.embed.sub}</div>
                        </div>
                        <a
                            className="btn btn-outline"
                            href={project.embed.href}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            PLAY
                            <ArrowUpRight />
                        </a>
                    </div>
                )}
            </div>
        </article>
    );
}

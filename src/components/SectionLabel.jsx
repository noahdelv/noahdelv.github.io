export default function SectionLabel({ children, meta, game = false }) {
    const label = <div className={game ? 'section-label is-game' : 'section-label'}>[ {children} ]</div>;
    if (!meta) return label;
    return (
        <div className="section-head">
            {label}
            <div className="section-head-meta">{meta}</div>
        </div>
    );
}

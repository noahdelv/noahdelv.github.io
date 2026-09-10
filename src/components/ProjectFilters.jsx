const TYPES = ['ALL', 'SWE', 'GAME'];

function pad(n) {
    return String(n).padStart(2, '0');
}

function ChipRail({ legend, tags, active, onToggle }) {
    return (
        <div className="filter-row">
            <div className="filter-legend" id={`legend-${legend}`}>
                {legend}
            </div>
            <div className="chip-rail" role="group" aria-labelledby={`legend-${legend}`}>
                {tags.map((tag) => (
                    <button
                        type="button"
                        className="chip"
                        key={tag}
                        aria-pressed={active.includes(tag)}
                        onClick={() => onToggle(tag)}
                    >
                        {tag}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default function ProjectFilters({
    type,
    onType,
    stackTags,
    focusTags,
    activeTags,
    onToggleTag,
    onClear,
    shown,
    total,
    counts,
}) {
    const anyFilter = type !== 'ALL' || activeTags.length > 0;

    return (
        <div className="filters">
            <div className="filter-row is-type">
                <div className="filter-legend" id="legend-type">
                    TYPE
                </div>
                <div className="type-group" role="group" aria-labelledby="legend-type">
                    {TYPES.map((t) => (
                        <button
                            type="button"
                            className="type-btn"
                            key={t}
                            aria-pressed={type === t}
                            onClick={() => onType(t)}
                        >
                            {t} · {pad(counts[t])}
                        </button>
                    ))}
                </div>
            </div>

            <ChipRail legend="STACK" tags={stackTags} active={activeTags} onToggle={onToggleTag} />
            <ChipRail legend="FOCUS" tags={focusTags} active={activeTags} onToggle={onToggleTag} />

            <div className="filter-status">
                <div className={anyFilter ? 'status-text is-active' : 'status-text'} role="status">
                    SHOWING {pad(shown)} OF {pad(total)}
                </div>
                {anyFilter && (
                    <button type="button" className="clear-btn" onClick={onClear}>
                        CLEAR FILTERS
                    </button>
                )}
            </div>
        </div>
    );
}

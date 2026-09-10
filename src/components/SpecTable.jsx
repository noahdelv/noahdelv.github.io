export default function SpecTable({ rows, status }) {
    return (
        <div>
            {rows.map(({ key, value }) => (
                <div className="spec-row" key={key}>
                    <div className="spec-key">{key}</div>
                    <div className="spec-value">{value}</div>
                </div>
            ))}
            {status && (
                <div className="spec-row">
                    <div className="spec-key">STATUS</div>
                    <div className="spec-status">
                        <span className="spec-dot" aria-hidden="true" />
                        {status}
                    </div>
                </div>
            )}
        </div>
    );
}

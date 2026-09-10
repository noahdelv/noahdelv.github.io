const base = {
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
};

export function ArrowRight({ size = 15 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" {...base} aria-hidden="true">
            <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
    );
}

export function ArrowUpRight({ size = 12 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" {...base} aria-hidden="true">
            <path d="M7 17 17 7M8 7h9v9" />
        </svg>
    );
}

export function Lock({ size = 13 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" {...base} strokeWidth={1.8} aria-hidden="true">
            <rect x="4" y="11" width="16" height="10" />
            <path d="M8 11V7a4 4 0 0 1 8 0v4" />
        </svg>
    );
}

export function Printer({ size = 13 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" {...base} strokeWidth={1.8} aria-hidden="true">
            <path d="M7 9V3h10v6M7 19H5a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2" />
            <path d="M7 15h10v6H7z" />
        </svg>
    );
}

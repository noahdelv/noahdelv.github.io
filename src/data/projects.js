import deepDivideShot from '../assets/deep-divide.jpg';
import searchEngineShot from '../assets/search-engine.jpg';
import socialPlatformShot from '../assets/social-platform.jpg';

const EECS485_CREDIT = {
    href: 'https://eecs485staff.github.io/p3-insta485-clientside/',
    text: 'the EECS 485 project specification',
    tail: 'by Andrew DeOrio and the EECS 485 staff, licensed under',
    license: {
        href: 'https://creativecommons.org/licenses/by-nc/4.0/',
        text: 'CC BY-NC 4.0',
    },
};

/* The single source of truth for both the home index and the projects page.
   `stack` is what it was built with; `focus` is the technique or the problem.
   The filter rails derive from these two arrays, so adding a project here
   extends the filters automatically. */
export const projects = [
    {
        id: '001',
        slug: 'prediction-market-tracker',
        name: 'prediction-market-tracker',
        type: 'SWE',
        period: 'Jan 2026 — Present',
        periodShort: '2026—',
        stack: ['typescript', 'react', 'node / express', 'postgresql', 'prisma'],
        focus: ['data pipelines', 'trader scoring', 'analytics dashboards'],
        indexStack: 'ts / react / postgres',
        indexFocus: 'data pipelines / scoring',
        summary:
            'A prediction market intelligence platform that identifies high-conviction traders by tracking whale-sized trades across Polymarket and Kalshi, scoring wallets by demonstrated prediction skill. A data ingestion pipeline processes 1,000+ market events per hour into PostgreSQL via Prisma ORM, powering analytics dashboards and trading charts. A scoring engine evaluates 2,000+ wallets across resolved markets using win-rate and Brier score metrics, surfacing ranked forecasters via a React leaderboard backed by an Express REST API.',
        note: 'Source available on request — private repository, active development',
    },
    {
        id: '002',
        slug: 'file-network-server',
        name: 'file-network-server',
        type: 'SWE',
        period: 'Jul — Aug 2026',
        periodShort: '2026',
        stack: ['c++', 'python'],
        focus: ['concurrency', 'thread safety', 'custom protocols'],
        indexStack: 'c++ / python',
        indexFocus: 'concurrency / thread safety',
        summary:
            'A multi-client networked file system server in C++, built as a team project at the University of Michigan. The server supports remote file operations over a custom client–server protocol using a multi-threaded architecture with mutexes and RAII-style lock guards, enforcing atomic file and directory operations under concurrent access. The request/response handling layer includes full validation and error handling; the system was stress-tested to verify correctness and reliability under high contention.',
        note: 'Source available on request — private academic repository',
    },
    {
        id: '003',
        slug: 'distributed-search-engine',
        name: 'distributed-search-engine',
        type: 'SWE',
        period: 'Oct — Nov 2024',
        periodShort: '2024',
        stack: ['python', 'flask', 'sqlite'],
        focus: ['mapreduce', 'tf-idf', 'pagerank', 'information retrieval'],
        indexStack: 'python / flask / sqlite',
        indexFocus: 'mapreduce / tf-idf / pagerank',
        summary:
            'A distributed search engine indexing 10,000+ Wikipedia articles, built at the University of Michigan. A MapReduce pipeline builds a segmented inverted index with tf-idf weighting and document normalization. A Flask REST index server loads index segments, PageRank data, and stopwords into memory to serve ranked results using cosine similarity and weighted PageRank scoring. A search aggregator performs concurrent API requests across multiple index servers, merges ranked results, and serves a dynamic search interface backed by SQLite metadata storage.',
        note: 'Source available on request — private academic repository',
        image: { src: searchEngineShot, alt: 'Distributed search engine interface', height: 300 },
        credit: EECS485_CREDIT,
    },
    {
        id: '004',
        slug: 'social-media-platform',
        name: 'social-media-platform',
        type: 'SWE',
        period: 'Sep — Oct 2024',
        periodShort: '2024',
        stack: ['react', 'python', 'flask', 'aws ec2'],
        focus: ['rest api design', 'relational modeling', 'infinite scroll'],
        indexStack: 'react / flask / aws ec2',
        indexFocus: 'rest apis / relational modeling',
        summary:
            'An Instagram-style social media platform with a React frontend and Flask REST API backend, built at the University of Michigan. Supports authenticated CRUD operations, pagination, and proper HTTP status handling for posts, comments, and likes. Features include infinite scroll, double-click-to-like interactions, and real-time feed updates via asynchronous Fetch API requests, backed by a normalized relational schema with optimized SQL queries for personalized feeds. Deployed to AWS EC2 with a configured Webpack build pipeline.',
        note: 'Source available on request — private academic repository',
        image: { src: socialPlatformShot, alt: 'Social platform interface', height: 300 },
        credit: EECS485_CREDIT,
    },
    {
        id: '005',
        slug: 'deep-divide',
        name: 'deep-divide',
        type: 'GAME',
        period: '2024 — Present',
        periodShort: '2024—',
        stack: ['unity', 'c#'],
        focus: ['co-op design', 'ui/ux', 'onboarding', 'game feel'],
        indexStack: 'unity / c#',
        indexFocus: 'co-op design / game feel',
        summary:
            'A two-player local co-op underwater exploration game. One player captains the boat — navigating by radar and fending off pirate raids — while the other dives below to loot shipwrecks and reefs before their oxygen runs out. Players hit a daily quota at the merchant, buy upgrades, and push deeper across a five-day run, losing everything they carry if they die underwater. I contributed gameplay systems, UI/UX design, onboarding (tutorial, intro cinematic, contextual hints), diving feel (oxygen HUD, crosshair, underwater effects), and physics handling. Presented at a university game expo; in continued development toward a full public release.',
        links: [{ label: 'VIEW ON GAMEJOLT', href: 'https://gamejolt.com/games/deep-divide/1065449' }],
        image: { src: deepDivideShot, alt: 'Deep Divide gameplay', height: 340 },
    },
    {
        id: '006',
        slug: 'zelda-nes-remaster',
        name: 'zelda-nes-remaster',
        type: 'GAME',
        period: '2024',
        periodShort: '2024',
        stack: ['unity', 'c#'],
        focus: ['enemy ai', 'combat systems', 'modular architecture'],
        indexStack: 'unity / c#',
        indexFocus: 'enemy ai / combat systems',
        summary:
            'A Unity-based recreation of The Legend of Zelda (NES), developed as a team project. I designed and integrated core gameplay systems — combat, enemy AI, UI, and room transitions — while implementing modular, reusable C# architecture to support the overall gameplay structure. Contributed to testing and debugging throughout development to ensure project stability.',
        embed: {
            title: 'The Legend of Zelda — NES (Remake)',
            sub: 'itch.io · noahdelv',
            href: 'https://noahdelv.itch.io/the-legend-of-zelda-nes',
        },
    },
    {
        id: '007',
        slug: 'observed',
        name: 'observed',
        type: 'GAME',
        period: '2024',
        periodShort: '2024',
        stack: ['unity', 'c#'],
        focus: ['pubsub architecture', 'vision systems', 'player movement'],
        indexStack: 'unity / c#',
        indexFocus: 'pubsub / vision systems',
        summary:
            'A 2D puzzle-platformer built in Unity centered around a vision-based freeze mechanic. Players use a directional flashlight to freeze enemies and platforms within their line of sight, transforming hazards into traversal tools and puzzle elements. I designed and implemented the core vision-cone detection and freeze system using a PubSub/EventBus architecture to keep systems modular and decoupled. Also developed player movement and aiming, reactive moving platforms, vision-blocking mechanics, a jump system, audio feedback integration, and camera refinements.',
        embed: {
            title: 'Observed',
            sub: 'itch.io · noahdelv',
            href: 'https://noahdelv.itch.io/observed',
        },
    },
];

export const skills = [
    { label: 'LANGUAGES', items: ['c++', 'typescript', 'javascript', 'python', 'c#', 'sql'] },
    { label: 'FRAMEWORKS', items: ['react', 'node.js', 'express', 'flask', 'prisma', 'unity'] },
    { label: 'DATABASES', items: ['postgresql', 'mysql', 'mongodb', 'sqlite'] },
    { label: 'TOOLS & INFRA', items: ['aws ec2', 'docker', 'git', 'webpack', 'jira'] },
];

/* Distinct values in first-appearance order, for the filter rails. */
export function collectTags(field) {
    const seen = [];
    for (const project of projects) {
        for (const tag of project[field]) {
            if (!seen.includes(tag)) seen.push(tag);
        }
    }
    return seen;
}

export function countByType(type) {
    return type === 'ALL' ? projects.length : projects.filter((p) => p.type === type).length;
}

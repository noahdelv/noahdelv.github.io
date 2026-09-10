export const education = {
    date: 'Expected Dec 2026',
    org: 'University of Michigan College of Engineering',
    sub: 'Bachelor of Science in Engineering, Computer Science — Ann Arbor, MI',
    coursework:
        'Data Structures and Algorithms, Operating Systems, Computer Security, Computer Organization, Web Systems, Database Management Systems, Computer Game Design, Statistical Computing',
};

export const experience = [
    {
        date: 'Jan 2026 — Present',
        org: 'Handshake AI',
        sub: 'AI Data Specialist — Project Hedgehog — Remote',
        bullets: [
            'Design adversarial prompts to expose failure modes in multimodal LLM systems, improving robustness across edge cases and reasoning tasks.',
            'Process and refine hundreds of video training assets for computer vision datasets, producing diverse model-ready media for large-scale AI training pipelines.',
            'Execute computer vision annotation tasks, including bounding box placement and video masking, to advance spatial recognition and object detection model training.',
        ],
    },
];

export const softwareProjects = [
    {
        date: 'Jan 2026 — Present',
        org: 'Prediction Market Tracker',
        slug: 'prediction-market-tracker',
        sub: 'TypeScript, React, Node.js, Express, PostgreSQL, Prisma',
        bullets: [
            'Built a prediction market intelligence platform identifying high-conviction traders by tracking whale-sized trades across Polymarket and Kalshi, scoring wallets by demonstrated prediction skill.',
            'Built a data ingestion pipeline processing 1,000+ market events/hour into PostgreSQL via Prisma ORM, powering analytics dashboards and trading charts.',
            'Implemented a trader scoring engine evaluating 2,000+ wallets across resolved markets using win-rate and Brier score metrics, surfacing ranked forecasters via a React leaderboard backed by an Express REST API.',
        ],
    },
    {
        date: 'Nov — Dec 2025',
        org: 'File Network Server',
        slug: 'file-network-server',
        sub: 'C++, Python, Multi-threading, Concurrency — University of Michigan',
        bullets: [
            'Collaborated on a team to design and implement a multi-client networked file system server in C++, supporting remote file operations over a custom client–server protocol.',
            'Built a multi-threaded, thread-safe server architecture using mutexes and RAII-style lock guards, enforcing atomic file and directory operations with strong consistency under concurrent access.',
            'Developed a robust request/response handling layer with validation and error handling, and stress-tested the system to ensure correctness and reliability under high contention.',
        ],
    },
    {
        date: 'Oct — Nov 2024',
        org: 'Distributed Search Engine',
        slug: 'distributed-search-engine',
        sub: 'Python, Flask, MapReduce, SQLite, Information Retrieval — University of Michigan',
        bullets: [
            'Designed and implemented a distributed search engine indexing 10,000+ Wikipedia articles using a MapReduce pipeline to build a segmented inverted index with tf-idf weighting and document normalization.',
            'Built a Flask REST index server that loads inverted index segments, PageRank data, and stopwords into memory to serve ranked results using cosine similarity and weighted PageRank scoring.',
            'Implemented a search aggregator performing concurrent API requests across multiple index servers, merging ranked results, and serving a dynamic search interface backed by SQLite metadata storage.',
        ],
    },
    {
        date: 'Sep — Oct 2024',
        org: 'Full-Stack Social Media Platform',
        slug: 'social-media-platform',
        sub: 'React, Python, Flask, AWS EC2, REST API — University of Michigan',
        bullets: [
            'Built an Instagram-style social media platform with a React frontend and Flask REST API backend, supporting authenticated CRUD operations, pagination, and proper HTTP status handling for posts, comments, and likes.',
            'Implemented dynamic client-side features including infinite scroll, double-click-to-like interactions, and real-time feed updates via asynchronous Fetch API requests, backed by a normalized relational schema with optimized SQL queries for personalized feeds.',
            'Deployed the application to AWS EC2, configuring the server environment and Webpack build pipeline.',
        ],
    },
];

export const gameProjects = [
    {
        date: '2024 — Present',
        org: 'Deep Divide',
        slug: 'deep-divide',
        sub: 'Unity, C# — Two-Player Co-op Underwater Exploration',
        bullets: [
            'Contributed gameplay systems, UI/UX design, onboarding (tutorial, intro cinematic, contextual hints), diving feel (oxygen HUD, crosshair, underwater effects), and physics handling.',
            'Presented at a university game expo; in continued development toward a full public release on itch.io and GameJolt.',
        ],
    },
    {
        date: '2024',
        org: 'The Legend of Zelda NES (Unity Remaster)',
        slug: 'zelda-nes-remaster',
        sub: 'Unity, C#',
        bullets: [
            'Developed and integrated core gameplay systems including combat, enemy AI, UI, and room interactions while implementing modular, reusable C# architecture.',
            'Contributed to testing and debugging throughout development to ensure project stability.',
        ],
    },
    {
        date: '2024',
        org: 'Observed',
        slug: 'observed',
        sub: 'Unity, C# — 2D Puzzle-Platformer',
        bullets: [
            'Designed and implemented a vision-cone detection and freeze mechanic using a PubSub/EventBus architecture to keep gameplay systems modular and decoupled.',
            'Developed player movement and aiming systems, reactive moving platforms, vision-blocking mechanics, audio feedback integration, and camera refinements.',
        ],
    },
];

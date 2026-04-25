const navLinks = [
  { href: "#sighting", label: "The Sighting" },
  { href: "#experience-notes", label: "Recent Sightings" },
  { href: "#field-notes", label: "Featured Specimens" },
  { href: "#migration", label: "Migration" },
];

const taxonomy = [
  ["Discipline", "Computer Science student & builder"],
  ["Temperament", "Research-driven, product-minded, execution-focused"],
  ["Genus", "ML x Full-stack x Systems"],
];

const statistics = [
  ["Languages", "Python, SQL, JavaScript, TypeScript, Java, Swift"],
  [
    "Frameworks/Tools",
    "Flask, React, React Native, Node.js, MongoDB, SQLite, Docker",
  ],
  ["AI/ML", "scikit-learn, OpenCV, LangGraph, Hugging Face, PySR, Pandas"],
  ["Collaboration", "Git, GitHub, Agile, code review, API documentation"],
];

const projects = [
  {
    title: "Hablo (c0mpiled-6 Hackathon)",
    stack: "TypeScript, ReactJS, ElevenLabs, Supabase",
    link: "https://github.com/Cloudhoppr/hablo",
    highlights: [
      "Pioneered AI-powered voice-first Spanish coach with real-time voice dialogue offering personalized pronunciation feedback.",
      "Developed half-duplex turn-taking with live transcription via Eleven Multilingual v2 and dual-channel waveform visualization using React.",
    ],
    note: "Voice-first coaching with conversational latency and feedback loops tuned for rapid speaking practice.",
  },
  {
    title: "Conduit (Hacklytics 2026)",
    stack: "TypeScript, ReactJS, React Native, SQLite, ElevenLabs, Three.js",
    link: "https://devpost.com/software/conduit-8bhgt4",
    highlights: [
      "Built web and iOS apps for AI-powered wastewater operations delivering real-time sensor monitoring across 11 parameters.",
      "Engineered a cross-platform monorepo with SQLite via Prisma ORM, ElevenLabs voice copilot, and LiDAR-based 3D point cloud scanning.",
    ],
    note: "From sensor streams to actionable operations intelligence across mobile and web surfaces.",
  },
  {
    title: "PatentSync (TartanHacks 2026)",
    stack: "Python, Node.js, XRP Ledger, Pinata Cloud",
    link: "https://github.com/Cloudhoppr/PatentSync",
    highlights: [
      "Engineered a blockchain patent tokenization platform that reduces IP transfer time between enterprises from months to seconds.",
      "Developed on-chain patent storage as NFTs, SHA-256 content hashing with IPFS pinning, and IP transfers with custody tracking via escrow.",
    ],
    note: "Tokenized IP transfer architecture built for traceability, verification, and enterprise handoff speed.",
  },
  {
    title: "RiskyRag (NexHacks 2026)",
    stack: "Python, ReactJS, LangGraph, Convex, BeautifulSoup, OpenRouter",
    link: "https://riskyrag.guustgoossens.workers.dev",
    highlights: [
      "Pioneered a novel benchmark for LLM reasoning by building agents that play a custom browser implementation of strategy game Risk.",
      "Engineered tool-calling gameplay and temporal RAG filtration to prevent knowledge leakage across 500+ historical events.",
    ],
    note: "Agentic evaluation environment focused on reasoning quality over long-horizon strategic state.",
  },
];

const habitat = [
  ["Institution", "The Pennsylvania State University - University Park"],
  ["Program", "B.S. in Computer Science"],
  ["Graduating", "May 2028"],
  ["Academic record", "GPA: 3.53/4.00, Dean’s List"],
];

const protocolTags = [
  "Python",
  "TypeScript",
  "React",
  "Flask",
  "LangGraph",
  "XRP Ledger",
];

const sightings = [
  {
    title: "Research impact",
    body: "Pioneered noninvasive cattle thermoregulation prediction using symbolic regression, custom pipelines, and feature engineering.",
    icon: "chip",
  },
  {
    title: "Product traction",
    body: "Generated 700+ new Perplexity signups at Penn State through targeted partnerships and peer-to-peer growth campaigns.",
    icon: "cloud",
  },
];

const experiences = [
  {
    organization: "HandsForHearts",
    timeframe: "March 2026 - Present",
    role: "Lead Developer and Founder",
    location: "New Haven, CT",
    highlights: [
      "Developed Swift integrations with Apple HealthKit to stream ECG data from Apple Watch and trigger SOS alerts on cardiac arrest detection.",
      "Fine-tuned Gemma 4 model to detect cardiac arrests from single-lead ECG waveforms and output JSON to drive a low-latency alert pipeline.",
    ],
  },
  {
    organization: "The Pennsylvania State University",
    timeframe: "May 2025 - Present",
    role: "Machine Learning Research Assistant",
    location: "University Park, PA",
    highlights: [
      "Pioneered noninvasive prediction of cattle thermoregulation using symbolic regression, custom data pipelines, and feature engineering.",
      "Reduced manual estimation of turkey weights by building a segmented RGB image training dataset for a ResNet-50 CNN model.",
    ],
  },
  {
    organization: "Parkner (Startup)",
    timeframe: "Feb 2025 - May 2025",
    role: "Product Lead and Co-founder",
    location: "University Park, PA",
    highlights: [
      "Increased user engagement by 35% through A/B testing and iterative Figma UI refinement in collaboration with the Design Lead.",
      "Defined 3 product features in the PRD using quantitative and qualitative analysis on 16 survey responses.",
    ],
  },
  {
    organization: "Penn State Advanced Vehicles Team",
    timeframe: "Feb 2025 - May 2025",
    role: "Guidance-Navigation-Controls Engineer",
    location: "University Park, PA",
    highlights: [
      "Enhanced autonomous navigation accuracy by 20% by refining Dijkstra implementations using LiDAR and map data.",
      "Reduced onboarding time by 40% by designing modular control architecture with clear component interfaces.",
    ],
  },
  {
    organization: "Perplexity AI",
    timeframe: "Jan 2025 - May 2025",
    role: "Campus Strategist",
    location: "University Park, PA",
    highlights: [
      "Generated 700+ new signups at Penn State through targeted club partnerships and peer-to-peer marketing campaigns.",
      "Organized 4 stakeholder meetings to improve product-market-fit insights by documenting integration challenges.",
    ],
  },
  {
    organization: "CELCOM Solutions",
    timeframe: "Jun 2024 - Aug 2024",
    role: "Software Engineering Intern",
    location: "Doha, Qatar",
    highlights: [
      "Reduced storage costs by 10% by engineering a Flask REST API to automate CDR data archiving across configurable retention timelines.",
      "Streamlined multi-engineer collaboration by enforcing Git branching strategies and pull request workflows.",
    ],
  },
];

const contacts = [
  [
    "Email",
    "trivikram.sunil11@gmail.com",
    "mailto:trivikram.sunil11@gmail.com",
  ],
  ["GitHub", "github.com/Cloudhoppr", "https://github.com/Cloudhoppr"],
  [
    "LinkedIn",
    "linkedin.com/in/trivi-sunil",
    "https://linkedin.com/in/trivi-sunil",
  ],
];

function App() {
  return (
    <div className="page-shell">
      <article className="folio-page">
        <FlowerDecoration />
        <FernDecoration />
        <BirdDecoration />
        <span className="blot blot-1" aria-hidden="true" />
        <span className="blot blot-2" aria-hidden="true" />

        <header className="topbar">
          <a className="brand" href="#sighting">
            The Field Naturalist&apos;s Folio
          </a>

          <nav className="nav" aria-label="Primary">
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                aria-current={index === 0 ? "page" : undefined}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <details className="menu">
            <summary aria-label="Open navigation">
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M4 7H20M4 12H20M4 17H20"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            </summary>
            <nav className="menu-panel" aria-label="Mobile">
              {navLinks.map((link, index) => (
                <a
                  key={link.href}
                  href={link.href}
                  aria-current={index === 0 ? "page" : undefined}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </details>
        </header>

        <main>
          <section className="hero-grid" id="sighting">
            <article className="paper specimen">
              <div className="specimen-pins" aria-hidden="true">
                <span />
                <span />
              </div>
              <figure className="specimen-figure">
                <KingfisherArt />
              </figure>
              <div className="specimen-meta">
                <p className="specimen-id">Specimen no. 042</p>
                <h2 className="specimen-name">Trivi Sunil</h2>
              </div>
            </article>

            <div className="hero-copy">
              <p className="eyebrow">Habitat notes</p>
              <h1>
                Building practical systems with <em>research depth.</em>
              </h1>
              <p>
                I&apos;m a Computer Science student at The Pennsylvania State
                University building AI/ML and full-stack systems that move from
                prototype to impact. My work spans research, product, and
                engineering—from predictive modeling and computer vision
                pipelines to production-ready web and mobile applications.
              </p>
            </div>

            <div className="action-row hero-contact-cta">
              <a
                className="button button-primary button-hero-contact"
                href="#migration"
              >
                Initiate contact
              </a>
            </div>

            <article className="paper paper--low taxonomy">
              <p className="kicker">Taxonomy: student engineer</p>
              <dl className="tax-list">
                {taxonomy.map(([label, value]) => (
                  <div key={label}>
                    <dt>{label}</dt>
                    <dd>{value}</dd>
                  </div>
                ))}
              </dl>
            </article>

            <article className="paper paper--tape stats">
              <p className="kicker">Vital statistics</p>
              <ul className="stat-list">
                {statistics.map(([label, value]) => (
                  <li key={label}>
                    <span>{label}</span>
                    <strong>{value}</strong>
                  </li>
                ))}
              </ul>
            </article>

            <article className="paper paper--low habitat-card">
              <p className="kicker">Habitat</p>
              <dl className="tax-list">
                {habitat.map(([label, value]) => (
                  <div key={label}>
                    <dt>{label}</dt>
                    <dd>{value}</dd>
                  </div>
                ))}
              </dl>
            </article>
          </section>

          <section className="section" id="experience-notes">
            <div className="section-head">
              <p className="eyebrow">Experience</p>
              <h2>Recent Sightings</h2>
              <p>
                A chronological field record of engineering, research, and
                product work across startups, university labs, and industry
                teams.
              </p>
            </div>

            <div className="experience-stack">
              {experiences.map((exp, index) => (
                <article
                  className="paper paper--low paper--pin experience-card"
                  key={exp.organization + exp.role}
                >
                  <span className="thumbtack" aria-hidden="true" />
                  {index < experiences.length - 1 ? (
                    <span className="thread-down" aria-hidden="true" />
                  ) : null}
                  <div className="experience-head">
                    <h3>{exp.organization}</h3>
                    <p>{exp.timeframe}</p>
                  </div>
                  <p className="experience-role">{exp.role}</p>
                  <p className="experience-location">{exp.location}</p>
                  <ul className="experience-points">
                    {exp.highlights.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          <section className="section" id="field-notes">
            <div className="section-head">
              <p className="eyebrow">Projects</p>
              <h2>Featured Specimens</h2>
              <p>
                A collection of hackathon and engineering builds spanning AI
                voice interfaces, climate-tech operations, blockchain IP
                infrastructure, and agentic reasoning systems.
              </p>
            </div>

            <div className="projects-list">
              {projects.map((project, index) => (
                <article
                  className={`paper paper--tape paper--pin project project-card ${
                    index % 2 === 0 ? "project-left" : "project-right"
                  }`}
                  key={project.title}
                >
                  <div className="project-body">
                    <div>
                      <h3>{project.title}</h3>
                      <ul className="experience-points">
                        {project.highlights.map((point) => (
                          <li key={point}>{point}</li>
                        ))}
                      </ul>
                      <ul className="meta-list">
                        <li>
                          <span>Stack</span>
                          <strong>{project.stack}</strong>
                        </li>
                        <li>
                          <span>Link</span>
                          <strong>
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noreferrer"
                            >
                              {project.link}
                            </a>
                          </strong>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <figure className="art-dark">
                        <NeuralArt />
                      </figure>
                      <p className="figure-note">{project.note}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="section" id="migration">
            <article className="migration-card">
              <div className="migration-copy">
                <p className="eyebrow">Migration</p>
                <h2>Seeking new territories</h2>
                <p>
                  I&apos;m currently pursuing my B.S. in Computer Science at
                  Penn State (GPA: 3.53, Dean&apos;s List) and looking for
                  opportunities to build high-impact software at the
                  intersection of AI, product, and systems.
                </p>
                <div className="button-row">
                  <a
                    className="button button-primary"
                    href="mailto:trivikram.sunil11@gmail.com"
                  >
                    Open correspondence
                  </a>
                  <a className="button button-secondary" href="#field-notes">
                    Return to archive
                  </a>
                </div>
              </div>
              <div>
                <p className="kicker">Coordinates</p>
                <ul className="contact-list">
                  {contacts.map(([label, text, href]) => (
                    <li key={label}>
                      <span>{label}</span>
                      <a href={href}>{text}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </section>
        </main>

        <footer className="footer">
          <a className="brand" href="#sighting">
            The Field Naturalist&apos;s Folio
          </a>
          <div className="footer-links">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
            <small>Built from resume content provided by Trivi Sunil.</small>
          </div>
        </footer>
      </article>
    </div>
  );
}

function FlowerDecoration() {
  return (
    <svg className="deco deco--flower" viewBox="0 0 160 160" aria-hidden="true">
      <circle className="wash-rose" cx="80" cy="80" r="22" />
      <circle className="wash-rose" cx="80" cy="38" r="24" />
      <circle className="wash-rose" cx="120" cy="78" r="24" />
      <circle className="wash-rose" cx="80" cy="122" r="24" />
      <circle className="wash-rose" cx="40" cy="78" r="24" />
      <circle className="wash-ochre" cx="80" cy="80" r="10" />
      <path d="M80 90C84 118 86 132 98 154" />
      <path d="M98 140C90 136 84 132 76 130" />
    </svg>
  );
}

function FernDecoration() {
  return (
    <svg className="deco deco--fern" viewBox="0 0 220 220" aria-hidden="true">
      <path d="M38 196C82 152 112 108 130 32" />
      <path d="M98 70C120 78 142 92 162 114" />
      <path d="M88 94C108 100 126 114 142 134" />
      <path d="M76 118C96 124 112 138 126 156" />
      <path d="M110 56C136 62 160 76 186 100" />
      <path d="M88 80C70 92 52 108 34 130" />
      <path d="M76 104C58 116 40 132 24 154" />
    </svg>
  );
}

function BirdDecoration() {
  return (
    <svg className="deco deco--bird" viewBox="0 0 180 120" aria-hidden="true">
      <ellipse className="wash-sage" cx="86" cy="56" rx="28" ry="18" />
      <path d="M28 74C46 58 58 48 72 46C92 44 104 56 116 58C130 60 140 54 150 46" />
      <path d="M82 44C86 32 94 24 104 22" />
      <path d="M54 66L30 56" />
      <path d="M116 58L150 62" />
      <path d="M74 74L70 102" />
      <path d="M94 72L98 102" />
    </svg>
  );
}

function KingfisherArt() {
  return (
    <svg
      viewBox="0 0 560 520"
      role="img"
      aria-label="Stylized kingfisher specimen illustration"
    >
      <defs>
        <radialGradient id="wash" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#dce8df" />
          <stop offset="100%" stopColor="#f5ead2" />
        </radialGradient>
        <linearGradient id="birdBody" x1="0" x2="1">
          <stop offset="0%" stopColor="#0f7a8f" />
          <stop offset="55%" stopColor="#1e97aa" />
          <stop offset="100%" stopColor="#f29e45" />
        </linearGradient>
      </defs>
      <rect width="560" height="520" fill="url(#wash)" />
      <ellipse cx="278" cy="430" rx="102" ry="32" fill="#8da067" />
      <ellipse
        cx="278"
        cy="450"
        rx="120"
        ry="18"
        fill="#64724b"
        opacity=".55"
      />
      <ellipse cx="252" cy="252" rx="84" ry="110" fill="url(#birdBody)" />
      <ellipse cx="220" cy="230" rx="66" ry="86" fill="#116e84" />
      <ellipse cx="302" cy="216" rx="46" ry="40" fill="#f4d7b6" />
      <circle cx="322" cy="208" r="8" fill="#111" />
      <path
        d="M334 214C380 220 420 214 482 188C430 226 388 238 336 232Z"
        fill="#2e3330"
      />
      <path
        d="M206 332C170 384 152 432 148 488C182 442 214 388 232 344Z"
        fill="#0b7088"
      />
      <path
        d="M252 332C244 394 248 454 258 504C280 452 290 398 296 350Z"
        fill="#176d85"
      />
      <path
        d="M182 284C132 266 106 248 74 222C110 228 150 236 198 254Z"
        fill="#2d8aa1"
      />
      <path
        d="M214 314C248 340 280 350 316 344C294 374 246 386 212 370Z"
        fill="#cc6c2c"
      />
      <path
        d="M122 424C196 412 272 410 368 420"
        stroke="#46533b"
        strokeWidth="16"
        strokeLinecap="round"
      />
    </svg>
  );
}

function NeuralArt() {
  return (
    <svg
      viewBox="0 0 640 420"
      role="img"
      aria-label="Abstract neural network illustration"
    >
      <rect width="640" height="420" fill="#12241f" />
      <g stroke="#d8d9c9" strokeOpacity=".45">
        <path d="M118 96L264 118L394 82L516 130" />
        <path d="M118 162L264 118L394 164L516 130" />
        <path d="M118 228L264 184L394 236L516 196" />
        <path d="M118 294L264 250L394 236L516 286" />
        <path d="M118 96L264 184L394 82L516 286" />
        <path d="M118 294L264 118L394 236L516 130" />
      </g>
      {[96, 162, 228, 294].map((y) => (
        <circle
          key={"l" + y}
          cx="118"
          cy={y}
          r="13"
          fill="#2d534c"
          stroke="#e9e2c8"
        />
      ))}
      {[118, 184, 250].map((y) => (
        <circle
          key={"m" + y}
          cx="264"
          cy={y}
          r="13"
          fill="#355f57"
          stroke="#e9e2c8"
        />
      ))}
      {[82, 164, 236].map((y) => (
        <circle
          key={"n" + y}
          cx="394"
          cy={y}
          r="13"
          fill="#3f6b63"
          stroke="#e9e2c8"
        />
      ))}
      {[130, 196, 286].map((y) => (
        <circle
          key={"r" + y}
          cx="516"
          cy={y}
          r="13"
          fill="#4a7a70"
          stroke="#e9e2c8"
        />
      ))}
    </svg>
  );
}

function FoliageArt() {
  return (
    <svg
      viewBox="0 0 440 320"
      role="img"
      aria-label="Abstract foliage illustration"
    >
      <rect width="440" height="320" fill="#f1eee5" />
      <rect x="58" y="34" width="324" height="252" rx="18" fill="#20372e" />
      <g fill="#385f4c">
        <ellipse
          cx="140"
          cy="100"
          rx="28"
          ry="70"
          transform="rotate(-22 140 100)"
        />
        <ellipse
          cx="194"
          cy="150"
          rx="26"
          ry="82"
          transform="rotate(8 194 150)"
        />
        <ellipse
          cx="264"
          cy="116"
          rx="28"
          ry="76"
          transform="rotate(18 264 116)"
        />
        <ellipse
          cx="310"
          cy="176"
          rx="24"
          ry="66"
          transform="rotate(-12 310 176)"
        />
      </g>
      <g fill="#5d876d">
        <ellipse
          cx="160"
          cy="164"
          rx="20"
          ry="52"
          transform="rotate(-18 160 164)"
        />
        <ellipse
          cx="232"
          cy="194"
          rx="22"
          ry="60"
          transform="rotate(14 232 194)"
        />
        <ellipse
          cx="290"
          cy="136"
          rx="20"
          ry="56"
          transform="rotate(30 290 136)"
        />
      </g>
    </svg>
  );
}

function ServerArt() {
  return (
    <svg
      viewBox="0 0 520 340"
      role="img"
      aria-label="Server and roots illustration"
    >
      <rect width="520" height="340" fill="#f4efe2" />
      <rect
        x="176"
        y="62"
        width="142"
        height="176"
        rx="16"
        fill="#d6d1c3"
        stroke="#3b3127"
        strokeWidth="4"
      />
      <rect x="196" y="88" width="102" height="24" rx="8" fill="#b7c39f" />
      <rect x="196" y="126" width="102" height="24" rx="8" fill="#b8cbe0" />
      <rect x="196" y="164" width="102" height="24" rx="8" fill="#e0ccb3" />
      <circle cx="284" cy="100" r="4" fill="#4d6d4d" />
      <circle cx="284" cy="138" r="4" fill="#4f6588" />
      <circle cx="284" cy="176" r="4" fill="#9e6d48" />
      <path
        d="M248 238C224 270 212 292 194 328M272 238C272 282 268 300 262 336M300 238C328 272 352 294 378 332M208 268C174 274 154 286 126 314M322 270C352 278 382 294 414 320"
        stroke="#57483b"
        strokeWidth="6"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

function BoardArt() {
  return (
    <svg
      viewBox="0 0 620 320"
      role="img"
      aria-label="Circuit board illustration"
    >
      <rect width="620" height="320" fill="#20463d" />
      <rect x="54" y="52" width="120" height="86" rx="8" fill="#3f7467" />
      <rect x="218" y="70" width="154" height="108" rx="10" fill="#4d8a7a" />
      <rect x="406" y="54" width="126" height="90" rx="8" fill="#38695f" />
      <rect x="404" y="182" width="150" height="86" rx="8" fill="#487d70" />
      <rect x="88" y="176" width="124" height="70" rx="8" fill="#5d9a86" />
      <path
        d="M174 96H218M372 120H406M280 178V240M212 210H404M174 210V138M532 98V182"
        stroke="#b1d1b7"
        strokeWidth="8"
        strokeLinecap="round"
      />
      <circle cx="174" cy="96" r="8" fill="#dfe9cb" />
      <circle cx="218" cy="96" r="8" fill="#dfe9cb" />
      <circle cx="406" cy="120" r="8" fill="#dfe9cb" />
      <circle cx="404" cy="210" r="8" fill="#dfe9cb" />
    </svg>
  );
}

function ChipIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect
        x="7"
        y="7"
        width="10"
        height="10"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M9 3V7M15 3V7M9 17V21M15 17V21M3 9H7M3 15H7M17 9H21M17 15H21"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CloudIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M7.5 18H16A4 4 0 0 0 16 10A5.5 5.5 0 0 0 5.6 11.8A3.5 3.5 0 0 0 7.5 18Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default App;

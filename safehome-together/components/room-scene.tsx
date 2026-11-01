export default function RoomScene({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 280"
      role="img"
      aria-label="Cozy living room illustration"
      className={className}
    >
      <defs>
        <linearGradient id="wall" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f0ede2" />
          <stop offset="100%" stopColor="#e6e2d3" />
        </linearGradient>
        <linearGradient id="glass" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#cfe6dd" />
          <stop offset="100%" stopColor="#b9d8cb" />
        </linearGradient>
      </defs>

      <rect width="400" height="280" fill="url(#wall)" />
      <rect y="216" width="400" height="64" fill="#d8cfba" />
      <rect y="212" width="400" height="6" fill="#cabfa6" />

      <rect x="252" y="36" width="110" height="86" rx="10" fill="#fffdf7" />
      <rect x="259" y="43" width="96" height="72" rx="6" fill="url(#glass)" />
      <path d="M259 115l96-72M355 115L259 43" stroke="#fffdf7" strokeWidth="5" />
      <circle cx="288" cy="62" r="9" fill="#f5d98b" />
      <path d="M262 106l22-16 14 10 20-18 17 14 20-12v25a6 6 0 01-6 6h-81a6 6 0 01-6-6z" fill="#a3c4b2" />

      <rect x="38" y="52" width="58" height="72" rx="6" fill="#fffdf7" />
      <rect x="46" y="60" width="42" height="56" rx="3" fill="#c9dcc4" />
      <path d="M46 96c10-4 18-12 24-22 6 10 12 16 18 18v18a3 3 0 01-3 3H49a3 3 0 01-3-3z" fill="#8fb894" />
      <circle cx="76" cy="72" r="6" fill="#f5d98b" />

      <ellipse cx="200" cy="248" rx="128" ry="18" fill="#cdbf9f" opacity="0.7" />
      <ellipse cx="200" cy="245" rx="104" ry="14" fill="#e0d6bb" opacity="0.7" />

      <g>
        <rect x="96" y="150" width="150" height="52" rx="14" fill="#7fa88f" />
        <rect x="96" y="118" width="150" height="44" rx="14" fill="#8fb79e" />
        <rect x="106" y="128" width="62" height="26" rx="9" fill="#a5c7b2" />
        <rect x="174" y="128" width="62" height="26" rx="9" fill="#a5c7b2" />
        <rect x="84" y="126" width="20" height="76" rx="9" fill="#7fa88f" />
        <rect x="238" y="126" width="20" height="76" rx="9" fill="#7fa88f" />
        <rect x="106" y="202" width="10" height="16" rx="3" fill="#8a6f4d" />
        <rect x="226" y="202" width="10" height="16" rx="3" fill="#8a6f4d" />
        <rect x="112" y="158" width="52" height="30" rx="10" fill="#f2ede0" />
      </g>

      <g>
        <path d="M338 218v-72" stroke="#8a6f4d" strokeWidth="5" strokeLinecap="round" />
        <path d="M316 148a22 22 0 0144 0z" fill="#5e8a6e" />
        <circle cx="338" cy="162" r="7" fill="#f5d98b" opacity="0.85" />
        <path d="M326 218h24l-4 20h-16z" fill="#c9b691" />
      </g>

      <g>
        <path d="M52 216c2-14 6-22 6-34 0-10-2-16-2-24 6 6 8 14 8 22 4-8 4-18 10-24 2 10-2 18-2 26 6-6 10-14 16-16-2 10-8 16-12 24-2 8-4 18-4 26z" fill="#5e8a6e" />
        <path d="M44 216h36l-3 26H47z" fill="#b56548" />
        <rect x="42" y="212" width="40" height="8" rx="3" fill="#9c5238" />
      </g>

      <circle cx="150" cy="238" r="9" fill="#3d3a35" />
      <circle cx="153" cy="235" r="1.8" fill="#fffdf7" />
      <path d="M141 238c-3-2-5-2-7-1 2 3 4 4 7 4z" fill="#3d3a35" />
    </svg>
  );
}

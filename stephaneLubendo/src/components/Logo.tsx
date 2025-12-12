
const CodeVinylLogo = ({ 
  size = 200, 
  color = "currentColor", 
  secondaryColor = "#ffffff", 
  className = "",
  ...props 
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Code Vinyl Pen Logo"
      {...props}
    >
      {/* Underscore at bottom */}
      <rect x="38" y="90" width="24" height="4" rx="2" fill={color} />

      {/* Left Bracket < */}
      <path
        d="M 30 40 L 15 52 L 30 64"
        stroke={color}
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Right Bracket > */}
      <path
        d="M 70 40 L 85 52 L 70 64"
        stroke={color}
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Pen Assembly Group */}
      <g transform="rotate(35, 50, 50)">
        {/* Pen Cap */}
        <rect x="34" y="12" width="32" height="12" fill={color} />
        <rect x="36" y="24" width="28" height="4" fill={color} />

        {/* Pen Body (Nib) */}
        <path d="M 32 30 Q 32 65 50 90 Q 68 65 68 30 Z" fill={color} />

        {/* Vinyl Record Background (The "Cutout") */}
        <circle cx="50" cy="48" r="14" fill={secondaryColor} />

        {/* Record Grooves */}
        <circle cx="50" cy="48" r="9" stroke={color} strokeWidth="0.5" />
        <circle cx="50" cy="48" r="6" stroke={color} strokeWidth="0.5" />

        {/* Record Center Label */}
        <circle cx="50" cy="48" r="3.5" fill={color} />
        {/* Spindle Hole */}
        <circle cx="50" cy="48" r="1" fill={secondaryColor} />

        {/* Tone Arm */}
        <path
          d="M 60 40 L 53 45"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle cx="60" cy="40" r="1.5" fill={color} />

        {/* Nib Split Line (Tip) */}
        <path
          d="M 50 62 L 50 82"
          stroke={secondaryColor}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
};

export default CodeVinylLogo;
function Logo() {
  return (
    <svg
      width="193"
      height="28"
      viewBox="0 0 193 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Circle Icon */}
      <circle cx="14" cy="14" r="13" fill="#5348d1" />
      <circle cx="14" cy="14" r="8" fill="#0d0d0d" opacity="0.3" />
      
      {/* Text "INTERSSON" */}
      <text
        x="35"
        y="20"
        fill="white"
        fontSize="18"
        fontWeight="600"
        fontFamily="Inter, sans-serif"
        letterSpacing="-0.5"
      >
        INTERSSON
      </text>
    </svg>
  )
}

export default Logo

export const Logo = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    strokeWidth="6"
  >
    <title>Dream Pool Logo</title>
    <path
      d="M25,65 C25,80 35,90 50,90 C65,90 75,80 75,65 C75,50 50,20 50,20 C50,20 25,50 25,65Z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M50,90 V10"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeDasharray="10 10"
    />
     <circle cx="50" cy="65" r="8" fill="currentColor" stroke="none" />
  </svg>
);

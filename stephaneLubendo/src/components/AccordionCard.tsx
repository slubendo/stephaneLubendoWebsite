interface AccordionCardProps {
  pic: string;
  title: string;
  website?: string;
  github?: string;
  tags?: { icon?: string; label?: string }[];
}

export default function AccordionCard({ pic, title, website }: AccordionCardProps) {
    console.log(website)
  return (
<a href={website} target="_blank">
<div className="group min-w-[15rem] sm:min-w-[15rem] mx-2 transition-transform duration-300 ease-in-out hover:scale-105 overflow-hidden rounded-lg hover:overflow-hidden bg-white/10 shadow-md relative">
  
        <img
            src={pic}
            alt={title}
            className="w-full h-[200px] object-cover"
        />
  {/* Overlay with GitHub Icon */}
  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-10 w-10 text-white"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.234c-3.338.724-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.082-.73.082-.73 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.76-1.605-2.665-.305-5.467-1.333-5.467-5.931 0-1.31.468-2.381 1.236-3.221-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.48 11.48 0 013.003-.404 11.48 11.48 0 013.003.404c2.29-1.552 3.296-1.23 3.296-1.23.655 1.653.243 2.873.12 3.176.77.84 1.236 1.911 1.236 3.221 0 4.609-2.807 5.624-5.479 5.921.43.37.814 1.102.814 2.222v3.293c0 .319.218.694.825.576C20.565 21.796 24 17.302 24 12c0-6.63-5.373-12-12-12z"/>
    </svg>
  </div>

</div>

  </a>


  );
}

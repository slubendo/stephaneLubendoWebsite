
type BannerProps = {
  width?: number;           // Optional, for future responsive width
  height?: number;          // Optional, for future responsive height
  pic?: string;
  fit?: string;
  overlay?: boolean;
  title: string;
  content: string;
  transition?: boolean;
};

export default function BannerMusic({
  pic,
  fit,
  title,
  content,
  overlay = true,
}: BannerProps) {

  return (
    <div
      className={`
        relative 
        ${fit ? "bg-fit" : "bg-cover"} 
        bg-center 
        mx-auto mb-5 
        min-w-[95vw] min-h-[45vh] 
        sm:min-w-[80vw] sm:min-h-[60vh] 
        rounded-xl 
         duration-700 ease-in-out
      `}
      style={{ backgroundImage: pic ? `url(${pic})` : undefined }}
    >

      {/* Gradient Overlay */}
      {overlay && (
        <div className={`absolute inset-0 rounded-xl bg-gradient-to-t from-black/80 via-black/30 to-transparent`}></div>
      )}

      {/* Content */}
      <div className="absolute bottom-0 right-0 z-10 p-8 sm:p-12 text-white text-right flex flex-col items-end">
        <h1 className="text-3xl sm:text-5xl font-bold mb-4 drop-shadow-lg">
          {title}
        </h1>
        <p className="text-sm sm:text-lg max-w-lg drop-shadow-md">
          {content}
        </p>
      </div>

     </div>


  );
}

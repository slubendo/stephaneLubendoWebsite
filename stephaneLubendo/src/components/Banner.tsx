
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

export default function Banner({
  pic,
  fit,
  overlay = true,
}: BannerProps) {

  return (
<div
  className={`
    relative 
    ${fit ? "bg-fit" : "bg-cover"} 
    bg-center 
    mx-auto mb-5 
    w-[95vw] h-[45vh] 
    sm:w-[80vw] sm:h-[60vh] 
    rounded-xl 
    duration-700 ease-in-out
  `}
  style={{ backgroundImage: pic ? `url(${pic})` : undefined }}
>

  {/* Gradient Overlay */}
  {overlay && (
    <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/80 via-black/30 to-black/10"></div>
  )}

  {/* Content */}
  <div className="relative z-10 flex flex-col justify-end h-full p-8 sm:p-12 text-white">

    {/* Title at top */}
    <h1 className="text-5xl sm:text-5xl font-bold my-7 drop-shadow-lg">
    Stephane Lubendo    
    </h1>
    <h1 className="text-3xl text-white  font-bold m-2 drop-shadow-lg">
      <ul>
        <li>
          Software Engineer
        </li>
        <li>
          Writer
        </li>
        <li>
          Producer
        </li>
        <li>

        </li>
      </ul>
    </h1>

   

  </div>

</div>



  );
}

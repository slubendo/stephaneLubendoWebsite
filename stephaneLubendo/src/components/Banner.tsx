
type BannerProps = {
  width: number;
  height: number;
  pic: string;
  overlay: boolean;
  transition: boolean;
  text: string;
  rounded: string;
};

export default function Banner({pic, overlay, text, rounded }: BannerProps) {
  pic = "75"
  overlay = true
  text = "75"
  rounded = ""
  console.log(overlay)
  console.log(text)
  console.log(rounded)
  console.log(pic)
//  ${rounded !== "none" ? `rounded-${rounded}

  return ( 
<div
  className={`relative bg-cover mx-auto mb-5 min-w-[95vw] min-h-[45vh] sm:min-w-[85vw] sm:min-h-[60vh] bg-accent ${rounded !== "none" ? `rounded-${rounded}` : ""}`}
  style={{ backgroundImage: pic ? `url(${pic})` : undefined,}}
>
  {/* Black overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

    {/* Optional: Content goes here */}
    <div className="relative z-10 text-white p-4">
      <h2>Overlay Content</h2>
    </div>
</div>
    )
}

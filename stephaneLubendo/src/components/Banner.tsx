
type BannerProps = {
  width: number;
  height: number;
  pic: string;
  overlay: boolean;
  transition: boolean;
  text: string;
  rounded: string;
};

export default function Banner({width, height, pic, overlay, text, rounded }: BannerProps) {
  // width = 80
  // height = 55
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
  className={`relative bg-cover mx-auto mb-5 w-[calc(${width}vw)] h-[calc(45vh)] bg-accent ${
    rounded !== "none" ? `rounded-${rounded}` : ""
  }`}
  style={{
    width: `calc(${width}vw)`,
    height: `calc(${height}vh)`,
    backgroundImage: pic ? `url(${pic})` : undefined,
  }}
>
  {/* Black overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent rounded-"></div>

    {/* Optional: Content goes here */}
    <div className="relative z-10 text-white p-4">
      <h2>Overlay Content</h2>
    </div>
</div>
    )
}

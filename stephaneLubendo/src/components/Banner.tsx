import { postInfo } from "../db";

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
  pic = ""
  overlay = true
  text = "75"
  rounded = "3xl"
  console.log(overlay)
  console.log(text)
  console.log(rounded)
  console.log(pic)
//  ${rounded !== "none" ? `rounded-${rounded}

  return ( 
    <div
      className={`relative bg-cover bg-center bg-accent/70 mx-auto mb-5 min-w-[95vw] min-h-[45vh] sm:min-w-[80vw] sm:min-h-[60vh] ${rounded !== "none" ? `rounded-${rounded}` : ""}`}
      style={{ backgroundImage: pic ? `url(${pic})` : undefined }}
    >

  {/* Black overlay */}
    {/* <div className="absolute inset-0 bg-gradient-to-t rounded-3xl from-black/60 via-black/20 to-transparent"></div> */}

    {/* Optional: Content goes here */}
    <div className="flex flex-col justify-between h-full z-10 text-black p-4">
      <h2>{postInfo.title}</h2>
      <p>{postInfo.content}</p>
    </div>
</div>
    )
}

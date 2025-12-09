import { postInfo } from "../db";


type AccordionCardProps = {
  width: number;
  height: number;
  pic: string;
  overlay: boolean;
  transition: boolean;
  text: string;
  rounded: string;
  tags:boolean
};


export default function AccordionCard({width, pic, overlay, transition, text, rounded, tags }: AccordionCardProps) {

    width = 100
    pic = ""
    overlay = true
    text = "75"
    rounded = "md"
    tags = true
    console.log(overlay)
    console.log(text)
    console.log(rounded)
    console.log(pic)
    console.log(width)
    console.log(length)
    console.log(tags)
    console.log(transition)

  return (
    <div className="min-w-3/8 sm:min-w-[15rem]  mx-2">
        <div
            className="relative flex bg-cover bg-accent/50 rounded-xl mb-2 min-h-40"
            style={{
                width: `calc(${width}%)`,
                backgroundImage: pic ? `url(${pic})` : undefined,
            }}
            >
            {/* Content wrapper */}
            <div className="relative z-10 text-black p-4 flex flex-col justify-between w-full">
                
                {/* Top: Title */}
                <h2>{postInfo.title}</h2>

                {/* Bottom row */}
                <div className="flex justify-between items-center">
                <div className="w-[15px]">
                    <img src="heart.svg" alt="" />
                </div>
                <div>{postInfo.createdBy}</div>
                </div>
            </div>
            </div>




    {tags && (
        <div className="flex w-full justify-center p-3">
            <div className="bg-white/20 rounded-sm m-1 flex justify-center items-center w-[45px] h-[45px]">
            <img src="" alt="" />
            Icon
            </div>
            <div className="bg-white/20 rounded-sm m-1 flex justify-center items-center w-[45px] h-[45px]">
            <img src="" alt="" />
            Icon
            </div>
            <div className="bg-white/20 rounded-sm m-1 flex justify-center items-center w-[45px] h-[45px]">
            <img src="" alt="" />
            Icon
            </div>
        </div>
    )}


    </div>
    )
}


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


export default function AccordionCard({width, height, pic, overlay, transition, text, rounded, tags }: AccordionCardProps) {

    width = 100
    height = 50
    pic = "75"
    overlay = true
    text = "75"
    rounded = "lg"
    tags = true
    console.log(overlay)
    console.log(text)
    console.log(rounded)
    console.log(pic)
    console.log(width)
    console.log(length)
    console.log(tags)
    console.log(transition)

    //  ${rounded !== "none" ? `rounded-${rounded}


  return (
    <div className="w-[25%] mx-2">
        <div className="relative bg-cover bg-tertiary min-h-40 rounded-xl mb-2"
        style={{
            width: `calc(${width}%)`,
            height: `calc(${height}%)`,
            backgroundImage: pic ? `url(${pic})` : undefined,
        }}> 

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent rounded-xl"></div>

            <div className="relative z-10 text-white p-4">
            <h2>Overlay Content</h2>
            </div>   
        </div>



    {tags && (
        <div className="flex justify-center">
            <div className="bg-white/20 rounded-xl m-1 flex justify-center items-center w-[45px] h-[45px]">
            <img src="" alt="" />
            Insta
            </div>
            <div className="bg-white/20 rounded-xl m-1 flex justify-center items-center w-[45px] h-[45px]">
            <img src="" alt="" />
            Insta
            </div>
            <div className="bg-white/20 rounded-xl m-1 flex justify-center items-center w-[45px] h-[45px]">
            <img src="" alt="" />
            Insta
            </div>
        </div>
    )}


    </div>
    )
}
import Accordion from "../../components/Accordion";
import Banner from "../../components/Banner";
import Feed from "../../components/Feed";


export default function Home() {

  return (
    <main className="mx-auto pt-[calc(110px)] flex flex-col justify-between">
      <Banner />
      <div className="flex flex-col justify-center w-[calc(65vw)] mx-auto">
        <Accordion />
        <Feed />
      </div>

    </main>
    )
}
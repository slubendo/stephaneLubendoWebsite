// import Accordion from "../../components/Accordion";
import Banner from "../../components/Banner";

export default function Music() {

    return (
        <main className="mx-auto w-[80vw] pt-4 sm:pt-[77px] flex flex-col justify-center space-y-6">
            {/* Banner */}
            <Banner />

            {/* Top grid */}
            <div className="mx-auto w-full max-w-[85vw] grid grid-cols-1 [&>*]:h-[200px] sm:grid-cols-2 lg:grid-cols-3 grid-rows-auto gap-2 h-auto lg:h-[400px] mb-4 lg:mb-8">
            <div className="bg-accent col-span-1 sm:col-span-2 row-span-1 lg:row-span-2">Paragph about music what aim to achieve and why i do it</div>
            <div className="bg-accent row-span-1 lg:col-span-1 lg:row-span-2">
                <h2>What I'm listening to</h2>
                <img src="/Banner.heic" alt="" />
            </div>
            <div className="bg-accent row-span-1 lg:row-span-2">
                <h2>Top 10 current Rappers</h2>
                <img src="/Banner.heic" alt="" />
            </div>
            <div className="bg-accent row-span-1 lg:row-span-2">
                <h2>All time top 10 producers</h2>
                <img src="/Banner.heic" alt="" /> </div>
            <div className="bg-accent row-span-1 col-span-1 sm:row-start-3 sm:col-start-1 lg:col-span-1 lg:row-span-1">
                <h2>Favorites RnB to listen to</h2>
                <img src="/Banner.heic" alt="" />
            </div>
            </div>

            {/* Columns */}
            {/* <div className="bg-secondary mx-auto w-full max-w-[85vw] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 [&>*]:h-[200px] sm:[&>*]:h-[250px]">
                <div className="bg-secondary border border-accent p-4">
                    <h2>Thoughts on J.Cole</h2>
                    <img src="/Banner.heic" alt="" />               
                </div>
                <div className="bg-secondary border border-accent p-4">
                    <h2>Reviewing JID album</h2>
                    <img src="/Banner.heic" alt="" />               
                </div>
                <div className="bg-secondary border border-accent p-4">
                    <h2>How long can Clispse stay at the top for</h2>
                    <img src="/Banner.heic" alt="" />               
                </div>
                <div className="bg-secondary border border-accent p-4">
                    <h2>Thoughts a trap music, is it pushed by the industry or is it what people want</h2>
                    <img src="/Banner.heic" alt="" />               
                </div>
                <div className="bg-secondary border border-accent p-4">
                    <h2>Big Krit is back to making music, what can we expect</h2>
                    <img src="/Banner.heic" alt="" />               
                </div>
                <div className="bg-secondary border border-accent p-4">
                    <h2>Who got next</h2>
                    <img src="/Banner.heic" alt="" />               
                </div>
                
            </div> */}

            {/* Fixed bottom bar */}
            <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-black/60 w-[90%] sm:w-[60%] lg:w-[45%] flex justify-between items-center p-2">
                <div className="m-1 flex justify-center items-center w-full h-[50px] sm:h-[60px] border border-accent">
                Music
                </div>
            </div>
        </main>

    )
}
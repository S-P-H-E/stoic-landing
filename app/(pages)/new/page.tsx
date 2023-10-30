import Header from "@/components/Header/page";
import { BsArrowDownShort } from "react-icons/bs";


export default function New(){
    return(
        <div className="h-screen">
            <Header />
            {/* <div className="absolute bottom-0 p-10 -z-10 flex justify-between items-center w-full">
                <h1 className="text-3xl font-semibold w-[430px]">The platform that gives cutting edge-information on going viral on social media</h1>
                <button className="bg-white text-black p-5 rounded-full font-semibold flex items-center gap-1">
                    Scroll to learn more
                    <BsArrowDownShort size={35}/>
                </button>
            </div> */}
        </div>
    )
}
import { BsStars, BsCheckCircleFill } from "react-icons/bs";
import { IoSend } from "react-icons/io5";

export default function Software(){
    return(
        <div className="p-40 flex flex-col gap-40 items-center">
            {/* AI */}
            <div className="flex gap-10 items-center">
                <div className="flex flex-col gap-6">
                    <h1 className="text-6xl font-medium">AI-Powered <br/> Support System</h1>
                    <p>Harness the power of AI to assist you in your social media journey.</p>
                </div>
                <div className="bg-[#131313] shadow p-10 flex flex-col justify-center items-center rounded-3xl w-[500px] h-[300px]">
                    <div className="w-full flex flex-col items-center justify-between h-full">
                        <h1 className="text-4xl font-semibold h-full flex items-center text-[#464646]">STOIC AI</h1>
                        <div className="flex w-full gap-2">
                            <div className="border-2 border-[#252525] text-[#474747] px-4 py-2 rounded-full w-full flex items-center gap-2">
                                <BsStars />
                                <h1>Ask me anything...</h1>
                            </div>
                            <div className="border-2 border-[#252525] text-[#474747] px-3 py-2 rounded-full flex items-center gap-2">
                                <IoSend />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* AI */}
            <div className="flex gap-10 items-center">
                <div className="flex flex-col gap-6">
                    <h1 className="text-6xl font-medium">AI-Powered <br/> Support System</h1>
                    <p>Harness the power of AI to assist you in your social media journey.</p>
                </div>
                <div className="bg-[#131313] shadow p-10 flex flex-col justify-center items-center rounded-3xl w-[500px] h-[300px]">
                    <div className="w-full flex flex-col items-center justify-between h-full">
                        <h1 className="text-4xl font-semibold h-full flex items-center text-[#464646]">STOIC AI</h1>
                        <div className="flex w-full gap-2">
                            <div className="border-2 border-[#252525] text-[#474747] px-4 py-2 rounded-full w-full flex items-center gap-2">
                                <BsStars />
                                <h1>Ask me anything...</h1>
                            </div>
                            <div className="border-2 border-[#252525] text-[#474747] px-3 py-2 rounded-full flex items-center gap-2">
                                <IoSend />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}



{/* 
<div className="flex items-center gap-2">
    <BsCheckCircleFill size={25}/>
    <h1 className="font-medium text-xl">Get Search Engine Optimisation Ideas</h1>
</div>
<div className="flex items-center gap-2">
    <BsCheckCircleFill size={25}/>
    <h1 className="font-medium text-xl">Get Personalised Help On Your Account</h1>
</div> 
*/}

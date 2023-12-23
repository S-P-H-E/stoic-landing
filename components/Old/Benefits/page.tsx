import Card from "./Card";

export default function Benefits(){
    return(
        <div className="bg-white text-black p-5 pb-32 overflow-hidden z-50 rounded-[5rem]">
            <div className="w-fit mx-auto p-10 flex flex-col gap-2">
                <p className="text-center font-bold">HERE&apos;S WHAT YOU GET...</p>
                <h1 className="text-6xl mx-auto w-fit font-semibold">Inside of Stoic Premium</h1>
            </div>
            <div className="w-[90vw] mx-auto flex flex-col gap-10">
                <Card />
            </div>
        </div>
    )
}
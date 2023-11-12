import Card from "./card";

export default function Benefits(){
    return(
        <div className="bg-white text-black p-5 overflow-hidden z-50 rounded-[5rem]">
            <div className="w-fit mx-auto p-10 flex flex-col gap-2">
                <p className="text-center font-bold">HERE'S WHAT YOU GET...</p>
                <h1 className="text-6xl mx-auto w-fit font-semibold">Inside of Stoic Premium</h1>
            </div>
            <div className="w-[90vw] mx-auto flex flex-col gap-10">
                <Card />
            </div>
            <p className="text-[500px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi doloribus placeat saepe vero, architecto rem laboriosam quidem dicta dolorem id praesentium odio, at iste omnis ut recusandae consequuntur voluptates. Officia.
            </p>
        </div>
    )
}
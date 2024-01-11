import FAQs from "@/components/NEW/FAQs";
import Hero from "@/components/NEW/Hero";
import Features from "@/components/NEW/Features";
import Reviews from "@/components/NEW/Reviews";
import Pricing from "@/components/NEW/Pricing";
import CallToAction from "@/components/NEW/CallToAction";
import Footer from "@/components/NEW/Footer";
import Navbar from "@/components/NEW/Navbar";
import TestThing from "@/components/NEW/TestThing";

export default function New(){
    return(
        <>
            {/*<img src='/wave.avif' className="absolute grayscale opacity-20 -z-10 w-[100vw]"/>*/}
            <Navbar/>

            <Hero/>

            <Features/>

            <Reviews/>

            <TestThing/>

            <Pricing/>

            <FAQs/>

            <CallToAction/>

            <Footer/>
        </>
    )
}
"use client"
import FAQs from "@/components/FAQs";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Reviews from "@/components/Reviews";
import Pricing from "@/components/Pricing";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import TestThing from "@/components/TestThing";
import About from "@/components/About";
import Features2 from "@/components/Features2";
import BannerMessage from "@/components/BannerMessage";
import Slideshow from "@/components/Slideshow";
import Courses from "@/components/Courses";

export default function Home() {

    return (
        <>
            <Navbar/>
            <Hero/>
            <About />
            <Features2 />
            <Courses/>
            <BannerMessage />
{/*            <Slideshow />
            <Reviews/>
            <Pricing/>
            <FAQs/>
            <CallToAction/>
            <Footer/>*/}
        </>
    );
}
import FAQs from "@/components/FAQs";
import Hero from "@/components/Hero";
import Reviews from "@/components/Reviews";
import Pricing from "@/components/Pricing";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Features2 from "@/components/Features2";
import BannerMessage from "@/components/BannerMessage";
import Slideshow from "@/components/Slideshow";
import Courses from "@/components/Courses";
import LaunchSale from "@/components/LaunchSale";

export default function Home() {

    return (
        <>
            <LaunchSale/>
            <Navbar/>
            <Hero/>
            <About/>
            <Features2/>
            <Courses/>
            <BannerMessage/>
            <Slideshow/>
            <Reviews/>
            <Pricing/>
            <FAQs/>
            <CallToAction/>
            <Footer/>
        </>
    );
}
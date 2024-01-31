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
import {useState} from "react";
import {useRouter} from "next/navigation";

export default function Home() {
    const router = useRouter()

    return (
        <>
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

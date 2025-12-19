import Image from "next/image";
import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import HowItWorks from "@/components/landing/HowItWorks";
import WhatToAsk from "@/components/landing/WhatToAsk";
import PricingSection from "@/components/landing/PricingSection";
import { redirect } from "next/navigation";
import CTA from "@/components/landing/CTA";
import Footer from "@/components/landing/Footer";
import { currentUser } from "@clerk/nextjs/server";
import { syncUser } from "@/lib/actions/users";



export default  async function Home() {
    const user = await  currentUser();

    await syncUser();

    // redirect auth user to dashboard
  if(user) redirect('/dashboard');


  return (
    <div className="min-h-screen bg-background pt-16">
      <Header />

      <Hero />

      <HowItWorks />
      <WhatToAsk />
      <PricingSection />
      <CTA />
      <Footer />
    </div>
  );
}

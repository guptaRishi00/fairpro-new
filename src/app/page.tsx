import { Suspense } from "react"; // <-- 1. Import Suspense
import AboutCredai from "@/components/About";
import Attend from "@/components/Attend";
import Discover from "@/components/Discover";
import ExclusiveOpportunity from "@/components/ExclusiveOpportunity";
import Footer from "@/components/Footer";
import Herosection from "@/components/Herosection";
import Opportunities from "@/components/Opportunities";
import Register from "@/components/Register";
import Scroll from "@/components/Scroll";
import Trust from "@/components/Trust";
import Value from "@/components/Value";

export default function Home() {
  return (
    <div className="">
      <Herosection />
      <Scroll />
      {/* 2. Wrap the Register component in Suspense */}
      <Suspense fallback={null}>
        <Register />
      </Suspense>
      <Opportunities />
      <Trust />
      <Discover />
      <AboutCredai />
      <Attend />
      <Value />
      <ExclusiveOpportunity />
      <Footer />
    </div>
  );
}

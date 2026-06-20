import Hero from "@/app/components/hero";
import Testimonials from "@/app/components/testimonal";
import Whatwedo from "@/app/components/whatwedo";
import WhyChooseUs from "@/app/components/whychooseus";
 
import React from "react";
import Technologies from "@/app/components/technologies";

function Header() {
  return (
    <div>
      <Hero />
      <Whatwedo />
      <WhyChooseUs />
        <Technologies />
      <Testimonials />
    
    </div>
  );
}

export default Header;

import Hero from '@/app/components/hero'
import Portfolio from '@/app/components/portfolio'
import Testimonials from '@/app/components/testimonal'
 import Whatwedo from '@/app/components/whatwedo'
import WhyChooseUs from '@/app/components/whychooseus'
 import React from 'react'

function Header() {
  return (
    <div>
<Hero />
<Whatwedo />
 <WhyChooseUs />
 <Portfolio />
 <Testimonials />

    </div>
  )
}

export default Header
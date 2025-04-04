import AboutSection from '@/components/about-section';
import ContactSection from '@/components/ContactForm';

import Footer from '@/components/footer';
import PortfolioSection from '@/components/portfolio';
import Testimonial from '@/components/testimonial';
import { Button } from '@/components/ui/button';
import WhatIDoSection from '@/components/whatIDoSection';
import { Badge } from 'lucide-react';
import Link from 'next/link';

const HomePage = () => {
  return (
    <main>
      {/* Logo */}
      <div className='flex w-full justify-center py-6'>
        <div className='text-4xl font-bold'>Saikat 👋</div>
      </div>
      {/* ! Hero Section */}
      <section className='container mx-auto'>
        <div className='flex min-h-[90%] w-full flex-col items-center justify-center gap-10 px-6 py-16'>
          <div className='max-w-2xl text-center'>
            <Badge className='rounded-full border-none bg-gradient-to-br from-primary via-muted/30 via-70% to-primary py-1'>
              Welcome to Next Focus
            </Badge>
            <h1 className='mb-6 text-4xl font-bold md:text-6xl'>
              I Make Marketing Look Easy{' '}
              <span className='text-purple-600'>
                (But It&apos;s Really Not)
              </span>{' '}
              🚀
            </h1>
            <p className='mt-6 text-[17px] md:text-lg'>
              Digital Marketing Expert with 8+ years of experience, helping
              businesses get noticed and make money.
            </p>
            <div className='mt-6 flex items-center justify-center gap-4'>
              {/* <Button size='lg' className='rounded-full text-base'>
                <a href='#contact'>Let’s Chat and Make Magic Happen</a>
                <ArrowUpRight className='ml-2 !h-5 !w-5' />
              </Button> */}
              <Link href='/contact'>
                <Button
                  size='lg'
                  className='bg-purple-600 px-8 py-6 text-lg hover:bg-purple-700'
                  // onClick={() =>
                  //   document
                  //     .getElementById('contact')
                  //     ?.scrollIntoView({ behavior: 'smooth' })
                  // }
                >
                  <span className='hidden md:inline-block'>
                    Let&apos;s Chat and Make Magic Happen
                  </span>
                  <span className='md:hidden'>Let&apos;s Chat</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* About Me Section */}
      <AboutSection />
      {/* What I Do Section */}
      <WhatIDoSection />
      {/* Portfolio Section */}
      <PortfolioSection />
      {/* Testimonials Section */}
      <Testimonial />
      {/* Contact Section */}
      <ContactSection />
      {/* Footer */}
      <Footer />
    </main>
  );
};

export default HomePage;

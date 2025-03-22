import Footer from '@/components/footer';
import { Button } from '@/components/ui/button';
import WhatIDoSection from '@/components/whatIDoSection';
import { ArrowUpRight, Badge } from 'lucide-react';

const HomePage = () => {
  return (
    <main>
      {/* Logo */}
      <div className='flex w-full justify-center py-6'>
        <div className='text-3xl font-bold'>Saikat</div>
      </div>
      {/* ! Hero Section */}
      <section className='container px-4 sm:px-6 lg:px-8'>
        <div className='flex min-h-screen w-full flex-col items-center justify-center gap-10 px-6 py-16'>
          <div className='max-w-2xl text-center'>
            <Badge className='rounded-full border-none bg-gradient-to-br from-primary via-muted/30 via-70% to-primary py-1'>
              Welcome to Next Focus
            </Badge>
            <h1 className='mt-6 text-2xl font-black leading-[1.1] tracking-tight sm:text-5xl md:text-6xl'>
              “I Make Marketing Look Easy (But It’s Really Not)” 🚀
            </h1>
            <p className='mt-6 text-[17px] md:text-lg'>
              Digital Marketing Expert with 8+ years of experience, helping
              businesses get noticed and make money.
            </p>
            <div className='mt-6 flex items-center justify-center gap-4'>
              <Button size='lg' className='rounded-full text-base'>
                <a href='#contact'>Let’s Chat and Make Magic Happen</a>
                <ArrowUpRight className='ml-2 !h-5 !w-5' />
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* About Me Section */}
      <section
        id='about'
        className='flex w-full flex-col items-center bg-white px-4 py-20'
      >
        <div>
          <h2 className='mb-10 text-3xl font-bold md:text-5xl'>
            Who Am I?{' '}
            <span className='text-purple-600'>
              (In Case You&apos;re Wondering)
            </span>
          </h2>
        </div>

        <div>
          <div className='mb-12 max-w-3xl text-center'>
            <p className='mb-6 text-lg md:text-xl'>
              Based in New York, Melbourne, and London (yep, I work remotely
              from all over the world), I collaborate with startups and
              well-known brands, making marketing magic happen. If you&apos;re
              tired of complicated marketing talk and want someone who just gets
              it—I&apos;m your guy.
            </p>
            <p className='text-lg font-medium md:text-xl'>
              Here&apos;s a quick peek at some of the amazing brands I&apos;ve
              worked with:
            </p>
          </div>
        </div>
      </section>
      {/* What I Do Section */}
      <WhatIDoSection />
      {/* Portfolio Section */}
      {/* Testimonials Section */}
      {/* ! Services Overview */}
      {/* Contact Section */}
      {/* Footer */}
      <Footer />
    </main>
  );
};

export default HomePage;

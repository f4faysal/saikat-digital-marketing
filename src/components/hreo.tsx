import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowUpRight } from 'lucide-react';
import ScrollBaseAnimation from './core/text-marquee';

const HeroSection = () => {
  return (
    <div className='relative flex min-h-screen w-full flex-col items-center justify-center gap-10 px-6 py-16'>
      {/* Background Image with overlay */}

      {/* Content */}
      <div className='relative z-10 max-w-2xl text-center'>
        <Badge className='rounded-full border-none bg-gradient-to-br from-primary via-muted/30 via-70% to-primary py-1'>
          {/* Optional badge content */}
          New Release
        </Badge>
        <h1 className='mt-6 text-4xl font-bold !leading-[1.2] tracking-tight text-white sm:text-5xl md:text-6xl'>
          “I Make Marketing Look Easy (But It’s Really Not)” 🚀
        </h1>
        <p className='mt-6 text-[17px] text-white md:text-lg'>
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

      {/* Visual Element */}
      <div className='relative z-10 mx-auto aspect-video w-full max-w-screen-xl overflow-hidden rounded-xl'>
        <img
          src='/path-to-your-image.jpg' // Replace with your polished image or digital marketing background
          alt='Digital Marketing Visual'
          className='h-full w-full object-cover'
        />
      </div>

      {/* Scroll-based Marquee Animation */}
      <div className='relative z-10 grid h-[500px] w-full place-content-center'>
        <ScrollBaseAnimation
          delay={500}
          baseVelocity={-3}
          clasname='font-bold tracking-[-0.07em] leading-[90%] text-white text-2xl'
        >
          I Make Marketing Look Easy (But It’s Really Not) 🚀
        </ScrollBaseAnimation>
        <ScrollBaseAnimation
          delay={500}
          baseVelocity={3}
          clasname='font-bold tracking-[-0.07em] leading-[90%] text-white text-2xl'
        >
          I Make Marketing Look Easy (But It’s Really Not) 🚀
        </ScrollBaseAnimation>
      </div>
    </div>
  );
};

export default HeroSection;

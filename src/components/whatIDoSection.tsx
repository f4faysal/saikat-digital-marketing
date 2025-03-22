// thanks to oliver: https://www.youtube.com/@olivierlarose1
'use client';

import { motion, MotionValue, useScroll, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';
import { JSX, useRef } from 'react';
const projects = [
  {
    title: 'Matthias Leidinger',
    description:
      'Originally hailing from Austria, Berlin-based photographer Matthias Leindinger is a young creative brimming with talent and ideas.',
    src: 'rock.jpg',
    link: 'https://images.unsplash.com/photo-1605106702842-01a887a31122?q=80&w=500&auto=format&fit=crop',
    color: '#5196fd'
  },
  {
    title: 'Clément Chapillon',
    description:
      'This is a story on the border between reality and imaginary, about the contradictory feelings that the insularity of a rocky, arid, and wild territory provokes”—so French photographer Clément.',
    src: 'tree.jpg',
    link: 'https://images.unsplash.com/photo-1605106250963-ffda6d2a4b32?w=500&auto=format&fit=crop&q=60',
    color: '#8f89ff'
  },
  {
    title: 'Zissou',
    description:
      'Though he views photography as a medium for storytelling, Zissou’s images don’t insist on a narrative. Both crisp and ethereal.',
    src: 'water.jpg',
    link: 'https://images.unsplash.com/photo-1605106901227-991bd663255c?w=500&auto=format&fit=crop',
    color: '#13006c'
  },
  {
    title: 'Mathias Svold and Ulrik Hasemann',
    description:
      'The coastlines of Denmark are documented in tonal colors in a pensive new series by Danish photographers Ulrik Hasemann and Mathias Svold; an ongoing project investigating how humans interact with and disrupt the Danish coast.',
    src: 'house.jpg',
    link: 'https://images.unsplash.com/photo-1605106715994-18d3fecffb98?w=500&auto=format&fit=crop&q=60',
    color: '#ed649e'
  },
  {
    title: 'Mark Rammers',
    description:
      'Dutch photographer Mark Rammers has shared with IGNANT the first chapter of his latest photographic project, ‘all over again’—captured while in residency at Hektor, an old farm in Los Valles, Lanzarote.',
    src: 'cactus.jpg',
    link: 'https://images.unsplash.com/photo-1506792006437-256b665541e2?w=500&auto=format&fit=crop',
    color: '#fd521a'
  }
];

const services = [
  {
    title: 'Digital Marketing Consultancy',
    tagline:
      'I give advice that actually makes sense—and yes, it’s free (I’m nice like that).',
    description:
      'I’ll take a look at your business, analyze what’s working and what’s not, and offer clear, actionable advice that will boost your digital presence. Simple, no jargon, and easy to follow.',
    src: 'rock.jpg',
    link: 'https://images.unsplash.com/photo-1605106702842-01a887a31122?q=80&w=500&auto=format&fit=crop',
    color: '#5196fd'
  },
  {
    title: 'Media Buying',
    tagline:
      'I place ads that reach the right people without wasting your budget.',
    description:
      'I make sure your ads are seen by the right eyes at the right time—no fluff, no waste. Just targeted media buying that gets you results. Your money is too precious to waste!',
    src: 'tree.jpg',
    link: 'https://images.unsplash.com/photo-1605106250963-ffda6d2a4b32?w=500&auto=format&fit=crop&q=60',
    color: '#8f89ff'
  },
  {
    title: 'SEO',
    tagline:
      'Making Google love your site so you get more traffic, more leads, and more sales.',
    description:
      'SEO isn’t a mystery; it’s a strategy. I’ll help your site rank higher, get noticed by search engines, and attract those perfect leads. The best part? It lasts long-term.',
    src: 'water.jpg',
    link: 'https://images.unsplash.com/photo-1605106901227-991bd663255c?w=500&auto=format&fit=crop',
    color: '#13006c'
  },
  {
    title: 'CRO (Conversion Rate Optimization)',
    tagline:
      'I help turn your visitors into loyal customers (and maybe even superfans).',
    description:
      'A pretty website isn’t enough. I’ll ensure your site is optimized to convert visitors into leads—and leads into paying customers. Let’s make your website a sales machine.',
    src: 'house.jpg',
    link: 'https://images.unsplash.com/photo-1605106715994-18d3fecffb98?w=500&auto=format&fit=crop&q=60',
    color: '#ed649e'
  },
  {
    title: 'ASO (App Store Optimization)',
    tagline: 'Making sure your app isn’t the best-kept secret in the store.',
    description:
      'With ASO, I help your app get found, downloaded, and loved by users. More installs, more visibility, more success. If your app isn’t getting the attention it deserves, I can fix that.',
    src: 'cactus.jpg',
    link: 'https://images.unsplash.com/photo-1506792006437-256b665541e2?w=500&auto=format&fit=crop',
    color: '#fd521a'
  },
  {
    title: 'Social Media Marketing',
    tagline:
      'I’ll create content so good your audience won’t be able to stop sharing it.',
    description:
      'Social media isn’t just about posting pretty pictures. It’s about creating engaging content that builds your community and turns followers into loyal fans. I’ll help your brand become the talk of the town.',
    src: 'house.jpg',
    link: 'https://images.unsplash.com/photo-1605106715994-18d3fecffb98?w=500&auto=format&fit=crop&q=60',
    color: '#ed649e'
  }
];

export default function WhatIDoSection(): JSX.Element {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  });
  return (
    <div className='bg-slate-950'>
      <main className='container mx-auto' ref={container}>
        <>
          <section className='grid h-[70vh] w-full place-content-center bg-slate-950 text-white'>
            <div className='absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]'></div>

            <h1 className='text-center text-4xl font-semibold leading-[120%] tracking-tight md:text-5xl 2xl:text-7xl'>
              Let's Take Your Business on a Ride Through Digital Marketing! 👇
            </h1>
            <p className='mt-6 text-center text-base font-semibold leading-[120%] tracking-tight text-slate-300 md:text-lg 2xl:text-xl'>
              As you scroll down, the train rolls in, each bogey (car) revealing
              a different service I offer. Hop on and enjoy the ride!
            </p>

            <motion.div
              className='mt-12 flex justify-center'
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <ChevronDown className='h-10 w-10 animate-bounce text-slate-300' />
            </motion.div>
          </section>
        </>

        <section className='w-full text-white'>
          {services.map((service, i) => {
            const targetScale = 1 - (projects.length - i) * 0.05;
            return (
              <Card
                key={`p_${i}`}
                i={i}
                url={service?.link}
                src={service?.src}
                title={service?.title}
                color={service?.color}
                description={service?.description}
                tagline={service?.tagline}
                progress={scrollYProgress}
                range={[i * 0.25, 1]}
                targetScale={targetScale}
              />
            );
          })}
        </section>
      </main>
    </div>
  );
}
interface CardProps {
  i: number;
  title: string;
  description: string;
  src: string;
  url: string;
  color: string;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
  tagline: string;
}
export const Card: React.FC<CardProps> = ({
  i,
  title,
  description,
  src,
  url,
  color,
  progress,
  range,
  targetScale,
  tagline
}) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className='sticky top-0 flex h-screen items-center justify-center'
    >
      <motion.div
        style={{
          backgroundColor: color,
          scale,
          top: `calc(-5vh + ${i * 25}px)`
        }}
        className={`relative -top-[25%] flex h-[450px] w-[70%] origin-top flex-col rounded-md p-10`}
      >
        <div className={`mt-5 flex h-full gap-10`}>
          <div className={`relative top-[10%] w-[40%]`}>
            <h2 className='mb-4 text-center text-2xl font-bold text-white md:text-left md:text-3xl'>
              {title}
            </h2>
            <h5 className='mb-4 text-center text-sm italic text-gray-300 md:text-left'>
              {tagline}
            </h5>
            <p className='mb-6 text-center text-sm text-gray-200 md:text-left'>
              {description}
            </p>
            <span className='flex items-center gap-2 pt-2'>
              <a
                href={'#'}
                target='_blank'
                className='cursor-pointer underline'
              >
                Get Started
              </a>
              <svg
                width='22'
                height='12'
                viewBox='0 0 22 12'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M21.5303 6.53033C21.8232 6.23744 21.8232 5.76256 21.5303 5.46967L16.7574 0.696699C16.4645 0.403806 15.9896 0.403806 15.6967 0.696699C15.4038 0.989592 15.4038 1.46447 15.6967 1.75736L19.9393 6L15.6967 10.2426C15.4038 10.5355 15.4038 11.0104 15.6967 11.3033C15.9896 11.5962 16.4645 11.5962 16.7574 11.3033L21.5303 6.53033ZM0 6.75L21 6.75V5.25L0 5.25L0 6.75Z'
                  fill='black'
                />
              </svg>
            </span>
          </div>

          <div className={`relative h-full w-[60%] overflow-hidden rounded-lg`}>
            <motion.div
              className={`h-full w-full`}
              style={{ scale: imageScale }}
            >
              <Image fill src={url} alt='image' className='object-cover' />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

// export const Card: React.FC<CardProps> = ({
//   i,
//   title,
//   description,
//   src,
//   url,
//   color,
//   progress,
//   range,
//   targetScale,
//   tagline
// }) => {
//   const container = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: container,
//     offset: ['start end', 'start start']
//   });

//   // Apply a slight zoom effect on the image as you scroll
//   const imageScale = useTransform(scrollYProgress, [0, 1], [1.1, 1]);
//   // Scale the whole card based on external progress
//   const scale = useTransform(progress, range, [1, targetScale]);

//   return (
//     <div
//       ref={container}
//       className='sticky top-0 flex h-screen items-center justify-center'
//     >
//       <motion.div
//         style={{
//           backgroundColor: color,
//           scale,
//           top: `calc(-5vh + ${i * 25}px)`
//         }}
//         className='relative -top-[25%] flex h-[450px] w-[90%] max-w-5xl flex-col overflow-hidden rounded-xl shadow-lg transition-transform duration-300 hover:scale-105 md:flex-row'
//       >
//         {/* Text Section */}
//         <div className='flex flex-col justify-center bg-gradient-to-br from-black/70 to-transparent p-8 md:w-1/2'>
//           <h2 className='mb-4 text-center text-2xl font-bold text-white md:text-left md:text-3xl'>
//             {title}
//           </h2>
//           <p className='mb-4 text-center text-sm italic text-gray-300 md:text-left'>
//             {tagline}
//           </p>
//           <p className='mb-6 text-center text-sm text-gray-200 md:text-left'>
//             {description}
//           </p>
//           <div className='mt-2 text-center md:text-left'>
//             <Link
//               href={url || '#'}
//               className='inline-flex items-center text-white hover:underline'
//             >
//               Get Started <ArrowRight className='ml-2' />
//             </Link>
//           </div>
//         </div>

//         {/* Image Section */}
//         <div className='relative md:w-1/2'>
//           <motion.div
//             className='relative h-full w-full'
//             style={{ scale: imageScale }}
//           >
//             <Image
//               src={url || '/placeholder.svg'}
//               alt={title}
//               fill
//               className='object-cover'
//             />
//             <div
//               className='absolute inset-0'
//               style={{
//                 background: `linear-gradient(to right, ${color}, transparent)`
//               }}
//             />
//           </motion.div>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

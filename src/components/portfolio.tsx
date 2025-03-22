'use client';

import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader
} from '@/components/ui/card';

export default function PortfolioSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const successStories = [
    {
      client: 'Acme Corp',
      achievement:
        'Achieved a 40% increase in revenue with targeted digital marketing.',
      icon: '📈',
      project: 'Digital Transformation',
      description:
        'Overhauled marketing strategy and implemented A/B testing for optimized results.'
    },
    {
      client: 'Globex Inc',
      achievement:
        'Boosted user engagement by 55% through a revamped UX design.',
      icon: '🚀',
      project: 'UI/UX Redesign',
      description:
        'Enhanced user flows and interactive components to improve retention.'
    },
    {
      client: 'Soylent Industries',
      achievement:
        'Enhanced brand visibility by 70% using innovative social media campaigns.',
      icon: '🎯',
      project: 'Social Media Blitz',
      description:
        'Crafted viral content strategies that resonated with a broader audience.'
    },
    {
      client: 'Initech',
      achievement:
        'Optimized conversion rates by 35% with data-driven insights.',
      icon: '💼',
      project: 'E-commerce Overhaul',
      description:
        'Redesigned the checkout process and personalized user experiences.'
    },
    {
      client: 'Umbrella Corp',
      achievement:
        'Reduced bounce rate by 25% with a modern, responsive redesign.',
      icon: '📱',
      project: 'Responsive Redesign',
      description:
        'Integrated performance enhancements and mobile-first design principles.'
    },
    {
      client: 'Stark Industries',
      achievement: 'Leveraged automation to improve efficiency by 60%.',
      icon: '⚙️',
      project: 'Automation Integration',
      description:
        'Deployed cutting-edge tools to streamline operations across departments.'
    },
    {
      client: 'Wayne Enterprises',
      achievement:
        'Increased customer retention by 45% with a loyalty program.',
      icon: '🏢',
      project: 'Customer Loyalty',
      description:
        'Developed a rewards program that incentivized repeat business.'
    },
    {
      client: 'Wonka Industries',
      achievement:
        'Expanded global reach by 50% through innovative partnerships.',
      icon: '🍫',
      project: 'Global Expansion',
      description: 'Forged strategic alliances to tap into new markets.'
    }
  ];

  return (
    <section className='w-full bg-gradient-to-b from-background to-muted py-16 md:py-24'>
      <div className='container px-4 md:px-6'>
        <div className='flex flex-col items-center justify-center space-y-4 text-center'>
          <div className='space-y-2'>
            <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
              Some of My Favorite Campaigns
            </h2>
            <p className='mx-auto max-w-[700px] text-purple-700 md:text-xl'>
              (Because Who Doesn't Love a Success Story?)
            </p>
          </div>
        </div>

        <div className='mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4'>
          {successStories.map((story, index) => (
            <Card
              key={index}
              className='overflow-hidden border-none shadow-md transition-all duration-300 hover:shadow-xl'
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className={`h-1.5 bg-gradient-to-r from-primary to-primary/70 transition-all duration-500 ${hoveredIndex === index ? 'w-full' : 'w-1/3'}`}
              />

              <CardHeader className='pb-2 pt-6'>
                <div className='mb-3 flex items-center gap-3'>
                  <div className='flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-2xl'>
                    {story.icon}
                  </div>
                  <div className='flex-1'>
                    <h3 className='text-lg font-semibold'>{story.client}</h3>
                    <Badge variant='outline' className='mt-1 font-normal'>
                      {story.project}
                    </Badge>
                  </div>
                </div>
              </CardHeader>

              <CardContent className='pb-2'>
                <p className='text-sm leading-relaxed'>{story.achievement}</p>
              </CardContent>

              <CardFooter className='flex flex-col items-start pb-5 pt-0'>
                <p className='text-xs italic text-muted-foreground'>
                  {story.description}
                </p>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className='mt-16 flex flex-col items-center gap-3'>
          <Button asChild size='lg' className='group'>
            <Link href='/contact'>
              View detailed case studies
              <ArrowRight className='ml-2 h-4 w-4 transition-transform group-hover:translate-x-1' />
            </Link>
          </Button>
          <p className='text-sm text-muted-foreground'>
            Data-driven strategies with measurable outcomes
          </p>
        </div>
      </div>
    </section>
  );
}

// import { ArrowRight } from 'lucide-react';
// import Link from 'next/link';

// import { Button } from '@/components/ui/button';
// import {
//   Card,
//   CardContent,
//   CardFooter,
//   CardHeader,
//   CardTitle
// } from '@/components/ui/card';

// export default function PortfolioSection() {
// const successStories = [
//   {
//     client: 'Acme Corp',
//     achievement:
//       'Achieved a 40% increase in revenue with targeted digital marketing.',
//     icon: '📈',
//     project: 'Digital Transformation',
//     description:
//       'Overhauled marketing strategy and implemented A/B testing for optimized results.'
//   },
//   {
//     client: 'Globex Inc',
//     achievement: 'Boosted user engagement by 55% through a revamped UX design.',
//     icon: '🚀',
//     project: 'UI/UX Redesign',
//     description:
//       'Enhanced user flows and interactive components to improve retention.'
//   },
//   {
//     client: 'Soylent Industries',
//     achievement:
//       'Enhanced brand visibility by 70% using innovative social media campaigns.',
//     icon: '🎯',
//     project: 'Social Media Blitz',
//     description:
//       'Crafted viral content strategies that resonated with a broader audience.'
//   },
//   {
//     client: 'Initech',
//     achievement: 'Optimized conversion rates by 35% with data-driven insights.',
//     icon: '💼',
//     project: 'E-commerce Overhaul',
//     description:
//       'Redesigned the checkout process and personalized user experiences.'
//   },
//   {
//     client: 'Umbrella Corp',
//     achievement:
//       'Reduced bounce rate by 25% with a modern, responsive redesign.',
//     icon: '📱',
//     project: 'Responsive Redesign',
//     description:
//       'Integrated performance enhancements and mobile-first design principles.'
//   },
//   {
//     client: 'Stark Industries',
//     achievement: 'Leveraged automation to improve efficiency by 60%.',
//     icon: '⚙️',
//     project: 'Automation Integration',
//     description:
//       'Deployed cutting-edge tools to streamline operations across departments.'
//   },
//   {
//     client: 'Wayne Enterprises',
//     achievement: 'Increased customer retention by 45% with a loyalty program.',
//     icon: '🏢',
//     project: 'Customer Loyalty',
//     description:
//       'Developed a rewards program that incentivized repeat business.'
//   },
//   {
//     client: 'Wonka Industries',
//     achievement:
//       'Expanded global reach by 50% through innovative partnerships.',
//     icon: '🍫',
//     project: 'Global Expansion',
//     description: 'Forged strategic alliances to tap into new markets.'
//   }
// ];

//   return (
//     <section className='w-full bg-gradient-to-b from-white to-purple-50 py-12 md:py-24 lg:py-32'>
//       <div className='container px-4 md:px-6'>
{
  /* <div className='flex flex-col items-center justify-center space-y-4 text-center'>
  <div className='space-y-2'>
    <h2 className='text-3xl font-bold tracking-tighter text-purple-800 sm:text-4xl md:text-5xl'>
      Some of My Favorite Campaigns
      <span className='mt-2 block text-xl text-black'>
        (Because Who Doesn't Love a Success Story?)
      </span>
    </h2>
    <p className='mx-auto max-w-[700px] text-purple-700 md:text-xl'>
      Here's a sneak peek at some of my wins:
    </p>
  </div>
</div>; */
}
//         <div className='mx-auto mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:gap-8'>
//           {successStories.map((story, index) => (
//             <Card
//               key={index}
//               className='group relative flex h-full flex-col overflow-hidden border border-purple-200 bg-white shadow-lg transition-all duration-300 hover:shadow-xl'
//             >
//               <div className='absolute inset-0 bg-gradient-to-br from-purple-500/10 to-purple-700/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100' />
//               <div className='absolute top-0 h-1 w-full bg-purple-500' />
//               <CardHeader className='relative z-10'>
//                 <div className='mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 text-4xl shadow-inner'>
//                   {story.icon}
//                 </div>
//                 <CardTitle className='text-center text-xl text-purple-800'>
//                   {story.client}
//                 </CardTitle>
//               </CardHeader>
//               <CardContent className='relative z-10 flex-grow'>
//                 <p className='px-4 text-center text-purple-700'>
//                   {story.achievement}
//                 </p>
//                 <p className='mt-2 text-center text-sm italic text-purple-600'>
//                   {story.project}
//                 </p>
//               </CardContent>
//               <CardFooter className='relative z-10 pb-4 pt-0'>
//                 <p className='px-2 text-center text-xs text-purple-500'>
//                   {story.description}
//                 </p>
//                 <div className='my-2 h-px w-full bg-gradient-to-r from-transparent via-purple-300 to-transparent' />
//               </CardFooter>
//             </Card>
//           ))}
//         </div>
//         <div className='mt-12 flex justify-center'>
//           <Button
//             asChild
//             size='lg'
//             className='group bg-purple-500 text-white hover:bg-purple-600'
//           >
//             <Link href='/contact'>
//               Get the juicy details
//               <ArrowRight className='ml-2 h-4 w-4 transition-transform group-hover:translate-x-1' />
//             </Link>
//           </Button>
//         </div>
//         <p className='mt-4 text-center text-purple-600'>
//           Spoiler: It wasn't magic—just strategy!
//         </p>
//       </div>
//     </section>
//   );
// }

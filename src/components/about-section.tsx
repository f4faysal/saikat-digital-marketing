'use client';

import { motion } from 'framer-motion';
import { Briefcase, ChevronDown, Globe, MapPin } from 'lucide-react';
import Image from 'next/image';
import BrandLogos from './brand-logos';

export default function AboutSection() {
  return (
    <section
      id='about'
      className='relative overflow-hidden bg-gradient-to-b from-white to-gray-50 px-4 py-24 dark:from-gray-900 dark:to-gray-800'
    >
      {/* Background decorative elements */}
      <div className='absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-purple-500 via-purple-600 to-blue-500'></div>
      <div className='absolute -right-24 -top-24 h-48 w-48 rounded-full bg-purple-100 opacity-70 blur-3xl dark:bg-purple-900/20'></div>
      <div className='absolute -bottom-24 -left-24 h-48 w-48 rounded-full bg-blue-100 opacity-70 blur-3xl dark:bg-blue-900/20'></div>

      <div className='container mx-auto max-w-6xl'>
        <div className='grid grid-cols-1 items-center gap-12 lg:grid-cols-5'>
          {/* Profile Image Column */}
          <motion.div
            className='flex justify-center lg:col-span-2'
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className='relative'>
              <div className='h-64 w-64 overflow-hidden rounded-full border-4 border-white shadow-xl dark:border-gray-800 md:h-80 md:w-80'>
                <Image
                  src='/placeholder.svg?height=400&width=400'
                  alt='Profile'
                  width={400}
                  height={400}
                  className='h-full w-full object-cover'
                />
              </div>
              <div className='absolute -bottom-4 -right-4 rounded-full bg-white p-4 shadow-lg dark:bg-gray-800'>
                <Globe className='h-8 w-8 text-purple-600' />
              </div>
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            className='lg:col-span-3'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className='mb-6 text-3xl font-bold leading-tight md:text-4xl lg:text-5xl'>
              Who Am I?{' '}
              <span className='mt-1 block text-purple-600 md:inline'>
                (In Case You&apos;re Wondering)
              </span>
            </h2>

            <div className='space-y-6 text-gray-700 dark:text-gray-300'>
              <p className='text-lg leading-relaxed md:text-xl'>
                Based in New York, Melbourne, and London (yep, I work remotely
                from all over the world), I collaborate with startups and
                well-known brands, making marketing magic happen. If you&apos;re
                tired of complicated marketing talk and want someone who just
                gets it—I&apos;m your guy.
              </p>

              <div className='flex flex-wrap gap-4 py-2'>
                <div className='flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm dark:bg-gray-800'>
                  <MapPin className='h-5 w-5 text-purple-600' />
                  <span className='text-sm font-medium'>New York</span>
                </div>
                <div className='flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm dark:bg-gray-800'>
                  <MapPin className='h-5 w-5 text-purple-600' />
                  <span className='text-sm font-medium'>Melbourne</span>
                </div>
                <div className='flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm dark:bg-gray-800'>
                  <MapPin className='h-5 w-5 text-purple-600' />
                  <span className='text-sm font-medium'>London</span>
                </div>
                <div className='flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm dark:bg-gray-800'>
                  <Briefcase className='h-5 w-5 text-purple-600' />
                  <span className='text-sm font-medium'>
                    Marketing Specialist
                  </span>
                </div>
              </div>

              <p className='pt-2 text-lg font-medium md:text-xl'>
                Here&apos;s a quick peek at some of the amazing brands I&apos;ve
                worked with:
              </p>
            </div>

            <motion.div
              className='mt-8'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              <div className='group inline-flex items-center gap-2 font-semibold text-purple-600'>
                View my partner brands
                <ChevronDown className='h-5 w-5 transition-transform group-hover:translate-y-1' />
              </div>
            </motion.div>
          </motion.div>
        </div>
        <BrandLogos />
      </div>
    </section>
  );
}

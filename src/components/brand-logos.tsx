'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

const brands = [
  { id: 2, name: 'Nexus Labs', logo: '/placeholder.svg?height=100&width=150' },
  {
    id: 3,
    name: 'Quantum Edge',
    logo: '/placeholder.svg?height=100&width=150'
  },
  { id: 4, name: 'Fusion Wave', logo: '/placeholder.svg?height=100&width=150' },
  {
    id: 5,
    name: 'Damo Solutions',
    logo: '/placeholder.svg?height=100&width=150'
  },
  {
    id: 6,
    name: 'Apex Digital',
    logo: '/placeholder.svg?height=100&width=150'
  },
  {
    id: 7,
    name: 'Damo Ventures',
    logo: '/placeholder.svg?height=100&width=150'
  },
  { id: 8, name: 'Horizon AI', logo: '/placeholder.svg?height=100&width=150' },
  { id: 9, name: 'BanglaTech', logo: '/placeholder.svg?height=100&width=150' }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 24
    }
  }
};

export default function BrandLogos() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <div className='mx-auto mt-10 max-w-6xl'>
      <motion.div
        className='w-full'
        variants={container}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, margin: '-100px' }}
        id='brands'
      >
        <div className='grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8'>
          {brands.map((brand) => (
            <motion.div
              key={brand.id}
              className='relative flex h-28 cursor-pointer items-center justify-center rounded-xl border border-gray-100 bg-white p-5 shadow-lg dark:border-gray-700 dark:bg-gray-800'
              variants={item}
              whileHover={{
                scale: 1.05,
                boxShadow:
                  '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
              }}
              onMouseEnter={() => setHoveredId(brand.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className='relative h-full w-full'>
                <Image
                  src={brand.logo || '/placeholder.svg'}
                  alt={brand.name}
                  fill
                  className='object-contain'
                />
              </div>

              <AnimatePresence>
                {hoveredId === brand.id && (
                  <motion.div
                    className='absolute inset-0 flex items-center justify-center rounded-xl bg-purple-600 bg-opacity-95'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div
                      className='px-3 text-center'
                      initial={{ y: 5, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.1 }}
                    >
                      <p className='mb-1 text-lg font-semibold text-white'>
                        {brand.name}
                      </p>
                      <p className='text-sm text-purple-100'>
                        Strategic Partner
                      </p>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

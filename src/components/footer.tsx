'use client';
import AnimatedText from '@/components/core/cursor-follow-text';

function Footer() {
  return (
    <>
      <footer className='footer-bg radial-gradient-bg relative mx-auto mb-8 h-fit w-[95%] overflow-hidden rounded-lg border [--gradient-center:#f3f4f6] [--gradient-edge:#f3f4f6] dark:[--gradient-center:#02081765] dark:[--gradient-edge:#020817] lg:pb-20 2xl:h-[550px]'>
        <div className='justify-between gap-10 rounded-sm rounded-b-none bg-blue-500 p-5 py-5 text-white dark:bg-[#4c61ff] sm:flex 2xl:py-10'>
          <div className='flex w-fit flex-col justify-center'>
            <div className='relative ml-3 h-20 w-20 rounded-sm bg-white before:absolute before:-left-3 before:-top-3 before:h-full before:w-full before:rounded-md before:bg-white/50 2xl:h-24 2xl:w-24'></div>
            <article className='w-64 space-y-1 py-2 2xl:w-80'>
              <h1 className='newFont text-3xl font-bold'>SAIKAT</h1>
              <p className='text-sm leading-[120%]'>
                Still thinking about how I can help you grow? Let's chat, I
                promise I won't bite!
              </p>
              {/* © 2025 Saikat Digital Marketing */}
              <span className='text-sm leading-[120%]'>
                © 2025 Saikat Digital Marketing
              </span>
            </article>
          </div>

          <div className='relative z-[1] mt-4 flex w-full gap-2 sm:mt-0 sm:block sm:w-auto sm:space-y-2'>
            <a
              href='https://www.linkedin.com/in/naymur-rahman/'
              target='_blank'
              className='grid h-32 w-full place-content-center rounded-lg bg-gray-50 p-5 sm:w-auto 2xl:h-40 2xl:p-10'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='70'
                height='62'
                viewBox='0 0 70 62'
                fill='none'
                className='w-full text-blue-500 sm:w-24'
              >
                <path
                  d='M55.1291 0H65.8629L42.4127 26.2626L70 62H48.3994L31.481 40.3254L12.1226 62H1.38228L26.4646 33.9092L0 0H22.149L37.4417 19.8114L55.1291 0ZM51.3619 55.7046H57.3096L18.9172 5.96472H12.5347L51.3619 55.7046Z'
                  fill='currentColor'
                ></path>
              </svg>
            </a>
            <a
              href='https://x.com/naymur_dev'
              target='_blank'
              className='grid h-32 w-full place-content-center rounded-lg bg-gray-50 p-5 sm:w-auto 2xl:h-40 2xl:p-10'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='100%'
                height='100%'
                viewBox='0 0 80 78'
                fill='none'
                className='w-full text-blue-500 sm:w-24'
              >
                <path
                  d='M16.6 8.79036C16.6 13.3937 12.9 17.1237 8.33333 17.1237C3.76667 17.1237 0.0666667 13.3937 0.0666667 8.79036C0.0666667 4.19036 3.76667 0.457031 8.33333 0.457031C12.9 0.457031 16.6 4.19036 16.6 8.79036ZM16.6667 23.7904H0V77.1237H16.6667V23.7904ZM43.2733 23.7904H26.7133V77.1237H43.2767V49.127C43.2767 33.5604 63.3733 32.287 63.3733 49.127V77.1237H80V43.3537C80 17.087 50.26 18.0437 43.2733 30.9737V23.7904Z'
                  fill='currentColor'
                ></path>
              </svg>
            </a>
          </div>
        </div>
        <div className='hidden lg:flex'>
          <AnimatedText
            text='SAIKAT'
            className='text-[12vw] 2xl:text-[11rem]'
          />
        </div>
      </footer>
    </>
  );
}

export default Footer;

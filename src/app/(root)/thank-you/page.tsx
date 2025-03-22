// app/thank-you/page.tsx
export default function ThankYouPage() {
  return (
    <section className='flex min-h-screen items-center justify-center bg-gradient-to-r from-purple-100 to-blue-100'>
      <div className='mx-auto w-full max-w-xl rounded-lg bg-white p-8 text-center shadow-lg'>
        <h1 className='mb-4 text-4xl font-bold text-purple-800 md:text-6xl'>
          Thank You!
        </h1>
        <p className='mb-6 text-lg text-purple-600 md:text-xl'>
          Your message has been successfully sent. We appreciate you reaching
          out and will get back to you shortly.
        </p>
        <a
          href='/'
          className='inline-block rounded bg-purple-500 px-4 py-2 font-semibold text-white transition-colors hover:bg-purple-600'
        >
          Return Home
        </a>
      </div>
    </section>
  );
}

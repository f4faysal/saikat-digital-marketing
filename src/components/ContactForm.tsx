// app/contact/page.tsx

import { sendContactForm } from '@/actions/contact';

export default function ContactSection() {
  return (
    <section id='contact' className='w-full'>
      <div className='mx-auto max-w-3xl text-center'>
        <h2 className='mb-6 text-3xl font-bold md:text-5xl'>
          Let&apos;s Make Your Business the Next Success Story
        </h2>
        <p className='mb-10 text-lg md:text-xl'>
          Still thinking about how I can help you grow? Let&apos;s chat, I
          promise I won&apos;t bite! (Unless you&apos;re a competitor... then,
          maybe just a little.) 😜
        </p>
        <form
          action={sendContactForm}
          method='POST'
          className='mx-auto max-w-lg space-y-6 rounded-lg bg-gradient-to-r from-purple-100 to-blue-100 p-10 text-left'
        >
          <div>
            <label
              htmlFor='name'
              className='block text-sm font-medium text-gray-700'
            >
              Name
            </label>
            <input
              id='name'
              name='name'
              type='text'
              required
              placeholder='Your Name'
              className='mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-purple-500 focus:ring-purple-500'
            />
          </div>
          <div>
            <label
              htmlFor='email'
              className='block text-sm font-medium text-gray-700'
            >
              Email
            </label>
            <input
              id='email'
              name='email'
              type='email'
              required
              placeholder='Your Email'
              className='mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-purple-500 focus:ring-purple-500'
            />
          </div>
          <div>
            <label
              htmlFor='message'
              className='block text-sm font-medium text-gray-700'
            >
              Message
            </label>
            <textarea
              id='message'
              name='message'
              required
              placeholder='Your Message'
              rows={4}
              className='mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-purple-500 focus:ring-purple-500'
            />
          </div>
          <button
            type='submit'
            className='w-full rounded-md bg-purple-500 px-4 py-2 font-semibold text-white transition-colors hover:bg-purple-600'
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

// app/actions/contact.ts
import { redirect } from 'next/navigation';

export async function sendContactForm(formData: FormData) {
  'use server';

  // Extract form values
  const name = formData.get('name')?.toString() || '';
  const email = formData.get('email')?.toString() || '';
  const message = formData.get('message')?.toString() || '';

  // Process the data (save to a database, send an email, etc.)
  console.log('Contact Form Submission:', { name, email, message });

  // After processing, you can redirect or return data
  return redirect('/thank-you');
}

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { motion } from 'framer-motion';
import { useState } from 'react';

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center py-20">
      <motion.div
        className="bg-white shadow-xl rounded-xl p-8 md:p-12 w-full max-w-xl text-center"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <img src="/branding/assets/logo-2.png" className="mx-auto w-16 h-16 mb-6" />
        <h1 className="text-3xl font-bold text-blue-900 mb-2" style={{ fontFamily: 'Roboto', fontWeight: 700 }}>
          Contact SecureMed Vault
        </h1>
        <p className="text-blue-900/80 mb-8">We're here for your questions, feedback, or just to say hello!</p>
        {!submitted ? (
          <form
            onSubmit={e => {
              e.preventDefault();
              setSubmitted(true);
            }}
            className="flex flex-col gap-5"
          >
            <Input id="contact-name" required type="text" placeholder="Your Name" className="bg-blue-50" />
            <Input id="contact-email" required type="email" placeholder="Your Email" className="bg-blue-50" />
            <Textarea id="contact-message" required placeholder="Message" className="bg-blue-50 min-h-[120px]" />
            <Button id="contact-send" type="submit" className="bg-blue-700 hover:bg-blue-900 text-white font-bold py-3 text-lg rounded-lg">Send Message</Button>
          </form>
        ) : (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="mt-6"
          >
            <div className="text-blue-700 font-bold text-xl mb-2">Thank you!</div>
            <div className="text-blue-900">Your message has landed safely in our vault. We’ll respond soon!</div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}

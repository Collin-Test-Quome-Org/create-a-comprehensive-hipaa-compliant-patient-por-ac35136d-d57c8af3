import { motion } from 'framer-motion';

export function About() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-slate-50 via-white to-slate-100 pt-16">
      <motion.div
        className="max-w-3xl mx-auto px-6 py-16"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="text-4xl font-bold mb-6 font-['Roboto'] text-blue-900">Meet HealthLock</h1>
        <p className="text-lg text-slate-700 mb-6 font-['Roboto']">
          HealthLock is your digital health vault—built for patients and families who want their medical information safe, simple, and always at hand. Our mission is to put you in control of your care experience, from scheduling to secure messaging and beyond.
        </p>
        <p className="text-lg text-slate-700 mb-6">
          Our approach: modern security and privacy, with a delightfully human touch. We believe your health journey deserves clarity, confidence, and a little spark of joy. That’s why we obsess over every detail—from our encrypted records to our gentle reminders and intuitive workflows.
        </p>
        <p className="text-lg text-slate-700">
          <span className="font-semibold text-blue-800">Who is HealthLock for?</span><br />
          Anyone seeking a better, safer way to manage their health. Whether you’re managing chronic conditions, handling your family’s care, or simply want to keep your records organized—HealthLock is here to help.
        </p>
      </motion.div>
    </div>
  );
}

import { motion } from 'framer-motion';

export function About() {
  return (
    <div className="min-h-screen bg-white pb-20">
      <div className="w-full bg-blue-50 py-12 flex flex-col items-center ">
        <motion.img
          src="/branding/assets/logo-1.png"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="w-24 h-24 mb-4"
        />
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-blue-900 mb-4 text-center"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          style={{ fontFamily: 'Roboto', fontWeight: 700 }}
        >
          Meet SecureMed Vault
        </motion.h1>
        <motion.p
          className="max-w-2xl text-lg text-blue-900/80 text-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          SecureMed Vault is your digital guardian angel for healthcare information. We're a team of privacy-obsessed technologists and healthcare professionals on a mission: to give patients superpowers over their own medical data. Our vault is built on trust, transparency, and a touch of tech magic—so you can focus on your health, not paperwork.
        </motion.p>
      </div>
      <section className="max-w-4xl mx-auto mt-12 px-4">
        <motion.h2
          className="text-2xl font-bold text-blue-700 mb-4"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          style={{ fontFamily: 'Roboto', fontWeight: 700 }}
        >
          Our Promise
        </motion.h2>
        <ul className="list-disc ml-6 text-lg text-blue-900/90 space-y-2">
          <motion.li initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.25 }}>No fine print. No hidden fees. No selling your data—ever.</motion.li>
          <motion.li initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.3 }}>Your data is encrypted end-to-end. Only you (and those you trust) can unlock it.</motion.li>
          <motion.li initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.35 }}>We believe healthcare should be easy, beautiful, and truly yours.</motion.li>
        </ul>
        <motion.h2
          className="text-2xl font-bold text-blue-700 mt-10 mb-4"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.35 }}
          style={{ fontFamily: 'Roboto', fontWeight: 700 }}
        >
          Who We Serve
        </motion.h2>
        <p className="text-lg text-blue-900/80 mb-6">
          SecureMed Vault was designed for patients who expect more—more privacy, more control, more convenience. Whether you're managing chronic conditions, supporting aging parents, or simply want your healthcare to work for <em>you</em>, we're here for you.
        </p>
      </section>
    </div>
  );
}

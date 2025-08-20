import { motion } from 'framer-motion';

export function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto py-16 px-4">
        <motion.h1
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-bold mb-6 text-blue-900"
          style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 700 }}
        >
          About Medivault
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg text-gray-700 mb-4"
          style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 400 }}
        >
          Medivault is your personal healthcare fortress—built by a team of privacy enthusiasts and tech optimists. We believe in empowering patients with full control over their medical data, while making it easy to connect and collaborate with your care team.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg text-gray-700 mb-4"
        >
          Our mission: Make healthcare data management effortless, private, and delightful. We design with accessibility at heart, security in every byte, and a dash of Medivault charm.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-8 flex items-center gap-4"
        >
          <img src="/branding/assets/logo-0.png" className="h-16" />
          <span className="text-2xl text-blue-800 font-bold" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 700 }}>
            Medivault: Your Health, Your Rules
          </span>
        </motion.div>
      </div>
    </div>
  );
}

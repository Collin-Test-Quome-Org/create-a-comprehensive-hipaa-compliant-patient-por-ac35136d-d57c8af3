import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white via-blue-50 to-slate-100">
      <div style={{ backgroundImage: "url('/branding/assets/hero-0.png')" }} className="bg-cover bg-center h-[36rem] relative">
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center">
          <motion.img
            src="/branding/assets/logo-0.png"
            initial={{ y: -60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 60, delay: 0.2 }}
            className="w-28 h-28 mb-6 drop-shadow-2xl"
          />
          <motion.h1
            className="text-white text-5xl md:text-7xl font-roboto font-bold mb-6 drop-shadow-xl"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.35 }}
            style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 700 }}
          >
            Welcome to SecureMed Vault
          </motion.h1>
          <motion.p
            className="text-white/90 text-lg md:text-2xl mb-10 max-w-2xl mx-auto"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 400 }}
          >
            Your trusted partner in secure, connected healthcare. Effortlessly manage your appointments, prescriptions, records, and more—all in one place. Where privacy meets peace of mind.
          </motion.p>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <Link to="/signup">
              <Button id="get-started-cta" className="text-lg px-10 py-6 bg-blue-700 hover:bg-blue-900 text-white rounded-lg shadow-lg font-bold transition-all ">
                Get Started
                <ChevronRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
      <section className="py-16 px-4 md:px-12 max-w-6xl mx-auto w-full">
        <motion.h2
          className="text-3xl md:text-4xl font-roboto font-bold text-blue-900 mb-6 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 700 }}
        >
          Why SecureMed Vault?
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <motion.div
            className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-center hover:shadow-xl transition-shadow"
            whileHover={{ scale: 1.05 }}
          >
            <span className="bg-blue-100 p-4 rounded-full mb-4">
              <svg width="36" height="36" fill="none" stroke="currentColor" strokeWidth="2" className="text-blue-700"><path d="M18 3l6 6h-4v9h-4v-9h-4l6-6z" /><circle cx="18" cy="18" r="15" strokeDasharray="2 2" /></svg>
            </span>
            <h3 className="text-xl font-bold mb-2 text-blue-800">Privacy First</h3>
            <p className="text-gray-600 text-center">Every byte is encrypted. Only you and your care team can access your medical world.</p>
          </motion.div>
          <motion.div
            className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-center hover:shadow-xl transition-shadow"
            whileHover={{ scale: 1.05 }}
          >
            <span className="bg-blue-100 p-4 rounded-full mb-4">
              <svg width="36" height="36" fill="none" stroke="currentColor" strokeWidth="2" className="text-blue-700"><circle cx="18" cy="18" r="13" /><path d="M18 10v8l6 3" /></svg>
            </span>
            <h3 className="text-xl font-bold mb-2 text-blue-800">Lightning Fast Access</h3>
            <p className="text-gray-600 text-center">Your info, your schedule, right when you need it. No lines, no waiting rooms.</p>
          </motion.div>
          <motion.div
            className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-center hover:shadow-xl transition-shadow"
            whileHover={{ scale: 1.05 }}
          >
            <span className="bg-blue-100 p-4 rounded-full mb-4">
              <svg width="36" height="36" fill="none" stroke="currentColor" strokeWidth="2" className="text-blue-700"><rect x="7" y="10" width="22" height="16" rx="2" /><path d="M7 14h22" /></svg>
            </span>
            <h3 className="text-xl font-bold mb-2 text-blue-800">All-in-One Platform</h3>
            <p className="text-gray-600 text-center">Book appointments, message your doctor, manage prescriptions—control your health journey.</p>
          </motion.div>
        </div>
      </section>
      <section className="py-12 px-4 bg-blue-50 border-t border-blue-200 text-center">
        <h2 className="text-2xl font-bold text-blue-900 mb-3" style={{ fontFamily: 'Roboto', fontWeight: 700 }}>
          Ready to feel in control of your health?
        </h2>
        <p className="mb-6 text-gray-700 max-w-xl mx-auto">Sign up today and experience healthcare on your terms—with SecureMed Vault, your records are truly yours.</p>
        <Link to="/signup">
          <Button id="home-signup-cta" className="bg-blue-700 hover:bg-blue-900 text-white font-bold text-lg px-8 py-4 rounded-lg shadow">
            Get Started Now <ChevronRight className="ml-2 w-5 h-5" />
          </Button>
        </Link>
      </section>
    </div>
  );
}

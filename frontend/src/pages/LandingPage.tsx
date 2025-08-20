import { Hero } from '@/components/Hero';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ShieldCheck, UserPlus, Lock } from 'lucide-react';

export const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <main className="max-w-6xl mx-auto px-4 py-16">
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mb-20 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-['Roboto'] text-[#1d4ed8] mb-4">Healthcare, Reimagined.</h2>
          <p className="text-lg md:text-xl text-slate-700 max-w-xl mx-auto">
            At <span className="font-semibold text-[#1d4ed8]">ShieldLink Health</span>, your data is your own. We bridge patients and clinicians through seamless, secure technology – so you can focus on what matters most.
          </p>
        </motion.section>
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#cbd5e1] rounded-xl shadow-lg p-8 flex flex-col items-center hover:scale-105 transition-transform">
              <ShieldCheck size={48} className="text-[#1d4ed8] mb-4" />
              <h3 className="font-bold text-xl mb-2">Private & Secure</h3>
              <p className="text-slate-600 text-center">Your health information stays protected with end-to-end encryption and privacy-first design.</p>
            </div>
            <div className="bg-[#cbd5e1] rounded-xl shadow-lg p-8 flex flex-col items-center hover:scale-105 transition-transform">
              <UserPlus size={48} className="text-[#1d4ed8] mb-4" />
              <h3 className="font-bold text-xl mb-2">Human Connection</h3>
              <p className="text-slate-600 text-center">We put people at the heart of care. Connect, share, and heal – together.</p>
            </div>
            <div className="bg-[#cbd5e1] rounded-xl shadow-lg p-8 flex flex-col items-center hover:scale-105 transition-transform">
              <Lock size={48} className="text-[#1d4ed8] mb-4" />
              <h3 className="font-bold text-xl mb-2">Effortless Access</h3>
              <p className="text-slate-600 text-center">Access your records anywhere, anytime. You control your journey.</p>
            </div>
          </div>
        </motion.section>
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-24 text-center"
        >
          <h4 className="text-2xl font-bold font-['Roboto'] mb-2 text-[#1d4ed8]">Ready to experience healthcare with heart?</h4>
          <Button asChild id="cta-signup" className="mt-4 px-8 py-3 text-lg font-bold">
            <Link to="/signup">Sign Up Free</Link>
          </Button>
        </motion.section>
      </main>
    </div>
  );
};

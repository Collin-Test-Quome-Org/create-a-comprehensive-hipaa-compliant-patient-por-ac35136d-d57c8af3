import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { MoveRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const heroImage = '/branding/assets/hero-0.png';
const logo = '/branding/assets/logo-0.png';

export function Home() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-white via-slate-100 to-slate-200">
      <div
        style={{ backgroundImage: `url('${heroImage}')` }}
        className="bg-cover bg-center h-[28rem] relative flex items-center justify-center"
      >
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center">
          <motion.img
            src={logo}
            className="mb-6 w-28 drop-shadow-xl"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          />
          <motion.h1
            className="text-white text-5xl font-bold tracking-tight mb-4 font-['Roboto']"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            HealthLock: Your Gateway to Secure Medical Care
          </motion.h1>
          <motion.p
            className="text-white text-lg max-w-xl mb-8 text-center font-['Roboto']"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            Welcome to HealthLock — where peace of mind meets modern medicine. Effortlessly manage your health records, appointments, and messages, all secured like your most precious secrets.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex gap-6"
          >
            <Button asChild id="get-started-cta" size="lg" className="text-lg px-8 font-bold shadow-lg">
              <Link to="/signup" className="flex items-center gap-2">
                Get Started <MoveRight size={20} />
              </Link>
            </Button>
            <Button asChild id="learn-more-cta" size="lg" variant="secondary" className="text-lg px-8 font-bold">
              <Link to="/login">Log In</Link>
            </Button>
          </motion.div>
        </div>
      </div>
      <main className="max-w-5xl mx-auto px-6 py-16">
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <h2 className="text-3xl font-bold font-['Roboto'] mb-6 text-blue-800">Why Choose HealthLock?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-center hover:shadow-lg transition">
              <span className="rounded-full bg-blue-100 p-3 mb-3">
                <svg width="32" height="32" stroke="currentColor" fill="none" viewBox="0 0 24 24" className="text-blue-700"><path d="M12 17v.01" /><rect width="18" height="10" x="3" y="7" rx="2" /><path d="M16 3v4" /><path d="M8 3v4" /></svg>
              </span>
              <h3 className="font-semibold text-lg mb-2 text-slate-800">Always Secure</h3>
              <p className="text-slate-600 text-center">Your health data is protected with industry-leading encryption and privacy-first design. No stress, no leaks, just pure security.</p>
            </div>
            <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-center hover:shadow-lg transition">
              <span className="rounded-full bg-blue-100 p-3 mb-3">
                <svg width="32" height="32" stroke="currentColor" fill="none" viewBox="0 0 24 24" className="text-blue-700"><path d="M12 8v4l3 3" /><circle cx="12" cy="12" r="10" /></svg>
              </span>
              <h3 className="font-semibold text-lg mb-2 text-slate-800">Effortless Access</h3>
              <p className="text-slate-600 text-center">All your medical records, appointments, and messages are neatly organized and available whenever you need them. Never miss a beat.</p>
            </div>
            <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-center hover:shadow-lg transition">
              <span className="rounded-full bg-blue-100 p-3 mb-3">
                <svg width="32" height="32" stroke="currentColor" fill="none" viewBox="0 0 24 24" className="text-blue-700"><path d="M4 17a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4Z" /><path d="M8 9h8" /><path d="M8 13h6" /></svg>
              </span>
              <h3 className="font-semibold text-lg mb-2 text-slate-800">People-Centered</h3>
              <p className="text-slate-600 text-center">We speak human. Our interface is crafted for clarity and comfort—no jargon, no guessing, just the care you deserve.</p>
            </div>
          </div>
        </motion.section>
      </main>
    </div>
  );
}

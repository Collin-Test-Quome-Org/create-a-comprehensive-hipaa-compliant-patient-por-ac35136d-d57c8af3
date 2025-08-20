import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#cbd5e1] via-white to-[#1d4ed8]/10 flex flex-col">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full"
      >
        <div
          style={{ backgroundImage: "url('/branding/assets/hero-0.png')" }}
          className="bg-cover bg-center h-[430px] flex items-center justify-center relative"
        >
          <div className="bg-black/50 h-full w-full absolute top-0 left-0 z-0" />
          <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-2xl mx-auto">
            <img src="/branding/assets/logo-0.png" className="w-20 mb-4" />
            <motion.h1
              className="text-white text-5xl font-bold font-['Roboto'] drop-shadow-lg mb-2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 700 }}
            >
              Welcome to MedLock
            </motion.h1>
            <motion.p
              className="text-white/90 text-lg mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45, duration: 0.5 }}
              style={{ fontFamily: 'Roboto', fontWeight: 400 }}
            >
              Secure. Simple. Connected. <br /> Your health records, appointments, prescriptions, and care teams—all in one trusted place.
            </motion.p>
            <Button asChild id="get-started-home" size="lg" className="px-8 text-lg bg-[#1d4ed8] hover:bg-blue-700 transition font-bold shadow-lg">
              <Link to="/signup" className="flex items-center gap-2">
                Get Started
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </motion.div>

      <section className="max-w-5xl mx-auto px-6 py-14 flex flex-col md:flex-row gap-12">
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl font-bold text-[#1d4ed8] mb-4 font-['Roboto']">Why MedLock?</h2>
          <ul className="space-y-5 text-[#22223b] text-lg">
            <li className="flex items-start gap-3">
              <span className="bg-[#cbd5e1] rounded-full p-2"><svg className="w-5 h-5 text-[#1d4ed8]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" /></svg></span>
              <span>Bank-level security and privacy for every document.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-[#cbd5e1] rounded-full p-2"><svg className="w-5 h-5 text-[#1d4ed8]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M8 12l2 2l4-4" /></svg></span>
              <span>All your appointments, prescriptions, and records, always at your fingertips.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-[#cbd5e1] rounded-full p-2"><svg className="w-5 h-5 text-[#1d4ed8]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 20l9-5-9-5-9 5 9 5z" /><path d="M12 12V4" /></svg></span>
              <span>Built for patients and care teams, so you never miss what matters.</span>
            </li>
          </ul>
        </motion.div>
        <motion.div
          className="flex-1 flex flex-col items-center justify-center"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="rounded-xl border shadow-lg bg-white px-8 py-7 w-full max-w-md flex flex-col items-center">
            <h3 className="text-xl font-bold mb-2 text-[#1d4ed8]">Try a Demo!</h3>
            <p className="mb-4 text-center text-[#22223b]">Log in as a demo user and explore MedLock's features risk-free.</p>
            <Button asChild className="w-full bg-[#1d4ed8] hover:bg-blue-700 mb-3" id="demo-login">
              <Link to="/login">Demo Login</Link>
            </Button>
            <p className="text-xs text-[#64748b]">No real patient data. Explore safely!</p>
          </div>
        </motion.div>
      </section>

      <footer className="mt-auto border-t bg-[#1d4ed8] py-6 text-white text-center font-['Roboto'] font-semibold shadow-inner">
        MedLock &copy; {new Date().getFullYear()} &mdash; Your health, secured.
      </footer>
    </div>
  )
}

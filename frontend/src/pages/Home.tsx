import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      {/* Hero section */}
      <div
        style={{ backgroundImage: "url('/branding/assets/hero-0.png')" }}
        className="bg-cover bg-center h-[500px] relative"
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <img src="/branding/assets/logo-0.png" className="mx-auto mb-4 w-20 h-20" />
            <h1
              className="text-white text-5xl font-bold mb-4"
              style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 700 }}
            >
              MedLock Health Portal
            </h1>
            <p className="text-slate-100 text-lg max-w-xl mx-auto mb-8 font-medium">
              Where Your Health Records Meet Peace of Mind. Secure, simple, and always in your hands.
            </p>
            <Button asChild size="lg" className="text-lg px-8 py-6 font-bold bg-primary" id="cta-get-started">
              <Link to="/signup">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
      {/* Features section */}
      <section className="max-w-5xl mx-auto py-16 px-4">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-center mb-10 text-blue-900"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          viewport={{ once: true }}
          style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 700 }}
        >
          Unlock Your Health. Effortlessly.
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center"
            whileHover={{ scale: 1.03 }}
            transition={{ type: 'spring', stiffness: 250 }}
          >
            <span className="inline-flex items-center justify-center bg-blue-100 rounded-full w-14 h-14 mb-4">
              <svg width="32" height="32" fill="none" stroke="#1d4ed8" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><rect x="9" y="6" width="6" height="12" rx="3"/></svg>
            </span>
            <h3 className="text-xl font-semibold mb-2 text-blue-900">All-in-One Dashboard</h3>
            <p className="text-slate-700 text-center">Access appointments, records, prescriptions, and secure messaging in a single place.</p>
          </motion.div>
          <motion.div
            className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center"
            whileHover={{ scale: 1.03 }}
            transition={{ type: 'spring', stiffness: 250 }}
          >
            <span className="inline-flex items-center justify-center bg-blue-100 rounded-full w-14 h-14 mb-4">
              <svg width="32" height="32" fill="none" stroke="#1d4ed8" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 17v.01"/><path d="M9.5 9.5l1.5 1.5l1.5-1.5"/><path d="M17 16c0 1.66-2.69 3-6 3s-6-1.34-6-3V5c0-1.66 2.69-3 6-3s6 1.34 6 3v11z"/></svg>
            </span>
            <h3 className="text-xl font-semibold mb-2 text-blue-900">Bank-Grade Security</h3>
            <p className="text-slate-700 text-center">We keep your information under lock and key using state-of-the-art encryption and privacy controls.</p>
          </motion.div>
          <motion.div
            className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center"
            whileHover={{ scale: 1.03 }}
            transition={{ type: 'spring', stiffness: 250 }}
          >
            <span className="inline-flex items-center justify-center bg-blue-100 rounded-full w-14 h-14 mb-4">
              <svg width="32" height="32" fill="none" stroke="#1d4ed8" strokeWidth="2" viewBox="0 0 24 24"><path d="M16 8a6 6 0 11-12 0 6 6 0 0112 0zm0 0v6a4 4 0 01-8 0v-1.5"/></svg>
            </span>
            <h3 className="text-xl font-semibold mb-2 text-blue-900">Friendly Support</h3>
            <p className="text-slate-700 text-center">Questions? Our team is here with a smile—just a click away, any time.</p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

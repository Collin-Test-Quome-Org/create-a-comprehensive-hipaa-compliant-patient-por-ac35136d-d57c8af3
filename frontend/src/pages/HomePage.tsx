import { Hero } from '@/components/Hero'
import { FeatureCards } from '@/components/FeatureCards'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

export function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-100 to-slate-200">
      <Hero />
      <FeatureCards />
      <motion.section
        className="bg-blue-700 py-16 text-white text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 font-['Roboto']" style={{ fontWeight: 700 }}>
          Ready to simplify your healthcare?
        </h2>
        <p className="text-lg mb-8 font-['Roboto']" style={{fontWeight: 400}}>
          Join MedLock today and take control of your medical records, appointments, and peace of mind.
        </p>
        <Button asChild size="lg" id="cta-signup" className="text-blue-700 bg-white hover:bg-slate-100 font-semibold">
          <Link to="/signup">Create Free Account</Link>
        </Button>
      </motion.section>
      <footer className="w-full bg-white border-t border-slate-200 py-8 mt-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-4">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <img src="/branding/assets/logo-0.png" className="h-10 w-10" />
            <span className="text-xl font-bold font-['Roboto'] text-blue-900" style={{fontWeight: 700}}>MedLock</span>
          </div>
          <div className="flex gap-6 text-blue-900 text-base font-['Roboto']">
            <Link to="/login" className="hover:underline">Login</Link>
            <Link to="/signup" className="hover:underline">Sign Up</Link>
            <Link to="/dashboard" className="hover:underline">Dashboard</Link>
            <Link to="/appointments" className="hover:underline">Appointments</Link>
            <Link to="/documents" className="hover:underline">Documents</Link>
            <Link to="/prescriptions" className="hover:underline">Prescriptions</Link>
            <Link to="/messaging" className="hover:underline">Messaging</Link>
          </div>
        </div>
        <div className="text-center text-slate-500 mt-6 text-sm font-['Roboto']">
          &copy; {new Date().getFullYear()} MedLock Health, Inc. | Secure, Simple Health Management
        </div>
      </footer>
    </main>
  )
}

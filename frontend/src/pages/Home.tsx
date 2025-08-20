import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

export function Home() {
  return (
    <div className="w-full min-h-screen bg-slate-50 flex flex-col">
      <div style={{ backgroundImage: "url('/branding/assets/hero-0.png')" }} className="bg-cover bg-center h-[32rem] relative">
        <div className="bg-black/60 h-full flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="max-w-2xl mx-auto text-center"
          >
            <img src="/branding/assets/logo-0.png" className="mx-auto mb-6 w-24 h-24" />
            <h1 className="text-white text-5xl font-bold font-['Roboto'] mb-3 drop-shadow-lg">Welcome to SecureMed Cloud</h1>
            <p className="text-slate-200 text-lg max-w-xl mx-auto mb-8 font-['Roboto']">Your digital health records, protected by trust. Access, manage, and share your medical information with security and ease. We empower modern patients and clinics with clarity, comfort, and connection.</p>
            <div className="flex justify-center gap-4">
              <Button asChild size="lg" id="cta-get-started" className="bg-blue-700 hover:bg-blue-800 text-white font-bold px-8 py-3 rounded-full text-lg shadow-lg">
                <Link to="/signup">Get Started</Link>
              </Button>
              <Button asChild variant="outline" size="lg" id="cta-login" className="border-blue-700 text-blue-800 font-bold px-8 py-3 rounded-full text-lg bg-white/80 hover:bg-blue-50">
                <Link to="/login">Log In</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
      <section className="flex-1 w-full px-6 md:px-0 max-w-5xl mx-auto py-16">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
          <h2 className="text-3xl font-bold font-['Roboto'] text-blue-900 mb-8 text-center">Why choose SecureMed Cloud?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white shadow rounded-lg p-8 flex flex-col items-center text-center border-t-4 border-blue-700">
              <span className="bg-blue-700 text-white rounded-full p-3 mb-4">
                <svg width="36" height="36" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 5v13m7-7H5" /></svg>
              </span>
              <h3 className="font-bold text-lg mb-2 font-['Roboto']">Access Anywhere</h3>
              <p className="text-slate-700 font-['Roboto']">Cloud-based records mean your care travels with you—secure, up-to-date, and always at hand.</p>
            </div>
            <div className="bg-white shadow rounded-lg p-8 flex flex-col items-center text-center border-t-4 border-blue-700">
              <span className="bg-blue-700 text-white rounded-full p-3 mb-4">
                <svg width="36" height="36" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" /></svg>
              </span>
              <h3 className="font-bold text-lg mb-2 font-['Roboto']">For Patients & Clinics</h3>
              <p className="text-slate-700 font-['Roboto']">Designed for everyone—easy enough for families, powerful for clinics. Because health is for everybody.</p>
            </div>
            <div className="bg-white shadow rounded-lg p-8 flex flex-col items-center text-center border-t-4 border-blue-700">
              <span className="bg-blue-700 text-white rounded-full p-3 mb-4">
                <svg width="36" height="36" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 21C7 18.5 2 14.36 2 9.5A7.5 7.5 0 0 1 12 2a7.5 7.5 0 0 1 10 7.5c0 4.86-5 9-10 11.5z" /></svg>
              </span>
              <h3 className="font-bold text-lg mb-2 font-['Roboto']">Privacy First</h3>
              <p className="text-slate-700 font-['Roboto']">We use leading security measures so your records stay private, always. Trust is our first principle.</p>
            </div>
          </div>
        </motion.div>
      </section>
      <footer className="w-full py-6 bg-blue-900 text-white text-center font-['Roboto']">
        <p>© {new Date().getFullYear()} SecureMed Cloud. Empowering your health journey.</p>
      </footer>
    </div>
  )
}

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export function Home() {
  return (
    <div className="min-h-screen bg-slate-50">
      <div
        style={{ backgroundImage: "url('/branding/assets/hero-0.png')" }}
        className="bg-cover bg-center h-[34rem] relative"
      >
        <div className="bg-black bg-opacity-50 h-full flex flex-col items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center px-4"
          >
            <img src="/branding/assets/logo-0.png" className="mx-auto mb-8 w-28 h-28 drop-shadow-lg" />
            <h1 className="text-white text-5xl font-extrabold tracking-tight font-['Roboto']" style={{ fontWeight: 700 }}>
              Welcome to SecureMed Portal
            </h1>
            <p className="text-slate-200 text-lg mt-4 max-w-2xl mx-auto font-['Roboto']" style={{ fontWeight: 400 }}>
              Your hub for effortless, secure healthcare connections.<br />
              Access records, manage appointments, and message your care team with total peace of mind.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild id="cta-signup" size="lg" className="bg-blue-700 hover:bg-blue-800 text-white">
                <Link to="/signup">Get Started</Link>
              </Button>
              <Button asChild id="cta-login" variant="outline" size="lg" className="border-white text-white hover:bg-blue-100 hover:text-blue-900">
                <Link to="/login">Login</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
      <section className="flex flex-col md:flex-row justify-center gap-8 px-4 py-16 max-w-6xl mx-auto">
        <motion.div
          whileHover={{ y: -5, scale: 1.03 }}
          className="bg-white rounded-xl shadow-lg p-8 flex-1 min-w-[270px] flex flex-col items-center"
        >
          <div className="bg-blue-100 p-4 rounded-full mb-4">
            <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="text-blue-700"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm0 0v6m0 0-2-2m2 2 2-2" /></svg>
          </div>
          <h2 className="text-xl font-bold font-['Roboto']" style={{ fontWeight: 700 }}>Instant Access</h2>
          <p className="text-slate-600 mt-2 text-center font-['Roboto']" style={{ fontWeight: 400 }}>
            Securely view your health records anywhere, anytime.<br />
            No paperwork, no delays.
          </p>
        </motion.div>
        <motion.div
          whileHover={{ y: -5, scale: 1.03 }}
          className="bg-white rounded-xl shadow-lg p-8 flex-1 min-w-[270px] flex flex-col items-center"
        >
          <div className="bg-blue-100 p-4 rounded-full mb-4">
            <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="text-blue-700"><path d="M5 13l4 4L19 7" /></svg>
          </div>
          <h2 className="text-xl font-bold font-['Roboto']" style={{ fontWeight: 700 }}>Effortless Appointments</h2>
          <p className="text-slate-600 mt-2 text-center font-['Roboto']" style={{ fontWeight: 400 }}>
            Book, view, and update appointments with a tap.<br />
            Your schedule, your way.
          </p>
        </motion.div>
        <motion.div
          whileHover={{ y: -5, scale: 1.03 }}
          className="bg-white rounded-xl shadow-lg p-8 flex-1 min-w-[270px] flex flex-col items-center"
        >
          <div className="bg-blue-100 p-4 rounded-full mb-4">
            <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="text-blue-700"><path d="M3 8l7.89 5.26a2 2 0 0 0 2.22 0L21 8M21 8v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8" /></svg>
          </div>
          <h2 className="text-xl font-bold font-['Roboto']" style={{ fontWeight: 700 }}>Private Messaging</h2>
          <p className="text-slate-600 mt-2 text-center font-['Roboto']" style={{ fontWeight: 400 }}>
            Chat securely with your care team.<br />
            Your privacy is our promise.
          </p>
        </motion.div>
      </section>
      <section className="text-center py-12 bg-blue-700 text-white">
        <h2 className="text-3xl font-bold font-['Roboto']" style={{ fontWeight: 700 }}>Why SecureMed?</h2>
        <p className="mt-4 text-lg font-['Roboto']" style={{ fontWeight: 400 }}>
          Because healthcare should be simple, safe, and all about you.<br />
          Join a new era of care—where your voice is heard and your data is secure.
        </p>
      </section>
    </div>
  );
}

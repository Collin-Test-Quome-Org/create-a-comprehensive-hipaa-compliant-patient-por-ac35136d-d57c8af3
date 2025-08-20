import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export function About() {
  return (
    <div className="min-h-screen bg-[#f3f6fa] flex flex-col items-center py-16 px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-2xl w-full bg-white rounded-xl shadow-lg p-8 mb-10"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-[#1d4ed8] mb-4" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 700 }}>
          Our Mission: Trust, Connection, Care.
        </h1>
        <p className="text-gray-700 text-lg mb-6" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 400 }}>
          At TrustLink Health, we believe healthcare should put people first—built on trust, powered by connection, and delivered with care. Our platform is designed to ensure your most sensitive health information is safe, accessible, and always at your fingertips.
        </p>
        <p className="text-gray-700 mb-8">
          We are a passionate team of technologists and clinicians, on a mission to bridge the gap between patients and providers. TrustLink Health was created for anyone who wants an easier, more secure way to manage their medical journey. No more paper shuffling, no more waiting for callbacks—just instant, secure access and communication, when you need it most.
        </p>
        <div className="flex gap-4">
          <Link to="/signup">
            <Button id="about-signup-btn" className="bg-[#1d4ed8] text-white font-semibold px-7 py-2 text-lg shadow hover:bg-blue-700">
              Sign Up Now
            </Button>
          </Link>
          <Link to="/login">
            <Button id="about-login-btn" variant="outline" className="border-[#1d4ed8] text-[#1d4ed8] font-semibold px-7 py-2 text-lg hover:bg-[#cbd5e1]">
              Log In
            </Button>
          </Link>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.93 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.7 }}
        className="flex flex-col items-center"
      >
        <img src="/branding/assets/logo-0.png" className="w-24 h-24 mb-4" />
        <span className="text-[#1d4ed8] font-bold text-xl" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 700 }}>TrustLink Health</span>
      </motion.div>
    </div>
  );
}

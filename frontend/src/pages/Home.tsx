import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div
        style={{ backgroundImage: "url('/branding/assets/hero-0.png')" }}
        className="bg-cover bg-center h-[32rem] relative"
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-white text-5xl font-bold mb-4" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 700 }}>
              Welcome to Medivault
            </h1>
            <p className="text-lg text-slate-200 mt-2 mb-8 max-w-xl mx-auto" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 400 }}>
              Where your healthcare data is truly yours. Securely manage appointments, access records, and connect with care.
            </p>
            <Button asChild id="cta-get-started" className="text-lg px-8 py-4 rounded-full shadow-lg bg-[#1d4ed8] hover:bg-blue-800">
              <Link to="/signup" className="flex items-center gap-2">
                Get Started <ArrowRight size={22} />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-4xl mx-auto py-16 px-4"
      >
        <h2 className="text-3xl font-bold mb-6 text-gray-900" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 700 }}>
          Why Medivault?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow">
            <svg className="w-10 h-10 text-[#1d4ed8] mb-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 11c.5304 0 1.0391-.2107 1.4142-.5858C13.7893 10.0391 14 9.5304 14 9s-.2107-1.0391-.5858-1.4142C12.9609 7.2107 12.5304 7 12 7s-1.0391.2107-1.4142.5858C10.2107 7.9609 10 8.4696 10 9s.2107 1.0391.5858 1.4142C10.9609 10.7893 11.4696 11 12 11zm0 2c-2.5 0-7 1.25-7 3.75V19h14v-2.25C19 14.25 14.5 13 12 13z"/></svg>
            <h3 className="font-bold text-lg mb-1 text-gray-800">Patient-first Privacy</h3>
            <p className="text-gray-600 text-sm">
              Your data is under lock and key. Only you (and those you trust) can access it.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow">
            <svg className="w-10 h-10 text-[#1d4ed8] mb-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2a4 4 0 0 1 8 0v2M5 19h14M5 19v-2a7 7 0 0 1 14 0v2"/></svg>
            <h3 className="font-bold text-lg mb-1 text-gray-800">Effortless Appointments</h3>
            <p className="text-gray-600 text-sm">
              Book, edit, and manage appointments easily—all in one place.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow">
            <svg className="w-10 h-10 text-[#1d4ed8] mb-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 1.343-3 3 0 2 3 5 3 5s3-3 3-5c0-1.657-1.343-3-3-3z"/><circle cx="12" cy="11" r="3"/></svg>
            <h3 className="font-bold text-lg mb-1 text-gray-800">Connected Care</h3>
            <p className="text-gray-600 text-sm">Chat securely with your care team and access records anytime, anywhere.</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

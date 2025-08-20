import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const companyVoice = {
  headline: 'Welcome to TrustLink Health! Your Secure Bridge to Better Care.',
  subheadline:
    'Empowering patients and providers with seamless, secure access to medical records, messaging, and appointments. All in one intuitive platform.',
  cta: 'Get Started',
  learnMore: 'How It Works',
};

export function Home() {
  return (
    <div className="flex flex-col min-h-screen w-full bg-gradient-to-br from-[#cbd5e1] via-white to-[#1d4ed8]/10">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        <div
          className="bg-cover bg-center h-96 flex items-center"
          style={{ backgroundImage: "url('/branding/assets/hero-0.png')" }}
        >
          <div className="bg-black/50 h-full w-full flex flex-col justify-center items-center text-center px-6">
            <motion.h1
              className="text-white text-4xl md:text-5xl font-bold mb-4"
              style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 700 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {companyVoice.headline}
            </motion.h1>
            <motion.p
              className="text-slate-100 text-lg md:text-xl mb-8 max-w-2xl mx-auto"
              style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 400 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {companyVoice.subheadline}
            </motion.p>
            <div className="flex gap-4 justify-center">
              <Link to="/signup">
                <Button id="get-started-cta" size="lg" className="text-lg px-6 bg-[#1d4ed8] hover:bg-blue-700 text-white font-bold shadow-lg">
                  {companyVoice.cta}
                  <ArrowRight className="ml-2 w-5 h-5 animate-bounce-right" />
                </Button>
              </Link>
              <Link to="/about">
                <Button id="learn-more-cta" variant="outline" className="text-lg px-6 border-white text-white hover:bg-white/10">
                  {companyVoice.learnMore}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl font-bold text-[#1d4ed8] mb-6" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 700 }}>Why TrustLink Health?</h2>
            <div className="grid md:grid-cols-3 gap-10 mt-8">
              <motion.div
                className="bg-[#f3f6fa] p-6 rounded-lg shadow group hover:shadow-xl border border-[#cbd5e1] transition-all"
                whileHover={{ scale: 1.04, rotate: 1 }}
              >
                <div className="flex items-center mb-3">
                  <span className="rounded-full bg-[#1d4ed8]/10 p-2 mr-2">
                    <svg className="w-8 h-8 text-[#1d4ed8]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                  </span>
                  <h3 className="text-xl font-bold">Security First</h3>
                </div>
                <p className="text-gray-600">Military-grade encryption and privacy controls keep your health data locked tighter than a vault.</p>
              </motion.div>
              <motion.div
                className="bg-[#f3f6fa] p-6 rounded-lg shadow group hover:shadow-xl border border-[#cbd5e1] transition-all"
                whileHover={{ scale: 1.04, rotate: -1 }}
              >
                <div className="flex items-center mb-3">
                  <span className="rounded-full bg-[#1d4ed8]/10 p-2 mr-2">
                    <svg className="w-8 h-8 text-[#1d4ed8]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M8 12l2 2 4-4" />
                    </svg>
                  </span>
                  <h3 className="text-xl font-bold">Effortless Access</h3>
                </div>
                <p className="text-gray-600">All your medical records, appointments, and prescriptions—one click away, anytime, anywhere.</p>
              </motion.div>
              <motion.div
                className="bg-[#f3f6fa] p-6 rounded-lg shadow group hover:shadow-xl border border-[#cbd5e1] transition-all"
                whileHover={{ scale: 1.04, rotate: 1 }}
              >
                <div className="flex items-center mb-3">
                  <span className="rounded-full bg-[#1d4ed8]/10 p-2 mr-2">
                    <svg className="w-8 h-8 text-[#1d4ed8]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M12 19c0 1.104-.896 2-2 2s-2-.896-2-2 .896-2 2-2 2 .896 2 2z" />
                      <path d="M12 17V7m0 0C9.243 7 7 9.243 7 12c0 2.757 2.243 5 5 5m0-10c2.757 0 5 2.243 5 5 0 2.757-2.243 5-5 5" />
                    </svg>
                  </span>
                  <h3 className="text-xl font-bold">Real-Time Connections</h3>
                </div>
                <p className="text-gray-600">Securely message your care team and receive instant notifications—because your health can’t wait.</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Call to Action */}
      <section className="py-14 bg-[#1d4ed8]">
        <div className="max-w-3xl mx-auto flex flex-col items-center px-4">
          <motion.h2
            className="text-white text-2xl md:text-3xl font-bold mb-5 text-center"
            style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 700 }}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Ready to experience healthcare without the hassle?
          </motion.h2>
          <Link to="/signup">
            <Button id="final-cta" size="lg" className="bg-white text-[#1d4ed8] font-semibold px-8 py-2 text-lg shadow hover:bg-[#cbd5e1] transition">
              {companyVoice.cta}
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

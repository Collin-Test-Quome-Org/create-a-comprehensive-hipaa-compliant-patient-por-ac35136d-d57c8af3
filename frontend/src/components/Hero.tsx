import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export const Hero = () => (
  <motion.section
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.9, ease: 'easeOut' }}
    className="relative w-full h-[32rem] flex items-center justify-center bg-cover bg-center"
    style={{ backgroundImage: "url('/branding/assets/hero-0.png')" }}
  >
    <div className="absolute inset-0 bg-black/50 flex items-center justify-center" />
    <div className="relative z-10 text-center px-6">
      <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg font-['Roboto'] tracking-tight">
        Securely Connected Healthcare
      </h1>
      <p className="text-lg md:text-2xl text-slate-100 max-w-2xl mx-auto mb-8 font-['Roboto']">
        Welcome to ShieldLink Health – where privacy, trust, and human connection empower your care journey.
      </p>
      <Button id="get-started-cta" size="lg" className="text-lg px-8 font-bold" asChild>
        <Link to="/signup">Get Started</Link>
      </Button>
    </div>
  </motion.section>
);

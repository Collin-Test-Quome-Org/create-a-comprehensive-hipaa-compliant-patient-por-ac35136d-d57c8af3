import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-50 pb-24">
      <motion.img
        src="/branding/assets/logo-2.png"
        className="w-28 h-28 mb-8 mt-24"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
      />
      <motion.h1
        className="text-5xl font-extrabold font-['Roboto'] text-blue-700 mb-4"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        404
      </motion.h1>
      <motion.p
        className="text-xl text-slate-600 mb-8 font-['Roboto']"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Oops! The page you’re seeking doesn’t exist. <br />
        You are always safe with SecureMed.
      </motion.p>
      <Button asChild id="notfound-home-btn" className="bg-blue-700 hover:bg-blue-800 text-white">
        <Link to="/">Return Home</Link>
      </Button>
    </div>
  );
}

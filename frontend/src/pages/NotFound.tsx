import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShieldOff } from 'lucide-react';

export function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-100">
      <motion.div
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center justify-center bg-white p-10 rounded-xl shadow-lg"
      >
        <ShieldOff size={56} className="text-[#1d4ed8] mb-4" />
        <h1 className="text-3xl font-bold text-blue-900 mb-2" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 700 }}>404: Page Not Found</h1>
        <p className="text-gray-700 text-lg mb-6" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 400 }}>
          Oops! The page you're looking for is in another vault.
        </p>
        <Button id="back-to-home" asChild className="bg-[#1d4ed8] hover:bg-blue-900">
          <Link to="/">Return Home</Link>
        </Button>
      </motion.div>
    </div>
  );
}

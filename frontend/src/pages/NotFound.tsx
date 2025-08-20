import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-100">
      <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.5 }} className="text-center">
        <img src="/branding/assets/logo-1.png" className="mx-auto w-24 h-24 mb-8" />
        <h1 className="text-5xl font-bold mb-4 text-blue-900" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 700 }}>Whoops! Page not found.</h1>
        <p className="text-lg text-slate-700 mb-8">Looks like you wandered off the secure path. No worries—let's get you back home!</p>
        <Button asChild size="lg" className="px-8 py-6" id="notfound-home-btn">
          <Link to="/">Return to Home</Link>
        </Button>
      </motion.div>
    </div>
  )
}

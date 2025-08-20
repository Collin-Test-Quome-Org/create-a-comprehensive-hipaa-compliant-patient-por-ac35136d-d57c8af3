import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export function NotFound() {
  return (
    <motion.div className="flex flex-col items-center justify-center min-h-[80vh] bg-[#cbd5e1] px-4"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <img src="/branding/assets/logo-2.png" className="w-20 mb-6" />
      <h1 className="text-5xl font-bold text-[#1d4ed8] mb-4 font-['Roboto']">404</h1>
      <p className="text-xl text-gray-700 mb-8 font-['Roboto']">Oops! The page you're seeking isn't here.<br />But MedLock always guides you back to care.</p>
      <Button asChild id="notfound-home" className="bg-[#1d4ed8] hover:bg-blue-800">
        <Link to="/">Go Home</Link>
      </Button>
    </motion.div>
  )
}

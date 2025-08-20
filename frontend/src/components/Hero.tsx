import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export function Hero() {
  return (
    <div
      style={{ backgroundImage: "url('/branding/assets/hero-0.png')" }}
      className="bg-cover bg-center h-[32rem] relative"
    >
      <div className="bg-black bg-opacity-60 h-full w-full flex items-center justify-center">
        <motion.div
          className="text-center max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1
            className="text-white text-5xl md:text-6xl font-bold mb-4 font-['Roboto']"
            style={{ fontWeight: 700 }}
          >
            Welcome to MedLock: Secure, Simple Health Management
          </h1>
          <p className="text-slate-100 text-lg mb-8 font-['Roboto']" style={{ fontWeight: 400 }}>
            Your health, your records, your peace of mind. MedLock keeps your medical life
            organized, connected, and safe – all in one trusted place.
          </p>
          <Button asChild size="lg" id="cta-get-started" className="text-base font-semibold px-8 py-6" >
            <Link to="/signup">
              Get Started Free <ArrowRight className="inline ml-2" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </div>
  )
}

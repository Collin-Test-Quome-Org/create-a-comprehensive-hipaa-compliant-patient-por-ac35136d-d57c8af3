import { motion } from 'framer-motion'
import { ShieldCheck, CalendarCheck, FileText, MessageSquareHeart, Pills } from 'lucide-react'

const features = [
  {
    icon: <ShieldCheck className="w-10 h-10 text-blue-700" />, 
    title: 'Bank-Grade Security',
    description: 'Your data is always encrypted and protected with cutting-edge security. Trust MedLock to keep your health information private.'
  },
  {
    icon: <CalendarCheck className="w-10 h-10 text-blue-700" />, 
    title: 'Appointments Made Easy',
    description: 'Book, manage, and track medical appointments effortlessly. Get real-time reminders and never miss a checkup!'
  },
  {
    icon: <FileText className="w-10 h-10 text-blue-700" />, 
    title: 'All Records, One Place',
    description: 'Upload, organize, and access your medical records, prescriptions, and documents securely from anywhere.'
  },
  {
    icon: <MessageSquareHeart className="w-10 h-10 text-blue-700" />, 
    title: 'Confidential Messaging',
    description: 'Safely chat with your care team or loved ones. Share updates, questions, and support – all inside MedLock.'
  },
  {
    icon: <Pills className="w-10 h-10 text-blue-700" />, 
    title: 'Medication Management',
    description: 'Track prescriptions, dosages, and refill reminders with a few taps. Stay on top of your health, stress-free.'
  },
]

export function FeatureCards() {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-10 text-center font-['Roboto'] text-blue-900"
          style={{ fontWeight: 700 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Why MedLock?
        </motion.h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              className="rounded-xl shadow-md bg-slate-50 p-8 flex flex-col items-center border border-slate-200 hover:scale-105 transition-transform hover:shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.12 }}
            >
              <div className="mb-4">{f.icon}</div>
              <h3 className="text-lg font-semibold text-blue-900 mb-2 font-['Roboto']" style={{fontWeight: 700}}>{f.title}</h3>
              <p className="text-slate-700 text-center text-base font-['Roboto']" style={{fontWeight: 400}}>{f.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

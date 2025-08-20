import { motion } from 'framer-motion';
import { CalendarCheck, FileText, MessageSquare, Pill, Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const features = [
  {
    icon: <FileText size={36} className="text-[#1d4ed8] mb-2" />, label: 'Medical Records',
    desc: 'Instantly access labs, visit summaries, and documents.', link: '/records',
  },
  {
    icon: <CalendarCheck size={36} className="text-[#1d4ed8] mb-2" />, label: 'Appointments',
    desc: 'View and manage upcoming or past appointments.', link: '/appointments',
  },
  {
    icon: <Pill size={36} className="text-[#1d4ed8] mb-2" />, label: 'Prescriptions',
    desc: 'See your active medications and request refills.', link: '/prescriptions',
  },
  {
    icon: <MessageSquare size={36} className="text-[#1d4ed8] mb-2" />, label: 'Messages',
    desc: 'Encrypted chat with your care team.', link: '/messages',
  },
  {
    icon: <Bell size={36} className="text-[#1d4ed8] mb-2" />, label: 'Notifications',
    desc: 'Appointment and lab result alerts.', link: '/notifications',
  },
];

export const DashboardPage = () => {
  return (
    <div className="min-h-screen bg-white pt-10 pb-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h1 className="text-3xl md:text-4xl font-bold font-['Roboto'] text-[#1d4ed8] mb-2">Welcome to Your ShieldLink Health Portal</h1>
        <p className="text-lg text-slate-700 mb-8">Your secure gateway to managing health & care, with privacy and ease.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          {features.map(f => (
            <Link to={f.link} key={f.label}>
              <motion.div
                whileHover={{ scale: 1.06, boxShadow: '0 4px 32px #1d4ed822' }}
                className="rounded-xl bg-[#cbd5e1] px-6 py-8 flex flex-col items-center shadow-md cursor-pointer"
              >
                {f.icon}
                <div className="font-bold text-lg mb-1">{f.label}</div>
                <div className="text-slate-700 text-sm mb-2">{f.desc}</div>
                <Button id={`dashboard-${f.label.toLowerCase().replace(/ /g, '-')}-btn`} variant="secondary" className="mt-2 text-[#1d4ed8] border-[#1d4ed8] border font-semibold hover:bg-[#1d4ed8] hover:text-white">Go</Button>
              </motion.div>
            </Link>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

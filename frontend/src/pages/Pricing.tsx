import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const plans = [
  {
    name: 'Basic',
    price: 'Free',
    features: [
      'Secure health records',
      'Appointment scheduling',
      'Direct provider messaging',
      'Document uploads',
    ],
    cta: 'Start Free',
    highlight: false,
    id: 'pricing-basic',
  },
  {
    name: 'Plus',
    price: '$8/mo',
    features: [
      'Everything in Basic',
      'Family health profiles',
      'Medication reminders',
      'Priority support',
    ],
    cta: 'Upgrade',
    highlight: true,
    id: 'pricing-plus',
  },
  {
    name: 'Care Team',
    price: 'Contact Us',
    features: [
      'Multi-user dashboards',
      'Bulk record management',
      'Custom integrations',
      'Dedicated onboarding',
    ],
    cta: 'Contact Sales',
    highlight: false,
    id: 'pricing-careteam',
  },
];

export function Pricing() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-white via-slate-100 to-blue-50 pt-16">
      <motion.div
        className="max-w-5xl mx-auto px-4 py-16"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="text-4xl font-bold text-center mb-8 font-['Roboto'] text-blue-900">Simple, Transparent Pricing</h1>
        <p className="text-center text-lg text-slate-700 mb-12">
          No hidden fees. Switch plans anytime. Your health, your way.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              className={`rounded-2xl shadow-lg p-8 flex flex-col items-center bg-white border-2 transition-all ${plan.highlight ? 'border-blue-700 scale-105 z-10' : 'border-transparent'}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
            >
              <h2 className={`text-2xl font-bold mb-2 font-['Roboto'] ${plan.highlight ? 'text-blue-700' : 'text-slate-700'}`}>{plan.name}</h2>
              <div className="text-3xl font-bold mb-4">{plan.price}</div>
              <ul className="mb-6 space-y-2 text-slate-600">
                {plan.features.map((f, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="inline-block w-2 h-2 rounded-full bg-blue-500" />
                    {f}
                  </li>
                ))}
              </ul>
              <Button id={plan.id} size="lg" className={plan.highlight ? 'bg-blue-700 hover:bg-blue-800 text-white font-bold' : ''}>{plan.cta}</Button>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { UserPlus, ShieldCheck } from 'lucide-react';

export const SignupPage = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError('');
    setTimeout(() => {
      setLoading(false);
      if (form.name && form.email && form.password) {
        navigate('/dashboard');
      } else {
        setError('All fields are required.');
      }
    }, 700);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#cbd5e1] to-white flex items-center justify-center">
      <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
        <Card className="w-[380px] shadow-2xl border-0">
          <CardHeader className="text-center pt-8 pb-4">
            <div className="flex justify-center mb-3">
              <span className="inline-flex items-center justify-center rounded-full bg-[#1d4ed8] w-12 h-12">
                <UserPlus className="text-white" size={28} />
              </span>
            </div>
            <CardTitle className="text-[#1d4ed8] font-['Roboto'] text-2xl font-bold">Create Your Account</CardTitle>
            <div className="text-slate-500 text-sm mt-1">Sign up to access your secure health portal</div>
          </CardHeader>
          <CardContent className="pt-2 pb-8">
            <form onSubmit={onSubmit} className="space-y-5">
              <div>
                <label htmlFor="signup-name" className="block font-medium text-slate-700 mb-1">Full Name</label>
                <Input
                  id="signup-name"
                  name="name"
                  type="text"
                  placeholder="Jane Doe"
                  value={form.name}
                  onChange={onChange}
                  required
                  className="bg-slate-100"
                />
              </div>
              <div>
                <label htmlFor="signup-email" className="block font-medium text-slate-700 mb-1">Email Address</label>
                <Input
                  id="signup-email"
                  name="email"
                  type="email"
                  autoComplete="username"
                  placeholder="you@email.com"
                  value={form.email}
                  onChange={onChange}
                  required
                  className="bg-slate-100"
                />
              </div>
              <div>
                <label htmlFor="signup-password" className="block font-medium text-slate-700 mb-1">Password</label>
                <Input
                  id="signup-password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  placeholder="Choose a password"
                  value={form.password}
                  onChange={onChange}
                  required
                  className="bg-slate-100"
                />
              </div>
              <Button id="signup-submit" type="submit" className="w-full font-bold text-lg bg-[#1d4ed8] hover:bg-blue-700" disabled={loading}>
                {loading ? 'Creating Account…' : 'Create Account'}
              </Button>
              {error && <div className="text-red-600 text-center text-sm">{error}</div>}
            </form>
            <div className="mt-6 text-center text-slate-500 text-sm">
              Already have an account?{' '}
              <Link to="/login" className="text-[#1d4ed8] hover:underline font-semibold" id="signup-login-link">Log In</Link>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}

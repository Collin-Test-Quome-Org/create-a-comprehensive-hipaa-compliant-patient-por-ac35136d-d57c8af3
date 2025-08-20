import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Lock, ShieldCheck } from 'lucide-react';

export const LoginPage = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError('');
    // Mock auth: any non-empty email/password works
    setTimeout(() => {
      setLoading(false);
      if (form.email && form.password) {
        navigate('/dashboard');
      } else {
        setError('Please enter an email and password.');
      }
    }, 700);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#cbd5e1] to-white flex items-center justify-center">
      <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
        <Card className="w-[370px] shadow-2xl border-0">
          <CardHeader className="text-center pt-8 pb-4">
            <div className="flex justify-center mb-3">
              <span className="inline-flex items-center justify-center rounded-full bg-[#1d4ed8] w-12 h-12">
                <ShieldCheck className="text-white" size={28} />
              </span>
            </div>
            <CardTitle className="text-[#1d4ed8] font-['Roboto'] text-2xl font-bold">Welcome Back</CardTitle>
            <div className="text-slate-500 text-sm mt-1">Sign in to access your health portal</div>
          </CardHeader>
          <CardContent className="pt-2 pb-8">
            <form onSubmit={onSubmit} className="space-y-5">
              <div>
                <label htmlFor="login-email" className="block font-medium text-slate-700 mb-1">Email Address</label>
                <Input
                  id="login-email"
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
                <label htmlFor="login-password" className="block font-medium text-slate-700 mb-1">Password</label>
                <Input
                  id="login-password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  placeholder="••••••••"
                  value={form.password}
                  onChange={onChange}
                  required
                  className="bg-slate-100"
                />
              </div>
              <Button id="login-submit" type="submit" className="w-full font-bold text-lg bg-[#1d4ed8] hover:bg-blue-700" disabled={loading}>
                {loading ? 'Signing In…' : 'Sign In'}
              </Button>
              {error && <div className="text-red-600 text-center text-sm">{error}</div>}
            </form>
            <div className="mt-6 text-center text-slate-500 text-sm">
              Don’t have an account?{' '}
              <Link to="/signup" className="text-[#1d4ed8] hover:underline font-semibold" id="login-signup-link">Sign Up</Link>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}

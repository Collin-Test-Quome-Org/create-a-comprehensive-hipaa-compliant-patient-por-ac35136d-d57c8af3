import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Lock } from 'lucide-react';

export const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Mock login: accept any email/pw
    if (!email || !pw) {
      setError('Please enter your email and password.');
      return;
    }
    setError('');
    setTimeout(() => {
      navigate('/dashboard');
    }, 500);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f1f5f9]">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Card className="w-[370px] shadow-xl">
          <CardHeader className="flex flex-col items-center gap-2 pt-8 pb-0">
            <Lock size={40} className="text-[#1d4ed8] mb-1" />
            <CardTitle className="text-2xl font-bold font-['Roboto'] text-[#1d4ed8]">Sign in to ShieldLink</CardTitle>
          </CardHeader>
          <CardContent className="py-6 px-6 flex flex-col gap-5">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4" autoComplete="on">
              <label htmlFor="login-email" className="text-sm font-medium">Email</label>
              <Input
                id="login-email"
                type="email"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="you@email.com"
                autoComplete="email"
              />
              <label htmlFor="login-password" className="text-sm font-medium">Password</label>
              <Input
                id="login-password"
                type="password"
                required
                value={pw}
                onChange={e => setPw(e.target.value)}
                placeholder="Password"
                autoComplete="current-password"
              />
              {error && <div className="text-red-600 text-sm mt-1">{error}</div>}
              <Button id="login-submit" type="submit" className="mt-4 font-bold text-lg bg-[#1d4ed8] hover:bg-blue-700">Sign In</Button>
            </form>
            <div className="text-center text-sm text-slate-600 mt-2">
              New to ShieldLink?{' '}
              <Link to="/signup" className="text-[#1d4ed8] font-semibold hover:underline" id="login-signup-link">Create account</Link>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}

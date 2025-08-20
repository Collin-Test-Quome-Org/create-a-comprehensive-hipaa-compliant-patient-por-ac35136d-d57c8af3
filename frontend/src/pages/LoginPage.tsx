import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Lock, LogIn } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import * as React from 'react';

export const LoginPage = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState('');
  const navigate = useNavigate();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    // Mock auth: any non-empty email/password "logs in" and navigates to dashboard
    if (!email || !password) {
      setError('Please enter email and password.');
      return;
    }
    setTimeout(() => {
      navigate('/dashboard');
    }, 500);
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#cbd5e1] to-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md px-4"
      >
        <Card className="shadow-xl mt-8">
          <CardHeader className="flex flex-col items-center">
            <span className="mb-2"><Lock size={36} className="text-[#1d4ed8]" /></span>
            <CardTitle className="text-2xl font-bold font-['Roboto'] text-[#1d4ed8]">
              Patient Portal Login
            </CardTitle>
            <span className="text-slate-500 text-sm mt-2">Welcome back! Secure access below.</span>
          </CardHeader>
          <CardContent>
            <form className="space-y-4" onSubmit={handleSubmit} aria-label="Login form">
              <div>
                <label htmlFor="login-email" className="font-medium">Email Address</label>
                <Input id="login-email" type="email" autoComplete="username" required value={email} onChange={e => setEmail(e.target.value)} className="mt-1" />
              </div>
              <div>
                <label htmlFor="login-password" className="font-medium">Password</label>
                <Input id="login-password" type="password" autoComplete="current-password" required value={password} onChange={e => setPassword(e.target.value)} className="mt-1" />
              </div>
              {error && <div className="text-red-600 text-sm" role="alert">{error}</div>}
              <Button id="login-submit" type="submit" className="w-full mt-2 flex gap-2 items-center justify-center">
                <LogIn /> Log In
              </Button>
            </form>
            <div className="flex justify-between mt-6 text-sm">
              <span>
                <Link to="/signup" className="text-[#1d4ed8] underline hover:text-blue-700" id="login-signup-link">Need an account?</Link>
              </span>
              <span>
                <Link to="#" className="text-slate-400 hover:text-[#1d4ed8]">Forgot password?</Link>
              </span>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setTimeout(() => {
      setLoading(false);
      // Mock login: any credentials accepted
      if (email && password) {
        navigate('/dashboard');
      } else {
        setError('Please enter your email and password.');
      }
    }, 800);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f7fafc] py-12">
      <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        <Card className="w-full max-w-md shadow-xl">
          <CardHeader>
            <CardTitle className="text-[#1d4ed8] font-['Roboto'] font-bold text-2xl">Welcome Back to ShieldLink Health</CardTitle>
            <p className="text-slate-600 mt-1">Enter your credentials to access your secure patient portal.</p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="login-email" className="block font-semibold text-slate-800 mb-1">Email</label>
                <Input id="login-email" type="email" autoComplete="username" required value={email} onChange={e => setEmail(e.target.value)} placeholder="you@email.com" />
              </div>
              <div>
                <label htmlFor="login-password" className="block font-semibold text-slate-800 mb-1">Password</label>
                <Input id="login-password" type="password" autoComplete="current-password" required value={password} onChange={e => setPassword(e.target.value)} placeholder="••••••••" />
              </div>
              {error && <div className="text-red-600 text-sm font-medium" id="login-error">{error}</div>}
              <Button id="login-submit" type="submit" className="w-full font-bold text-lg" disabled={loading}>
                {loading ? 'Signing in…' : 'Sign In'}
              </Button>
            </form>
            <div className="mt-6 text-center text-sm">
              <span className="text-slate-600">New to ShieldLink Health?</span>{' '}
              <Link to="/signup" className="text-[#1d4ed8] font-bold hover:underline" id="login-to-signup">Sign up free</Link>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

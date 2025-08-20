import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError('');
    // Mock login: any email/password works
    setTimeout(() => {
      setLoading(false);
      if (email && password) {
        // For now, always log in as patient (can be improved)
        navigate('/dashboard');
      } else {
        setError('Please enter email and password.');
      }
    }, 900);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#cbd5e1] to-white px-4">
      <motion.div
        className="bg-white shadow-xl rounded-xl p-8 w-full max-w-md"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex flex-col items-center mb-6">
          <ShieldCheck size={48} className="text-[#1d4ed8] mb-2" />
          <h1 className="text-2xl font-bold font-['Roboto'] text-[#1d4ed8]">Sign In to ShieldLink Health</h1>
          <span className="text-slate-500 text-sm mt-1">HIPAA-Secure Patient Portal</span>
        </div>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <Label htmlFor="login-email" className="font-bold">Email</Label>
            <Input
              id="login-email"
              autoComplete="username"
              type="email"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="mt-1"
              placeholder="you@email.com"
            />
          </div>
          <div>
            <Label htmlFor="login-password" className="font-bold">Password</Label>
            <Input
              id="login-password"
              autoComplete="current-password"
              type="password"
              required
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="mt-1"
              placeholder="••••••••"
            />
          </div>
          {error && <div className="text-red-600 text-sm">{error}</div>}
          <Button
            type="submit"
            id="login-submit"
            className="w-full text-lg font-bold"
            disabled={loading}
          >
            {loading ? 'Signing In...' : 'Sign In'}
          </Button>
        </form>
        <div className="mt-6 flex flex-col items-center space-y-1">
          <span className="text-sm text-slate-600">Don't have an account?{' '}
            <Link to="/signup" className="text-[#1d4ed8] underline font-medium" id="login-to-signup">Sign Up</Link>
          </span>
        </div>
      </motion.div>
    </div>
  );
}

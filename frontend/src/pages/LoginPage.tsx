import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Lock, LogIn } from 'lucide-react';

export const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    // Mock login logic: any email/password accepted
    setTimeout(() => {
      if (email && password) {
        navigate('/dashboard');
      } else {
        setError('Please enter email and password.');
      }
      setLoading(false);
    }, 800);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f1f5f9]">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white rounded-2xl shadow-xl px-8 py-12 w-full max-w-md"
      >
        <div className="flex justify-center mb-6">
          <Lock size={40} className="text-[#1d4ed8]" />
        </div>
        <h1 className="text-2xl font-bold text-center font-['Roboto'] mb-2 text-[#1d4ed8]">Welcome Back</h1>
        <p className="text-center text-slate-500 mb-8">Sign in to access your secure health portal</p>
        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <label htmlFor="login-email" className="text-sm font-semibold">Email</label>
          <Input
            id="login-email"
            type="email"
            placeholder="you@email.com"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="mb-2"
            autoComplete="username"
            required
          />
          <label htmlFor="login-password" className="text-sm font-semibold">Password</label>
          <Input
            id="login-password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="mb-2"
            autoComplete="current-password"
            required
          />
          {error && <div className="text-red-500 text-sm mt-1 text-center">{error}</div>}
          <Button id="login-submit" type="submit" className="w-full mt-2 flex items-center justify-center" disabled={loading}>
            {loading ? (
              <span>Signing in...</span>
            ) : (
              <><LogIn size={18} className="mr-2" />Sign In</>
            )}
          </Button>
        </form>
        <div className="mt-6 text-center">
          <span className="text-slate-500">Don't have an account? </span>
          <Link to="/signup" className="text-[#1d4ed8] font-semibold hover:underline">Sign Up</Link>
        </div>
      </motion.div>
    </div>
  );
};

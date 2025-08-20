import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { UserPlus } from 'lucide-react';

export function Signup() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError('');
    // Mock signup: any data is accepted
    setTimeout(() => {
      setLoading(false);
      if (email && password && name) {
        navigate('/dashboard');
      } else {
        setError('Please fill out all fields.');
      }
    }, 1000);
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
          <UserPlus size={48} className="text-[#1d4ed8] mb-2" />
          <h1 className="text-2xl font-bold font-['Roboto'] text-[#1d4ed8]">Create Your Account</h1>
          <span className="text-slate-500 text-sm mt-1">Welcome to ShieldLink Health</span>
        </div>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <Label htmlFor="signup-name" className="font-bold">Full Name</Label>
            <Input
              id="signup-name"
              type="text"
              required
              value={name}
              onChange={e => setName(e.target.value)}
              className="mt-1"
              placeholder="Your Name"
            />
          </div>
          <div>
            <Label htmlFor="signup-email" className="font-bold">Email</Label>
            <Input
              id="signup-email"
              type="email"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="mt-1"
              placeholder="you@email.com"
            />
          </div>
          <div>
            <Label htmlFor="signup-password" className="font-bold">Password</Label>
            <Input
              id="signup-password"
              type="password"
              required
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="mt-1"
              placeholder="Create a password"
            />
          </div>
          {error && <div className="text-red-600 text-sm">{error}</div>}
          <Button
            type="submit"
            id="signup-submit"
            className="w-full text-lg font-bold"
            disabled={loading}
          >
            {loading ? 'Creating Account...' : 'Sign Up'}
          </Button>
        </form>
        <div className="mt-6 flex flex-col items-center space-y-1">
          <span className="text-sm text-slate-600">Already have an account?{' '}
            <Link to="/login" className="text-[#1d4ed8] underline font-medium" id="signup-to-login">Sign In</Link>
          </span>
        </div>
      </motion.div>
    </div>
  );
}

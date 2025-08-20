import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { UserPlus } from 'lucide-react';

export const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    // Mock signup logic: any input accepted, redirect to dashboard
    setTimeout(() => {
      if (email && password && name) {
        navigate('/dashboard');
      } else {
        setError('Please fill in all fields.');
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
          <UserPlus size={40} className="text-[#1d4ed8]" />
        </div>
        <h1 className="text-2xl font-bold text-center font-['Roboto'] mb-2 text-[#1d4ed8]">Create Your Account</h1>
        <p className="text-center text-slate-500 mb-8">Start your secure journey with ShieldLink Health</p>
        <form onSubmit={handleSignup} className="flex flex-col gap-4">
          <label htmlFor="signup-name" className="text-sm font-semibold">Full Name</label>
          <Input
            id="signup-name"
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={e => setName(e.target.value)}
            className="mb-2"
            required
          />
          <label htmlFor="signup-email" className="text-sm font-semibold">Email</label>
          <Input
            id="signup-email"
            type="email"
            placeholder="you@email.com"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="mb-2"
            autoComplete="username"
            required
          />
          <label htmlFor="signup-password" className="text-sm font-semibold">Password</label>
          <Input
            id="signup-password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="mb-2"
            autoComplete="new-password"
            required
          />
          {error && <div className="text-red-500 text-sm mt-1 text-center">{error}</div>}
          <Button id="signup-submit" type="submit" className="w-full mt-2 flex items-center justify-center" disabled={loading}>
            {loading ? (
              <span>Creating account...</span>
            ) : (
              <><UserPlus size={18} className="mr-2" />Sign Up</>
            )}
          </Button>
        </form>
        <div className="mt-6 text-center">
          <span className="text-slate-500">Already have an account? </span>
          <Link to="/login" className="text-[#1d4ed8] font-semibold hover:underline">Log In</Link>
        </div>
      </motion.div>
    </div>
  );
};

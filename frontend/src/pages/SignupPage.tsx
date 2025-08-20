import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { UserPlus } from 'lucide-react';

export const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    if (!email.includes('@')) {
      setError('Please enter a valid email.');
      return;
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters.');
      return;
    }
    if (password !== confirm) {
      setError('Passwords do not match.');
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      // After sign up, go to dashboard
      navigate('/dashboard');
    }, 900);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#e0e7ff] to-[#cbd5e1]">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <Card className="w-[350px] shadow-xl">
          <CardHeader>
            <div className="flex flex-col items-center">
              <UserPlus size={40} className="text-[#1d4ed8] mb-2" />
              <CardTitle className="text-xl font-bold font-['Roboto'] text-[#1d4ed8]">Create Account</CardTitle>
              <span className="text-slate-500 text-sm mt-1">Join ShieldLink Health</span>
            </div>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <Input
                id="signup-email"
                type="email"
                placeholder="Email address"
                autoComplete="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                className="font-['Roboto']"
              />
              <Input
                id="signup-password"
                type="password"
                placeholder="Password"
                autoComplete="new-password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
                className="font-['Roboto']"
              />
              <Input
                id="signup-confirm"
                type="password"
                placeholder="Confirm password"
                value={confirm}
                onChange={e => setConfirm(e.target.value)}
                required
                className="font-['Roboto']"
              />
              {error && <div className="text-red-600 text-sm">{error}</div>}
              <Button id="signup-submit" type="submit" disabled={loading} className="bg-[#1d4ed8] hover:bg-blue-700 font-bold">
                {loading ? 'Signing up…' : 'Sign Up'}
              </Button>
            </form>
            <div className="mt-4 flex flex-col items-center gap-2">
              <Link to="/login" className="text-[#1d4ed8] hover:underline text-sm" id="signup-to-login">Already have an account? Log in</Link>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}

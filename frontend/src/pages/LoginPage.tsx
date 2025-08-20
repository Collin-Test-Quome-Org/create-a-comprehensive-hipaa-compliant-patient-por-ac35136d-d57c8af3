import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Lock, LogIn } from 'lucide-react';

export const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    // Mock login: allow any email/password
    if (!email || !password) {
      setError('Please enter your email and password.');
      return;
    }
    // Simulate MFA step
    setTimeout(() => {
      navigate('/dashboard');
    }, 600);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#f8fafc] py-12">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="w-full max-w-md"
      >
        <Card className="shadow-2xl rounded-xl">
          <CardHeader className="text-center">
            <CardTitle className="flex flex-col items-center gap-2">
              <Lock className="text-[#1d4ed8] mb-1" size={40} />
              <span className="font-['Roboto'] text-2xl font-bold text-[#1d4ed8]">Secure Login</span>
            </CardTitle>
            <p className="text-slate-600 mt-2">Sign in to your ShieldLink Health account</p>
          </CardHeader>
          <CardContent>
            <form onSubmit={onSubmit} className="space-y-6">
              <div>
                <Label htmlFor="login-email" className="font-medium">Email Address</Label>
                <Input
                  id="login-email"
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  autoComplete="email"
                  placeholder="you@email.com"
                  required
                />
              </div>
              <div>
                <Label htmlFor="login-password" className="font-medium">Password</Label>
                <Input
                  id="login-password"
                  type="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  autoComplete="current-password"
                  placeholder="••••••••"
                  required
                />
              </div>
              {error && <div className="text-red-600 text-sm text-center" data-testid="login-error">{error}</div>}
              <Button type="submit" id="login-submit" className="w-full flex items-center gap-2 justify-center">
                <LogIn size={18} />
                Log In
              </Button>
            </form>
            <div className="flex justify-between mt-6 text-sm">
              <span>
                New here?{' '}
                <Link to="/signup" className="text-[#1d4ed8] font-medium underline" id="login-signup-link">
                  Sign up
                </Link>
              </span>
              <span>
                <Link to="#" className="text-slate-500 hover:text-[#1d4ed8] underline">Forgot password?</Link>
              </span>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}

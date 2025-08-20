import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { UserPlus } from 'lucide-react';

export const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!email || !name || !password) {
      setError('Please fill out all fields.');
      return;
    }
    // Mock signup: allow any info
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
              <UserPlus className="text-[#1d4ed8] mb-1" size={40} />
              <span className="font-['Roboto'] text-2xl font-bold text-[#1d4ed8]">Create Account</span>
            </CardTitle>
            <p className="text-slate-600 mt-2">Join ShieldLink Health to take charge of your care</p>
          </CardHeader>
          <CardContent>
            <form onSubmit={onSubmit} className="space-y-6">
              <div>
                <Label htmlFor="signup-name" className="font-medium">Full Name</Label>
                <Input
                  id="signup-name"
                  type="text"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <Label htmlFor="signup-email" className="font-medium">Email Address</Label>
                <Input
                  id="signup-email"
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div>
                <Label htmlFor="signup-password" className="font-medium">Password</Label>
                <Input
                  id="signup-password"
                  type="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                />
              </div>
              {error && <div className="text-red-600 text-sm text-center">{error}</div>}
              <Button type="submit" id="signup-submit" className="w-full flex items-center gap-2 justify-center">
                <UserPlus size={18} />
                Sign Up
              </Button>
            </form>
            <div className="flex justify-between mt-6 text-sm">
              <span>
                Already have an account?{' '}
                <Link to="/login" className="text-[#1d4ed8] font-medium underline" id="signup-login-link">
                  Log in
                </Link>
              </span>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}

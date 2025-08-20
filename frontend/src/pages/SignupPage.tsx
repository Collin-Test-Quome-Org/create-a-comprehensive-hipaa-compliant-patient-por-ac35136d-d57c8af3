import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export const SignupPage = () => {
  const [name, setName] = useState('');
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
      // Mock signup: any credentials accepted
      if (name && email && password) {
        navigate('/dashboard');
      } else {
        setError('Please fill out all fields.');
      }
    }, 900);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f7fafc] py-12">
      <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        <Card className="w-full max-w-md shadow-xl">
          <CardHeader>
            <CardTitle className="text-[#1d4ed8] font-['Roboto'] font-bold text-2xl">Sign Up for ShieldLink Health</CardTitle>
            <p className="text-slate-600 mt-1">Create your secure account and start your health journey with confidence.</p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="signup-name" className="block font-semibold text-slate-800 mb-1">Full Name</label>
                <Input id="signup-name" type="text" autoComplete="name" required value={name} onChange={e => setName(e.target.value)} placeholder="Jane Doe" />
              </div>
              <div>
                <label htmlFor="signup-email" className="block font-semibold text-slate-800 mb-1">Email</label>
                <Input id="signup-email" type="email" autoComplete="username" required value={email} onChange={e => setEmail(e.target.value)} placeholder="you@email.com" />
              </div>
              <div>
                <label htmlFor="signup-password" className="block font-semibold text-slate-800 mb-1">Password</label>
                <Input id="signup-password" type="password" autoComplete="new-password" required value={password} onChange={e => setPassword(e.target.value)} placeholder="••••••••" />
              </div>
              {error && <div className="text-red-600 text-sm font-medium" id="signup-error">{error}</div>}
              <Button id="signup-submit" type="submit" className="w-full font-bold text-lg" disabled={loading}>
                {loading ? 'Creating account…' : 'Sign Up'}
              </Button>
            </form>
            <div className="mt-6 text-center text-sm">
              <span className="text-slate-600">Already have an account?</span>{' '}
              <Link to="/login" className="text-[#1d4ed8] font-bold hover:underline" id="signup-to-login">Sign in</Link>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

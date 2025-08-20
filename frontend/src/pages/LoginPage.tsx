import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Lock } from 'lucide-react';

export const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError('');
    // Mock login: always succeed
    setTimeout(() => {
      setLoading(false);
      // For demo, navigate to dashboard after login
      navigate('/dashboard');
    }, 900);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#e0e7ff] to-[#cbd5e1]">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <Card className="w-[350px] shadow-xl">
          <CardHeader>
            <div className="flex flex-col items-center">
              <Lock size={40} className="text-[#1d4ed8] mb-2" />
              <CardTitle className="text-xl font-bold font-['Roboto'] text-[#1d4ed8]">Secure Login</CardTitle>
              <span className="text-slate-500 text-sm mt-1">Welcome back to ShieldLink Health</span>
            </div>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <Input
                id="login-email"
                type="email"
                placeholder="Email address"
                autoComplete="username"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                className="font-['Roboto']"
              />
              <Input
                id="login-password"
                type="password"
                placeholder="Password"
                autoComplete="current-password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
                className="font-['Roboto']"
              />
              {error && <div className="text-red-600 text-sm">{error}</div>}
              <Button id="login-submit" type="submit" disabled={loading} className="bg-[#1d4ed8] hover:bg-blue-700 font-bold">
                {loading ? 'Logging in…' : 'Log In'}
              </Button>
            </form>
            <div className="mt-4 flex flex-col items-center gap-2">
              <Link to="/signup" className="text-[#1d4ed8] hover:underline text-sm" id="login-to-signup">Don't have an account? Sign up</Link>
              <Link to="/mfa" className="text-slate-500 hover:underline text-xs" id="login-mfa-help">Need MFA help?</Link>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}

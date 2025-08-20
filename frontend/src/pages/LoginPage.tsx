import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Lock } from 'lucide-react';

export const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    // Permissive mock authentication (any login works)
    setTimeout(() => {
      setLoading(false);
      navigate('/dashboard');
    }, 900);
  };

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center bg-[#f4f8fd] py-12">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Card className="w-full max-w-md shadow-xl border-slate-200">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-2">
              <Lock size={38} className="text-[#1d4ed8]" />
            </div>
            <CardTitle className="text-2xl font-bold font-['Roboto'] text-[#1d4ed8]">Sign In to ShieldLink Health</CardTitle>
            <p className="text-slate-600 text-sm mt-1">Welcome back! Securely access your portal.</p>
          </CardHeader>
          <CardContent>
            <form className="space-y-5 mt-3" onSubmit={handleLogin}>
              <div>
                <label htmlFor="login-email" className="block text-slate-700 mb-1 font-medium">Email</label>
                <Input
                  id="login-email"
                  type="email"
                  autoFocus
                  required
                  placeholder="you@healthmail.com"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="login-password" className="block text-slate-700 mb-1 font-medium">Password</label>
                <Input
                  id="login-password"
                  type="password"
                  autoComplete="current-password"
                  required
                  placeholder="••••••••"
                  value={pw}
                  onChange={e => setPw(e.target.value)}
                />
              </div>
              {error && <div className="text-red-600 text-sm font-medium">{error}</div>}
              <Button
                id="login-signin-btn"
                type="submit"
                disabled={loading}
                className="w-full py-2 font-bold text-lg mt-2"
              >
                {loading ? 'Signing in...' : 'Sign In'}
              </Button>
            </form>
            <div className="text-center mt-6 text-sm">
              <span className="text-slate-600">Don't have an account? </span>
              <Link to="/signup" className="text-[#1d4ed8] font-semibold underline">Sign Up</Link>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

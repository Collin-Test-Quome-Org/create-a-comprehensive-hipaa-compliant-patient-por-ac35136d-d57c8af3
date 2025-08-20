import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { UserPlus } from 'lucide-react';

export const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    // Permissive mock signup (any data works)
    setTimeout(() => {
      setLoading(false);
      navigate('/dashboard');
    }, 1000);
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
              <UserPlus size={38} className="text-[#1d4ed8]" />
            </div>
            <CardTitle className="text-2xl font-bold font-['Roboto'] text-[#1d4ed8]">Create Your Account</CardTitle>
            <p className="text-slate-600 text-sm mt-1">Begin your secure healthcare journey.</p>
          </CardHeader>
          <CardContent>
            <form className="space-y-5 mt-3" onSubmit={handleSignup}>
              <div>
                <label htmlFor="signup-name" className="block text-slate-700 mb-1 font-medium">Full Name</label>
                <Input
                  id="signup-name"
                  type="text"
                  placeholder="Jane Doe"
                  required
                  value={name}
                  onChange={e => setName(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="signup-email" className="block text-slate-700 mb-1 font-medium">Email</label>
                <Input
                  id="signup-email"
                  type="email"
                  placeholder="you@healthmail.com"
                  required
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="signup-password" className="block text-slate-700 mb-1 font-medium">Password</label>
                <Input
                  id="signup-password"
                  type="password"
                  placeholder="••••••••"
                  required
                  value={pw}
                  onChange={e => setPw(e.target.value)}
                />
              </div>
              {error && <div className="text-red-600 text-sm font-medium">{error}</div>}
              <Button
                id="signup-create-btn"
                type="submit"
                disabled={loading}
                className="w-full py-2 font-bold text-lg mt-2"
              >
                {loading ? 'Creating Account...' : 'Sign Up'}
              </Button>
            </form>
            <div className="text-center mt-6 text-sm">
              <span className="text-slate-600">Already have an account? </span>
              <Link to="/login" className="text-[#1d4ed8] font-semibold underline">Sign In</Link>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

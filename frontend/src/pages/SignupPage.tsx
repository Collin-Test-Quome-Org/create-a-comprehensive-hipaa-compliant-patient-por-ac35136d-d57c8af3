import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { UserPlus, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import * as React from 'react';

export const SignupPage = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirm, setConfirm] = React.useState('');
  const [error, setError] = React.useState('');
  const [success, setSuccess] = React.useState(false);
  const navigate = useNavigate();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    if (!email || !password || !confirm) {
      setError('Please fill out all fields.');
      return;
    }
    if (password !== confirm) {
      setError("Passwords don't match.");
      return;
    }
    setTimeout(() => {
      setSuccess(true);
      setTimeout(() => navigate('/dashboard'), 900);
    }, 600);
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#cbd5e1] to-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md px-4"
      >
        <Card className="shadow-xl mt-8">
          <CardHeader className="flex flex-col items-center">
            <span className="mb-2"><UserPlus size={36} className="text-[#1d4ed8]" /></span>
            <CardTitle className="text-2xl font-bold font-['Roboto'] text-[#1d4ed8]">
              Create Your Account
            </CardTitle>
            <span className="text-slate-500 text-sm mt-2">Start your secure healthcare journey.</span>
          </CardHeader>
          <CardContent>
            {success ? (
              <div className="flex flex-col items-center py-8 gap-2">
                <CheckCircle size={40} className="text-green-600" />
                <span className="font-bold text-lg text-[#1d4ed8]">Account created!</span>
                <span className="text-slate-500">Redirecting to your dashboard...</span>
              </div>
            ) : (
              <form className="space-y-4" onSubmit={handleSubmit} aria-label="Signup form">
                <div>
                  <label htmlFor="signup-email" className="font-medium">Email Address</label>
                  <Input id="signup-email" type="email" required value={email} onChange={e => setEmail(e.target.value)} className="mt-1" />
                </div>
                <div>
                  <label htmlFor="signup-password" className="font-medium">Password</label>
                  <Input id="signup-password" type="password" required value={password} onChange={e => setPassword(e.target.value)} className="mt-1" />
                </div>
                <div>
                  <label htmlFor="signup-confirm" className="font-medium">Confirm Password</label>
                  <Input id="signup-confirm" type="password" required value={confirm} onChange={e => setConfirm(e.target.value)} className="mt-1" />
                </div>
                {error && <div className="text-red-600 text-sm" role="alert">{error}</div>}
                <Button id="signup-submit" type="submit" className="w-full mt-2 flex gap-2 items-center justify-center">
                  <UserPlus /> Sign Up
                </Button>
              </form>
            )}
            <div className="flex justify-between mt-6 text-sm">
              <span>
                <Link to="/login" className="text-[#1d4ed8] underline hover:text-blue-700" id="signup-login-link">Already have an account?</Link>
              </span>
              <span>
                <Link to="#" className="text-slate-400 hover:text-[#1d4ed8]">Need help?</Link>
              </span>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

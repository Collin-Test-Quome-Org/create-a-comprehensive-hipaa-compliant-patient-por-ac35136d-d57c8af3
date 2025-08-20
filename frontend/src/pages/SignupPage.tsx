import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { UserPlus } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError('');
    if (!email.includes('@') || password.length < 4 || name.length < 2) {
      setError('Please enter a valid name, email, and password.');
      setLoading(false);
      return;
    }
    // Mock signup: accept anything, go to /dashboard
    setTimeout(() => {
      navigate('/dashboard');
    }, 700);
  }

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center bg-slate-50 py-12">
      <form className="bg-white rounded-2xl shadow-xl px-8 py-10 w-full max-w-md flex flex-col gap-6" onSubmit={handleSubmit} aria-label="signup form">
        <div className="flex flex-col items-center mb-2">
          <UserPlus className="text-[#1d4ed8] mb-2" size={38} />
          <h2 className="font-['Roboto'] font-bold text-2xl text-[#1d4ed8]">Create Your ShieldLink Account</h2>
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="signup-name" className="text-slate-800 font-medium">Full Name</Label>
          <Input id="signup-name" name="name" type="text" autoComplete="name" required placeholder="Your name" value={name} onChange={e => setName(e.target.value)} />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="signup-email" className="text-slate-800 font-medium">Email</Label>
          <Input id="signup-email" name="email" type="email" autoComplete="email" required placeholder="you@email.com" value={email} onChange={e => setEmail(e.target.value)} />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="signup-password" className="text-slate-800 font-medium">Password</Label>
          <Input id="signup-password" name="password" type="password" autoComplete="new-password" required placeholder="••••••••" value={password} onChange={e => setPassword(e.target.value)} />
        </div>
        {error && <div className="text-red-500 text-sm text-center" role="alert">{error}</div>}
        <Button id="signup-submit" type="submit" className="mt-2 font-bold text-lg" disabled={loading}>
          {loading ? 'Creating account…' : 'Sign Up'}
        </Button>
        <div className="text-center text-slate-600 text-sm mt-2">
          Already have an account?{' '}
          <Link to="/login" className="text-[#1d4ed8] font-semibold hover:underline" id="signup-link-login">Log In</Link>
        </div>
      </form>
    </div>
  );
}

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Eye, EyeOff, Lock } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError('');
    // Mock login: accept anything, go to "/dashboard"
    setTimeout(() => {
      if (!email.includes('@') || password.length < 4) {
        setError('Please enter a valid email and password.');
        setLoading(false);
        return;
      }
      navigate('/dashboard');
    }, 700);
  }

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center bg-slate-50 py-12">
      <form className="bg-white rounded-2xl shadow-xl px-8 py-10 w-full max-w-md flex flex-col gap-6" onSubmit={handleSubmit} aria-label="login form">
        <div className="flex flex-col items-center mb-2">
          <Lock className="text-[#1d4ed8] mb-2" size={38} />
          <h2 className="font-['Roboto'] font-bold text-2xl text-[#1d4ed8]">Sign In to ShieldLink Health</h2>
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="login-email" className="text-slate-800 font-medium">Email</Label>
          <Input id="login-email" name="email" type="email" placeholder="you@email.com" autoComplete="email" required value={email} onChange={e => setEmail(e.target.value)} />
        </div>
        <div className="flex flex-col gap-2 relative">
          <Label htmlFor="login-password" className="text-slate-800 font-medium">Password</Label>
          <Input id="login-password" name="password" type={show ? 'text' : 'password'} placeholder="••••••••" autoComplete="current-password" required value={password} onChange={e => setPassword(e.target.value)} />
          <button
            type="button"
            tabIndex={-1}
            aria-label={show ? 'Hide password' : 'Show password'}
            className="absolute right-3 top-[38px] text-slate-400 hover:text-[#1d4ed8]"
            onClick={() => setShow(s => !s)}
            id="login-toggle-password-visibility"
          >
            {show ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>
        {error && <div className="text-red-500 text-sm text-center" role="alert">{error}</div>}
        <Button id="login-submit" type="submit" className="mt-2 font-bold text-lg" disabled={loading}>
          {loading ? 'Signing in…' : 'Sign In'}
        </Button>
        <div className="text-center text-slate-600 text-sm mt-2">
          Don't have an account?{' '}
          <Link to="/signup" className="text-[#1d4ed8] font-semibold hover:underline" id="login-link-signup">Sign up</Link>
        </div>
      </form>
    </div>
  );
}

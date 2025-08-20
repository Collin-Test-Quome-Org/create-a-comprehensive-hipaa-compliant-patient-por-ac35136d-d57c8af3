import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Ghost } from 'lucide-react';

export function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-slate-100">
      <div className="flex flex-col items-center gap-4 p-8 rounded-xl shadow bg-white">
        <Ghost size={48} className="text-blue-700 mb-2" />
        <h1 className="text-3xl font-bold mb-2 font-['Roboto']">Page Not Found</h1>
        <p className="text-slate-600 mb-4">Oops! The page you’re seeking is locked away or doesn’t exist.</p>
        <Button asChild id="notfound-back-home">
          <Link to="/">Return to Home</Link>
        </Button>
      </div>
    </div>
  );
}

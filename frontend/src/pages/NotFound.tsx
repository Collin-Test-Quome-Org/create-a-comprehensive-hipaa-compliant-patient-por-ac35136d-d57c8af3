import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Frown } from 'lucide-react';

export function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#f3f6fa]">
      <div className="flex flex-col items-center p-8 bg-white rounded-xl shadow-xl">
        <Frown className="text-[#1d4ed8] w-16 h-16 mb-4" />
        <h1 className="text-3xl font-bold mb-2" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 700 }}>404 - Page Not Found</h1>
        <p className="mb-6 text-gray-700">Sorry, the page you requested doesn't exist on TrustLink Health.</p>
        <Link to="/">
          <Button id="not-found-home-btn" className="bg-[#1d4ed8] text-white font-semibold px-6 py-2 text-lg hover:bg-blue-700">
            Go Home
          </Button>
        </Link>
      </div>
    </div>
  );
}

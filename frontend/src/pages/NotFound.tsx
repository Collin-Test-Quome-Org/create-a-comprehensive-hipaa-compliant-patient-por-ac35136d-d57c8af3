import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

export function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center bg-slate-50 p-8">
      <img src="/branding/assets/logo-2.png" className="w-24 h-24 mb-8" />
      <h1 className="text-4xl font-bold font-['Roboto'] text-blue-900 mb-3">Oops! Page Not Found</h1>
      <p className="text-lg text-slate-600 mb-8 font-['Roboto']">Looks like you've wandered off the health path. Let's get you back on track!</p>
      <Button asChild id="notfound-home" className="bg-blue-700 text-white hover:bg-blue-800 px-8 py-3 text-lg rounded-full">
        <Link to="/">Go Home</Link>
      </Button>
    </div>
  )
}

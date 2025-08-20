import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const mockProfile = {
  name: 'Jordan Lee',
  email: 'jordan.lee@securemed.com',
  dob: '1988-03-22',
  phone: '(555) 246-8013',
  address: '789 Blue Shield St, Slate City, USA',
  insurance: 'BlueCross Secure Plan',
};

export function Profile() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col items-center justify-center min-h-[80vh] bg-slate-50 py-12"
    >
      <Card className="max-w-xl w-full shadow-xl">
        <CardHeader className="flex flex-row items-center gap-4">
          <img
            src="/branding/assets/logo-1.png"
            className="w-20 h-20 rounded-full border-2 border-blue-700 bg-white shadow"
          />
          <div>
            <CardTitle className="font-['Roboto'] text-2xl text-blue-900" style={{ fontWeight: 700 }}>{mockProfile.name}</CardTitle>
            <div className="text-slate-500 font-['Roboto']" style={{ fontWeight: 400 }}>{mockProfile.email}</div>
          </div>
        </CardHeader>
        <CardContent className="mt-4 space-y-2">
          <div className="flex gap-2 items-center">
            <span className="w-28 font-medium text-slate-700">Date of Birth:</span>
            <span className="font-['Roboto']">{mockProfile.dob}</span>
          </div>
          <div className="flex gap-2 items-center">
            <span className="w-28 font-medium text-slate-700">Phone:</span>
            <span className="font-['Roboto']">{mockProfile.phone}</span>
          </div>
          <div className="flex gap-2 items-center">
            <span className="w-28 font-medium text-slate-700">Address:</span>
            <span className="font-['Roboto']">{mockProfile.address}</span>
          </div>
          <div className="flex gap-2 items-center">
            <span className="w-28 font-medium text-slate-700">Insurance:</span>
            <span className="font-['Roboto']">{mockProfile.insurance}</span>
          </div>
        </CardContent>
        <CardFooter className="flex gap-4 mt-4">
          <Button id="profile-edit-btn" variant="outline" className="text-blue-700 border-blue-700 hover:bg-blue-50">
            Edit Profile
          </Button>
          <Button id="profile-logout-btn" className="bg-blue-700 hover:bg-blue-800 text-white">Logout</Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}

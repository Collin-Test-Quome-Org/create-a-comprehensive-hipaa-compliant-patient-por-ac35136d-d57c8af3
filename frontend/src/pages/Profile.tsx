import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useState } from 'react'
import { motion } from 'framer-motion'

const mockProfile = {
  name: 'Jordan Lee',
  email: 'jordan.lee@email.com',
  phone: '+1 555-234-5678',
  dob: '1990-01-15',
  address: '123 Main St, Springfield, USA',
}

export function Profile() {
  const [profile, setProfile] = useState(mockProfile)
  const [editing, setEditing] = useState(false)
  const [form, setForm] = useState(profile)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSave = () => {
    setProfile(form)
    setEditing(false)
  }

  return (
    <div className="flex flex-col items-center py-12 min-h-[80vh] bg-slate-50">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-lg"
      >
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 700 }}>My Profile</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div>
                <Label htmlFor="profile-name">Name</Label>
                <Input id="profile-name" name="name" value={editing ? form.name : profile.name} onChange={handleChange} disabled={!editing} />
              </div>
              <div>
                <Label htmlFor="profile-email">Email</Label>
                <Input id="profile-email" name="email" value={editing ? form.email : profile.email} onChange={handleChange} disabled={!editing} />
              </div>
              <div>
                <Label htmlFor="profile-phone">Phone</Label>
                <Input id="profile-phone" name="phone" value={editing ? form.phone : profile.phone} onChange={handleChange} disabled={!editing} />
              </div>
              <div>
                <Label htmlFor="profile-dob">Date of Birth</Label>
                <Input id="profile-dob" name="dob" type="date" value={editing ? form.dob : profile.dob} onChange={handleChange} disabled={!editing} />
              </div>
              <div>
                <Label htmlFor="profile-address">Address</Label>
                <Input id="profile-address" name="address" value={editing ? form.address : profile.address} onChange={handleChange} disabled={!editing} />
              </div>
            </form>
            <div className="mt-6 flex gap-4">
              {!editing && (
                <Button id="profile-edit-btn" onClick={() => setEditing(true)} type="button">Edit</Button>
              )}
              {editing && (
                <>
                  <Button id="profile-save-btn" onClick={handleSave} type="button">Save</Button>
                  <Button id="profile-cancel-btn" variant="outline" onClick={() => { setEditing(false); setForm(profile) }} type="button">Cancel</Button>
                </>
              )}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}

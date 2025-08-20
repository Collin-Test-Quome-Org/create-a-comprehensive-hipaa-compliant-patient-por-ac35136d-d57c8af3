import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useState } from 'react'

const mockUser = {
  name: 'Alex Patient',
  email: 'alex.patient@email.com',
  phone: '+1 (555) 123-4567',
  role: 'Patient',
  avatar: '/branding/assets/logo-1.png',
}

export function Profile() {
  const [editMode, setEditMode] = useState(false)
  const [form, setForm] = useState({ name: mockUser.name, email: mockUser.email, phone: mockUser.phone })

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleEdit() {
    setEditMode(true)
  }

  function handleCancel() {
    setForm({ name: mockUser.name, email: mockUser.email, phone: mockUser.phone })
    setEditMode(false)
  }

  function handleSave(e: React.FormEvent) {
    e.preventDefault()
    setEditMode(false)
    // Would submit here
  }

  return (
    <div className="max-w-xl mx-auto py-12 px-4">
      <Card className="shadow-lg">
        <CardHeader className="flex flex-row items-center gap-4">
          <img src={mockUser.avatar} className="w-20 h-20 rounded-full shadow border border-slate-200" />
          <div>
            <CardTitle className="text-2xl font-bold font-['Roboto']">Profile</CardTitle>
            <span className="text-slate-500 font-['Roboto']">{mockUser.role}</span>
          </div>
        </CardHeader>
        <CardContent>
          {editMode ? (
            <form className="space-y-5" onSubmit={handleSave}>
              <div>
                <label htmlFor="profile-name" className="block text-slate-700 font-medium">Name</label>
                <Input id="profile-name" name="name" value={form.name} onChange={handleChange} className="mt-1" required />
              </div>
              <div>
                <label htmlFor="profile-email" className="block text-slate-700 font-medium">Email</label>
                <Input id="profile-email" name="email" value={form.email} onChange={handleChange} className="mt-1" type="email" required />
              </div>
              <div>
                <label htmlFor="profile-phone" className="block text-slate-700 font-medium">Phone</label>
                <Input id="profile-phone" name="phone" value={form.phone} onChange={handleChange} className="mt-1" />
              </div>
              <div className="flex gap-3 mt-4">
                <Button id="profile-save" type="submit" className="bg-blue-700 text-white hover:bg-blue-800">Save</Button>
                <Button id="profile-cancel" variant="outline" type="button" onClick={handleCancel}>Cancel</Button>
              </div>
            </form>
          ) : (
            <div className="space-y-4 mt-3">
              <div>
                <span className="block text-slate-600 font-medium">Name</span>
                <span className="text-lg">{form.name}</span>
              </div>
              <div>
                <span className="block text-slate-600 font-medium">Email</span>
                <span>{form.email}</span>
              </div>
              <div>
                <span className="block text-slate-600 font-medium">Phone</span>
                <span>{form.phone}</span>
              </div>
              <Button id="profile-edit" onClick={handleEdit} className="mt-2 bg-blue-700 text-white hover:bg-blue-800">Edit Profile</Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

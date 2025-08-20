import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HomePage, NotFound, Login, Signup, Dashboard, Documents, MedicalRecords, Prescriptions, Appointments, Messaging } from '@/pages'
import { Navigation } from '@/Navigation'
import { Providers } from '@/Providers'

export function App() {
  return (
    <BrowserRouter>
      <Providers>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/documents" element={<Documents />} />
          <Route path="/medical-records" element={<MedicalRecords />} />
          <Route path="/prescriptions" element={<Prescriptions />} />
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/messaging" element={<Messaging />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Providers>
    </BrowserRouter>
  )
}

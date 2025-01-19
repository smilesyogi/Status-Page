import React from 'react'
import AppSidebar from './components/AppSidebar'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Services from './pages/Services'
import Incidents from './pages/Incidents'
import Maintenance from './pages/Maintenance'
import Teams from './pages/Teams'
import Settings from './pages/Settings'

export default function App() {
  return (
    <SidebarProvider>
      <Router>
        <div className="flex">
          <AppSidebar />
          <main className="flex-grow p-4">
            <SidebarTrigger />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/services" element={<Services />} />
              <Route path="/incidents" element={<Incidents />} />
              <Route path="/maintenance" element={<Maintenance />} />
              <Route path="/teams" element={<Teams />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </main>
        </div>
      </Router>
    </SidebarProvider>
  )
}

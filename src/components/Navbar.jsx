import { useState } from 'react'
import { Rocket, Menu, X, User, Settings } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/5">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-fuchsia-500 shadow-lg">
            <Rocket className="h-5 w-5" />
          </div>
          <span className="text-lg font-semibold tracking-tight">Bhuvaji.com</span>
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm text-white/80">
          <a href="#features" className="hover:text-white transition">Features</a>
          <a href="#community" className="hover:text-white transition">Community</a>
          <a href="#security" className="hover:text-white transition">Security</a>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <button className="inline-flex items-center gap-2 rounded-lg bg-white/10 hover:bg-white/20 px-4 py-2 transition">
            <User className="h-4 w-4" /> Sign in
          </button>
          <button className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-indigo-500 to-fuchsia-500 px-4 py-2 font-medium shadow-lg hover:shadow-fuchsia-500/30 transition">
            <Settings className="h-4 w-4" /> Get Started
          </button>
        </div>

        <button aria-label="Menu" className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-white/10">
          <div className="px-4 py-3 space-y-2 bg-black/30">
            <a href="#features" className="block py-2 text-white/80">Features</a>
            <a href="#community" className="block py-2 text-white/80">Community</a>
            <a href="#security" className="block py-2 text-white/80">Security</a>
            <div className="pt-2 flex gap-3">
              <button className="flex-1 rounded-lg bg-white/10 px-4 py-2">Sign in</button>
              <button className="flex-1 rounded-lg bg-gradient-to-r from-indigo-500 to-fuchsia-500 px-4 py-2">Get Started</button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-white/10 bg-black/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/70">
        <p>© {new Date().getFullYear()} Bhuvaji.com — A playful 3D chat space.</p>
        <div className="flex items-center gap-6">
          <a href="#security" className="hover:text-white">Privacy & Security</a>
          <a href="#accessibility" className="hover:text-white">Accessibility</a>
          <a href="#blog" className="hover:text-white">Blog</a>
        </div>
      </div>
    </footer>
  )
}

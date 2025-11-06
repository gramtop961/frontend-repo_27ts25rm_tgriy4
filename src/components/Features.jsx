import { MessageCircle, Mic, Video, Users, Shield, Gamepad2, Image, Layout } from 'lucide-react'

const features = [
  {
    icon: MessageCircle,
    title: 'Real-time Text Chat',
    desc: 'Snappy messaging with reactions, threads, and multimedia sharing.'
  },
  { icon: Mic, title: 'Crystal Voice', desc: 'Jump into voice lounges with spatial audio vibes.' },
  { icon: Video, title: 'HD Video', desc: 'Face-to-face rooms with easy screen sharing.' },
  { icon: Users, title: 'Avatars & Profiles', desc: 'Express yourself with customizable looks.' },
  { icon: Gamepad2, title: 'Interactive Fun', desc: 'Mini-games, polls, and activities while you chat.' },
  { icon: Shield, title: 'Privacy First', desc: 'End-to-end encryption and clear reporting tools.' },
  { icon: Image, title: 'Media Friendly', desc: 'Drop images, clips, and links right into conversations.' },
  { icon: Layout, title: 'Responsive UI', desc: 'Beautiful and accessible on any device.' }
]

export default function Features() {
  return (
    <section id="features" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-bold">Everything you need to connect</h2>
          <p className="mt-3 text-white/80">Built for joyful conversations with powerful, secure tech under the hood.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl bg-white/5 border border-white/10 p-6 hover:bg-white/10 transition">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-fuchsia-500 shadow-lg">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{title}</h3>
              <p className="mt-1 text-sm text-white/80">{desc}</p>
            </div>
          ))}
        </div>

        <div id="community" className="mt-16 rounded-2xl bg-gradient-to-br from-indigo-600/30 to-fuchsia-600/30 border border-white/10 p-8">
          <h3 className="text-2xl font-semibold">Join the Bhuvaji community</h3>
          <p className="mt-2 text-white/80">Follow friends, build groups, and explore topic-based rooms in a safe space.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <button className="rounded-lg bg-white text-black px-5 py-3 font-medium">Create a room</button>
            <button className="rounded-lg bg-white/10 px-5 py-3">Browse topics</button>
          </div>
        </div>
      </div>
    </section>
  )
}

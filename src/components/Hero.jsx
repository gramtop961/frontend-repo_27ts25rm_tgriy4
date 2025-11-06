import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative isolate">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/ezRAY9QD27kiJcur/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight">
            Bhuvaji.com
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-white/80">
            A vibrant 3D social space for real-time text, voice, and video chats. Dive into playful worlds, meet new friends, and make conversations feel alive.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#features" className="rounded-lg bg-white text-black px-5 py-3 font-medium shadow-lg hover:shadow-white/30 transition">Explore Features</a>
            <a href="#community" className="rounded-lg bg-white/10 px-5 py-3 font-medium hover:bg-white/20 transition">Join Community</a>
          </div>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
    </section>
  )
}

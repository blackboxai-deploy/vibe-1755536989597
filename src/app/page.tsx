import GreetingCard from '@/components/GreetingCard'

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-300 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-3/4 left-1/2 w-48 h-48 bg-pink-300 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>
      
      {/* Main content */}
      <div className="relative z-10">
        <GreetingCard />
      </div>
      
      {/* Footer */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white/60 text-sm text-center">
        <p>Built with Next.js, Tailwind CSS, and love</p>
      </div>
    </div>
  )
}
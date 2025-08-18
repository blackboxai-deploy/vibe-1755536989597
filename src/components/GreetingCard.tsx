"use client"

import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const greetings = [
  "Hello, World!",
  "¡Hola, Mundo!",
  "Bonjour, le Monde!",
  "Hallo, Welt!",
  "こんにちは、世界！",
  "Привет, мир!",
  "你好，世界！",
  "مرحبا بالعالم!",
]

export default function GreetingCard() {
  const [currentGreeting, setCurrentGreeting] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const nextGreeting = () => {
    setIsAnimating(true)
    setTimeout(() => {
      setCurrentGreeting((prev) => (prev + 1) % greetings.length)
      setIsAnimating(false)
    }, 150)
  }

  const currentTime = new Date().toLocaleString()

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <Card className="w-full max-w-md bg-white/10 backdrop-blur-lg border-white/20 shadow-2xl">
        <CardContent className="p-8 text-center space-y-6">
          <div className="space-y-2">
            <h1 
              className={`text-4xl md:text-5xl font-bold text-white transition-all duration-300 ${
                isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
              }`}
            >
              {greetings[currentGreeting]}
            </h1>
            <p className="text-white/80 text-lg">
              Welcome to our simple app
            </p>
          </div>

          <div className="space-y-4">
            <p className="text-white/70 text-sm">
              Current time: {currentTime}
            </p>
            
            <Button 
              onClick={nextGreeting}
              className="bg-white/20 hover:bg-white/30 text-white border-white/30 transition-all duration-300 hover:scale-105"
              variant="outline"
            >
              Try Another Language
            </Button>
          </div>

          <div className="text-white/60 text-xs">
            Click the button to see greetings in different languages!
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
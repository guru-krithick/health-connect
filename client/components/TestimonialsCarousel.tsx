'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const testimonials = [
  {
    text: "Very easy to book, maintain history. Hassle-free from older versions of booking appointments via telephone. Thanks CareConnect for making it simple.",
    author: "Jyothi Bhatia"
  },
  {
    text: "The app has been a game-changer for me. It's so convenient to consult with doctors from the comfort of my home.",
    author: "Mark Johnson"
  },
  {
    text: "I love how easy it is to access all my medical records in one place. Great job, CareConnect!",
    author: "Sarah Thompson"
  }
]

export function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    const timer = setInterval(nextTestimonial, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold mb-8 text-center">What our users have to say</h2>
      <div className="max-w-2xl mx-auto relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <p className="text-lg mb-6 text-center italic">
                <p>&quot;This is a testimonial&quot;</p>
                </p>
                <div className="text-center">
                  <p className="font-semibold">{testimonials[currentIndex].author}</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </AnimatePresence>
        <button
          onClick={prevTestimonial}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-full"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextTestimonial}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-full"
          aria-label="Next testimonial"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>
    </section>
  )
}


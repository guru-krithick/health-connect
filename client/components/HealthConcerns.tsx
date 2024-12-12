'use client'

import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import Image from 'next/image'

const concerns = [
  { icon: "/placeholder.svg?height=60&width=60", title: "Period doubts or Pregnancy" },
  { icon: "/placeholder.svg?height=60&width=60", title: "Acne, pimple or skin issues" },
  { icon: "/placeholder.svg?height=60&width=60", title: "Performance issues in bed" },
  { icon: "/placeholder.svg?height=60&width=60", title: "Cold, cough or fever" },
  { icon: "/placeholder.svg?height=60&width=60", title: "Child not feeling well" },
  { icon: "/placeholder.svg?height=60&width=60", title: "Depression or anxiety" },
  { icon: "/placeholder.svg?height=60&width=60", title: "Weight loss" },
  { icon: "/placeholder.svg?height=60&width=60", title: "Diabetes management" },
  { icon: "/placeholder.svg?height=60&width=60", title: "Headache problems" },
  { icon: "/placeholder.svg?height=60&width=60", title: "Stomach issues" },
  { icon: "/placeholder.svg?height=60&width=60", title: "Bone and joint issues" },
  { icon: "/placeholder.svg?height=60&width=60", title: "Eye problems" },
]

export function HealthConcerns() {
  const [width, setWidth] = useState(0)
  const carousel = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    }
  }, [])

  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold mb-8">Consult top doctors online for any health concern</h2>
      <motion.div ref={carousel} className="cursor-grab overflow-hidden">
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="flex"
        >
          {concerns.map((item, index) => (
            <motion.div
              key={index}
              className="min-w-[150px] text-center mr-4"
            >
              <Image src={item.icon} alt={item.title} width={60} height={60} className="mx-auto mb-2" />
              <p className="text-sm mb-2">{item.title}</p>
              <Button 
                variant="outline" 
                className="text-primary border-primary hover:bg-primary hover:text-white transition-colors duration-300"
              >
                Consult Now
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}


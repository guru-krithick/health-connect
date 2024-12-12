import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

const features = [
  {
    title: "Instant Video Consultation",
    description: "Connect within 60 secs",
    image: "/placeholder.svg?height=400&width=300",
    href: "/video-consult",
    bgColor: "bg-blue-50",
  },
  {
    title: "Find Doctors Near You",
    description: "Confirmed appointments",
    image: "/placeholder.svg?height=400&width=300",
    href: "/find-doctors",
    bgColor: "bg-teal-50",
  },
  {
    title: "Surgeries",
    description: "Safe and trusted surgery centers",
    image: "/placeholder.svg?height=400&width=300",
    href: "/surgeries",
    bgColor: "bg-purple-50",
  }
]

export function HeroSection() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <Link href={feature.href}>
                <div className={`${feature.bgColor} rounded-2xl p-6 h-full transition-transform duration-300 hover:scale-105 cursor-pointer shadow-sm hover:shadow-md`}>
                    <Image 
                      src={feature.image} 
                      alt={feature.title}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-xl"
                    />
                      <h2 className="text-2xl font-bold mb-2">{feature.title}</h2>
                      <p className="text-gray-600">{feature.description}</p>
                  </div>
                </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


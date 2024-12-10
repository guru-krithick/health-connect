'use client'

import { TopSearch } from '@/components/TopSearch'
import { HeroSection } from '@/components/HeroSection'
import { HealthConcerns } from '@/components/HealthConcerns'
import { AppointmentBooking } from '@/components/AppointmentBooking'
import { ArticlesSection } from '@/components/ArticlesSection'
import { TestimonialsCarousel } from '@/components/TestimonialsCarousel'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <TopSearch />
      <HeroSection />
      <HealthConcerns />
      <AppointmentBooking />
      <ArticlesSection />
      <TestimonialsCarousel />
    </div>
  )
}


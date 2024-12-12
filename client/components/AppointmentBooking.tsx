import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

const appointments = [
  { image: "/placeholder.svg?height=150&width=200", title: "Dentist", description: "Teething troubles? Schedule a dental checkup" },
  { image: "/placeholder.svg?height=150&width=200", title: "Gynecologist/Obstetrician", description: "Explore for women's health, pregnancy and infertility treatments" },
  { image: "/placeholder.svg?height=150&width=200", title: "Dietitian/Nutrition", description: "Get guidance on eating right, weight management and sports nutrition" },
  { image: "/placeholder.svg?height=150&width=200", title: "Physiotherapist", description: "Pulled a muscle? Get it treated by a trained physiotherapist" },
  { image: "/placeholder.svg?height=150&width=200", title: "General Physician", description: "Find the right family doctor in your neighborhood" },
  { image: "/placeholder.svg?height=150&width=200", title: "Orthopedist", description: "For Bone and Joints issues, spinal injuries and more" },
  { image: "/placeholder.svg?height=150&width=200", title: "Dermatologist", description: "From acne to psoriasis, get all your skin problems solved" },
  { image: "/placeholder.svg?height=150&width=200", title: "Pediatrician", description: "Child Specialists and Doctors for Infant" },
]

export function AppointmentBooking() {
  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold mb-8">Book an appointment for an in-clinic consultation</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {appointments.map((item, index) => (
          <Card key={index} className="border-none shadow-sm transition-transform duration-300 hover:scale-105">
            <CardContent>
              <Image src={item.image} alt={item.title} width={200} height={150} className="w-full h-40 object-cover mb-4 rounded" />
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600 mb-4 flex-grow">{item.description}</p>
              <Button variant="outline" className="w-full mt-auto">Book Now</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}


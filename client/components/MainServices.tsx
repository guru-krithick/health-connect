import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Video, Stethoscope, Building } from 'lucide-react'

const services = [
  {
    icon: Video,
    title: "Instant Video Consultation",
    description: "Connect within 60 secs",
    buttonText: "Consult Now",
    color: "bg-blue-100",
    iconColor: "text-primary",
  },
  {
    icon: Stethoscope,
    title: "Find Doctors Near You",
    description: "Confirmed appointments",
    buttonText: "Find Doctors",
    color: "bg-green-100",
    iconColor: "text-green-600",
  },
  {
    icon: Building,
    title: "Surgeries",
    description: "Safe and trusted surgery centers",
    buttonText: "Book Now",
    color: "bg-purple-100",
    iconColor: "text-purple-600",
  },
]

export function MainServices() {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <Card key={index} className="border-none shadow-lg transition-transform duration-300 hover:scale-105">
            <CardContent className="p-6 flex flex-col h-full justify-between">
              <div className="flex items-center mb-4">
                <div className={`${service.color} p-3 rounded-full mr-4`}>
                  <service.icon className={`${service.iconColor} h-6 w-6`} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{service.title}</h3>
                  <p className="text-sm text-gray-500">{service.description}</p>
                </div>
              </div>
              <div className="mt-auto">
                <Button className="w-full bg-primary hover:bg-primary-dark text-white transition-colors duration-300">
                  {service.buttonText}
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}


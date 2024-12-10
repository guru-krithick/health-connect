import { useState } from 'react'
import { MapPin, Search } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function SearchSection() {
  const [location, setLocation] = useState('New York')

  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-700 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Your Health, Our Priority</h1>
          <p className="text-xl text-blue-100 mb-8">Connect with top healthcare professionals instantly</p>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center mb-4 justify-center">
              <MapPin className="text-primary mr-2" />
              <Select value={location} onValueChange={setLocation}>
                <SelectTrigger className="w-[180px] border-none bg-gray-100 focus:ring-2 focus:ring-primary">
                  <SelectValue placeholder="Select location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="New York">New York</SelectItem>
                  <SelectItem value="Los Angeles">Los Angeles</SelectItem>
                  <SelectItem value="Chicago">Chicago</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex">
              <div className="relative flex-grow">
                <Input
                  type="text"
                  placeholder="Search doctors, clinics, hospitals, etc."
                  className="w-full pl-12 pr-4 py-3 rounded-l-full border-2 border-r-0 border-primary focus:ring-2 focus:ring-primary"
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-primary h-5 w-5" />
              </div>
              <Button className="rounded-r-full bg-primary hover:bg-primary-dark text-white transition-colors duration-300">
                Search
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


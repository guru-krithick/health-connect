import { MapPin, Search } from 'lucide-react'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function TopSearch() {
  return (
    <div className="border-b bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center h-16 gap-4">
          <div className="flex items-center min-w-[200px]">
            <MapPin className="text-gray-400 w-5 h-5" />
            <Select defaultValue="gurugram">
              <SelectTrigger className="border-none shadow-none focus:ring-0 w-full">
                <SelectValue placeholder="Select location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="gurugram">Gurugram</SelectItem>
                <SelectItem value="delhi">Delhi</SelectItem>
                <SelectItem value="noida">Noida</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input 
                type="text" 
                placeholder="Search doctors, clinics, hospitals, etc."
                className="w-full pl-10 border-none shadow-none focus-visible:ring-0"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


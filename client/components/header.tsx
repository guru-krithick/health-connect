'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from './ui/button'
import { Menu, X, ChevronDown } from 'lucide-react'

// Define types for NavItem and subItems
interface NavItemProps {
  label: string;
  href: string;
  subItems?: { label: string; href: string }[]; // subItems are optional
}

interface SubItem {
  label: string;
  href: string;
}

const navItems: NavItemProps[] = [
  { 
    label: "Find Care", 
    href: "/find-care",
    subItems: [
      { label: "Find Doctors", href: "/find-doctors" },
      { label: "Video Consult", href: "/video-consult" },
      { label: "Surgeries", href: "/surgeries" },
    ]
  },
  { 
    label: "For Providers", 
    href: "/for-providers",
    subItems: [
      { label: "Join as Provider", href: "/provider/register" },
      { label: "Provider Dashboard", href: "/provider/dashboard" },
    ]
  },
  { label: "About Us", href: "/about" }, // No subItems here
]

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white border-b shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-2xl font-bold text-primary">
            CareConnect
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <NavItem key={item.label} {...item} />
            ))}
          </nav>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/login" className="text-primary hover:text-primary-dark transition-colors duration-300">
            <Button variant="ghost" className="text-primary hover:text-primary-dark hover:bg-primary-light transition-colors duration-300">
              Login
            </Button>
            </Link>
            
           <Link href="/signup" className="text-white">
           
           <Button className="bg-primary hover:bg-primary-dark text-white transition-colors duration-300">
              Sign Up
            </Button>
           </Link>
          </div>

          {/* Mobile Hamburger Icon */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t"
          >
            <div className="container mx-auto px-4 py-4 bg-background">
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <MobileNavItem key={item.label} {...item} />
                ))}
                <Link href="/login" className="text-primary hover:text-primary-dark transition-colors duration-300">
                <Button className="w-full bg-primary text-white hover:bg-primary-dark transition-colors duration-300">
                  Login / Sign Up
                </Button>
                </Link>
                
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

// NavItem component for Desktop
const NavItem = ({ label, href, subItems }: NavItemProps) => (
  <div className="relative group">
    <Link 
      href={href} 
      className="text-gray-700 hover:text-primary transition-colors duration-300 flex items-center"
    >
      {label}
      {subItems && <ChevronDown className="ml-1 h-4 w-4" />}
    </Link>
    {subItems && (
      <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
        {subItems.map((subItem: SubItem) => (
          <Link 
            key={subItem.href}
            href={subItem.href} 
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-300"
          >
            {subItem.label}
          </Link>
        ))}
      </div>
    )}
  </div>
)

// MobileNavItem component with dropdown toggle
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const MobileNavItem = ({ label, href, subItems }: NavItemProps) => {
  const [isOpen, setIsOpen] = useState(false)


  return (
    <div>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left text-gray-700 hover:text-primary transition-colors duration-300 flex items-center justify-between"
      >
        {label}
        {subItems && (isOpen ? <ChevronDown className="h-4 w-4 transform rotate-180" /> : <ChevronDown className="h-4 w-4" />)}
      </button>
      {subItems && isOpen && (
        <div className="mt-2 ml-4 space-y-2">
          {subItems.map((subItem: SubItem) => (
            <Link 
              key={subItem.href}
              href={subItem.href} 
              className="block text-sm text-gray-600 hover:text-primary transition-colors duration-300"
            >
              {subItem.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export default Header

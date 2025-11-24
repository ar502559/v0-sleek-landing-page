import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="Pro-Inspect Solutions Logo"
                width={120}
                height={120}
                className="h-16 w-auto object-contain"
              />
              <span className="text-lg font-bold">Pro-Inspect Solutions</span>
            </div>
            {/* </CHANGE> */}
            <p className="text-sm opacity-90 leading-relaxed mb-4">
              Leading provider of QA/QC and NDT training and certification for industrial professionals worldwide.
            </p>
            <div className="flex gap-3">
              <Button size="icon" variant="secondary" asChild>
                <Link href="#" aria-label="Facebook">
                  <Facebook className="h-4 w-4" />
                </Link>
              </Button>
              <Button size="icon" variant="secondary" asChild>
                <Link href="#" aria-label="LinkedIn">
                  <Linkedin className="h-4 w-4" />
                </Link>
              </Button>
              <Button size="icon" variant="secondary" asChild>
                <Link href="#" aria-label="Twitter">
                  <Twitter className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm opacity-90">
              <li>
                <Link href="/about" className="hover:opacity-100 transition-opacity">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/courses" className="hover:opacity-100 transition-opacity">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="/calendar" className="hover:opacity-100 transition-opacity">
                  Training Calendar
                </Link>
              </li>
              <li>
                <Link href="/accreditation" className="hover:opacity-100 transition-opacity">
                  Accreditation
                </Link>
              </li>
              <li>
                <Link href="/facilities" className="hover:opacity-100 transition-opacity">
                  Facilities
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3 text-sm opacity-90">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <span>123 Industrial Avenue, Training District, City</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0" />
                <span>info@pro-inspect.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Newsletter</h3>
            <p className="text-sm opacity-90 mb-4 leading-relaxed">
              Subscribe for course updates and industry insights.
            </p>
            <form className="space-y-2">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
              />
              <Button type="submit" variant="secondary" className="w-full">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-primary-foreground/20 text-center text-sm opacity-90">
          <p>&copy; {new Date().getFullYear()} Pro-Inspect Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

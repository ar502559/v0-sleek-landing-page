import { Hero } from "@/components/hero"
import { Navigation } from "@/components/navigation"
import { CourseCards } from "@/components/course-cards"
import { Testimonials } from "@/components/testimonials"
import { TrustBadges } from "@/components/trust-badges"
import { StatsSection } from "@/components/stats-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <TrustBadges />
      <StatsSection />
      <CourseCards />
      <Testimonials />
      <Footer />
    </main>
  )
}

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CourseCards } from "@/components/course-cards"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function CoursesPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      <section className="pt-32 pb-12 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Courses & Certifications</h1>
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty mb-8">
              Explore our comprehensive range of training programs designed to advance your career in quality assurance
              and non-destructive testing.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="/contact">Request Information</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/calendar">View Schedule</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <CourseCards />

      <Footer />
    </main>
  )
}

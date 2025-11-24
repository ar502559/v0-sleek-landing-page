import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Hammer, Microscope, BookOpen, Users, Wrench, Cpu } from "lucide-react"

export default function FacilitiesPage() {
  const facilities = [
    {
      icon: Hammer,
      title: "Welding Workshop",
      description:
        "Fully equipped welding lab with various welding processes including SMAW, GMAW, GTAW, and FCAW for hands-on practice.",
    },
    {
      icon: Microscope,
      title: "NDT Laboratory",
      description:
        "State-of-the-art equipment for ultrasonic, radiographic, magnetic particle, and liquid penetrant testing methods.",
    },
    {
      icon: BookOpen,
      title: "Classroom Facilities",
      description:
        "Modern air-conditioned classrooms with multimedia equipment and comfortable seating for optimal learning.",
    },
    {
      icon: Users,
      title: "Training Center",
      description:
        "Dedicated practical training areas where students can apply theoretical knowledge under expert supervision.",
    },
    {
      icon: Wrench,
      title: "Inspection Equipment",
      description: "Industry-standard tools and equipment for quality control inspection and measurement training.",
    },
    {
      icon: Cpu,
      title: "Computer Lab",
      description:
        "Advanced computer facilities with specialized software for inspection report writing and data analysis.",
    },
  ]

  return (
    <main className="min-h-screen">
      <Navigation />

      <section className="pt-32 pb-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Facilities</h1>
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
              Train with industry-standard equipment in our modern facilities designed to provide the best hands-on
              learning experience.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {facilities.map((facility, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <facility.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{facility.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">{facility.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-muted/30 rounded-lg p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Visit Our Campus</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Schedule a tour of our facilities to see our training environment firsthand. Meet our instructors and
                explore the equipment you'll be working with.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <div className="text-sm">
                  <span className="font-semibold">Call us:</span> +1 (555) 123-4567
                </div>
                <div className="text-sm">
                  <span className="font-semibold">Email:</span> info@ndtinstitute.com
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

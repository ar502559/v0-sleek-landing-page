import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Target, Eye, Award, Users } from "lucide-react"

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description:
        "To provide world-class QA/QC and NDT training that empowers professionals to excel in their careers and contribute to industrial safety and quality standards.",
    },
    {
      icon: Eye,
      title: "Our Vision",
      description:
        "To be the leading training institute recognized globally for excellence in quality assurance and non-destructive testing education.",
    },
    {
      icon: Award,
      title: "Our Standards",
      description:
        "We maintain the highest standards of education, adhering to international codes and regulations while providing hands-on practical experience.",
    },
    {
      icon: Users,
      title: "Our Commitment",
      description:
        "Committed to student success through personalized attention, industry connections, and comprehensive career support services.",
    },
  ]

  return (
    <main className="min-h-screen">
      <Navigation />

      <section className="pt-32 pb-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
              With over 15 years of excellence in industrial training, we've established ourselves as a premier
              institution for QA/QC and NDT certification programs.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Founded in 2009, Pro-Inspect Solutions has been at the forefront of industrial training excellence. We
                specialize in providing comprehensive training and certification programs for professionals in the
                Steel/Fabrication, Oil & Gas, and Construction industries.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our state-of-the-art facilities and experienced faculty ensure that students receive the highest quality
                education. We combine theoretical knowledge with practical hands-on training to prepare our graduates
                for real-world challenges.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                With partnerships with leading industry organizations and a proven track record of student success, we
                continue to set the standard for quality training in the field.
              </p>
            </div>
            <div className="bg-muted rounded-lg aspect-video flex items-center justify-center">
              <span className="text-muted-foreground">Training Facility Image</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-3">{value.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

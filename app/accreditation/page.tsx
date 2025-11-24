import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

export default function AccreditationPage() {
  const accreditations = [
    {
      title: "ISO 9001:2015 Certified",
      description: "International standard for quality management systems, ensuring consistent service delivery.",
    },
    {
      title: "ASNT (American Society for NDT)",
      description: "Authorized training provider for NDT certification programs following SNT-TC-1A guidelines.",
    },
    {
      title: "AWS (American Welding Society)",
      description: "Approved training facility for Certified Welding Inspector (CWI) examination preparation.",
    },
    {
      title: "NACE International",
      description: "Recognized training provider for coating inspection and corrosion control programs.",
    },
    {
      title: "API (American Petroleum Institute)",
      description: "Authorized for pipeline inspection and quality control training in oil & gas sector.",
    },
    {
      title: "CSWIP (Certification Scheme for Welding)",
      description: "Approved by TWI for international welding inspection certifications.",
    },
  ]

  const partnerships = [
    "Saudi Aramco",
    "Shell",
    "ExxonMobil",
    "BP",
    "Chevron",
    "Total Energies",
    "Bechtel",
    "Fluor Corporation",
    "Halliburton",
    "Schlumberger",
    "Baker Hughes",
    "Saipem",
  ]

  return (
    <main className="min-h-screen">
      <Navigation />

      <section className="pt-32 pb-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Accreditation & Approvals</h1>
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
              Our certifications are recognized worldwide by leading industrial organizations and meet international
              quality standards.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center">Our Accreditations</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {accreditations.map((item, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-lg">{item.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Industry Partnerships</h2>
            <p className="text-center text-muted-foreground mb-8 leading-relaxed">
              Trusted by leading companies across the globe
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {partnerships.map((company, index) => (
                <div
                  key={index}
                  className="bg-muted rounded-lg p-6 flex items-center justify-center text-center font-medium"
                >
                  {company}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

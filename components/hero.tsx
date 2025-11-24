import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />

      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full">
            <span className="text-sm font-semibold text-accent">Internationally Accredited Programs</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance leading-tight mb-6">
            Advance Your Career in <span className="text-primary">QA/QC & NDT</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground text-pretty leading-relaxed mb-8 max-w-2xl mx-auto">
            Professional training and certification for industrial professionals in Steel/Fabrication, Oil & Gas, and
            Construction sectors. Build expertise with hands-on learning and internationally recognized credentials.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" asChild className="w-full sm:w-auto">
              <Link href="/courses">
                Enroll Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="w-full sm:w-auto bg-transparent">
              <Link href="/contact">Download Brochure</Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  )
}

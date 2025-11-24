import { Award, Shield, Users, GraduationCap } from "lucide-react"

export function TrustBadges() {
  const badges = [
    {
      icon: Award,
      title: "ISO Certified",
      description: "International standards compliance",
    },
    {
      icon: Shield,
      title: "Industry Approved",
      description: "Recognized by major corporations",
    },
    {
      icon: Users,
      title: "5000+ Graduates",
      description: "Successful professionals trained",
    },
    {
      icon: GraduationCap,
      title: "Expert Faculty",
      description: "Industry veterans with 15+ years",
    },
  ]

  return (
    <section className="py-12 border-y border-border bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {badges.map((badge, index) => (
            <div key={index} className="flex flex-col items-center text-center gap-3">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <badge.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-sm mb-1">{badge.title}</h3>
                <p className="text-xs text-muted-foreground">{badge.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

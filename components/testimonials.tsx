import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Quote } from "lucide-react"

export function Testimonials() {
  const testimonials = [
    {
      name: "Ahmed Hassan",
      role: "QC Inspector at Saudi Aramco",
      content:
        "The CWI course was comprehensive and practical. The hands-on training prepared me perfectly for the certification exam. I'm now working with one of the top oil & gas companies.",
      initials: "AH",
    },
    {
      name: "Sarah Mitchell",
      role: "NDT Technician, Shell",
      content:
        "Outstanding faculty with real industry experience. The UT Level II course exceeded my expectations. The job placement support was excellent.",
      initials: "SM",
    },
    {
      name: "Mohammed Al-Farsi",
      role: "Pipeline Inspector",
      content:
        "Best investment in my career. The training was thorough and the certification is recognized worldwide. I received three job offers before completing the course.",
      initials: "MA",
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Students Say</h2>
          <p className="text-muted-foreground leading-relaxed">
            Join thousands of successful professionals who transformed their careers with our training programs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative">
              <CardContent className="pt-6">
                <Quote className="h-8 w-8 text-primary/20 mb-4" />
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">{testimonial.content}</p>
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-sm">{testimonial.name}</div>
                    <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

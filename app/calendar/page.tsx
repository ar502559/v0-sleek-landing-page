import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Users } from "lucide-react"

export default function CalendarPage() {
  const upcomingCourses = [
    {
      title: "Welding Inspector Certification (CWI)",
      date: "March 15 - May 10, 2024",
      location: "Main Campus",
      seats: "8 Seats Available",
      status: "Open",
    },
    {
      title: "Ultrasonic Testing (UT) Level II",
      date: "March 22 - May 3, 2024",
      location: "Main Campus",
      seats: "12 Seats Available",
      status: "Open",
    },
    {
      title: "Quality Control Inspector",
      date: "April 1 - June 7, 2024",
      location: "Main Campus",
      seats: "5 Seats Available",
      status: "Filling Fast",
    },
    {
      title: "Radiographic Testing (RT) Level II",
      date: "April 8 - May 24, 2024",
      location: "Main Campus",
      seats: "15 Seats Available",
      status: "Open",
    },
    {
      title: "Pipeline Inspector Certification",
      date: "April 15 - May 24, 2024",
      location: "Main Campus",
      seats: "10 Seats Available",
      status: "Open",
    },
    {
      title: "Coating Inspector (NACE/SSPC)",
      date: "May 1 - May 29, 2024",
      location: "Main Campus",
      seats: "Full",
      status: "Waitlist",
    },
  ]

  return (
    <main className="min-h-screen">
      <Navigation />

      <section className="pt-32 pb-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Training Calendar</h1>
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
              View our upcoming course schedule and reserve your spot today. Limited seats available for each session to
              ensure personalized attention.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingCourses.map((course, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Badge
                      variant={
                        course.status === "Waitlist"
                          ? "secondary"
                          : course.status === "Filling Fast"
                            ? "default"
                            : "outline"
                      }
                    >
                      {course.status}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl">{course.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{course.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>{course.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Users className="h-4 w-4" />
                    <span>{course.seats}</span>
                  </div>
                  <Button className="w-full mt-4" disabled={course.status === "Waitlist"}>
                    {course.status === "Waitlist" ? "Join Waitlist" : "Reserve Seat"}
                  </Button>
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

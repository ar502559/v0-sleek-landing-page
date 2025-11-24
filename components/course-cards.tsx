import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, Users, Award } from "lucide-react"
import Link from "next/link"

export function CourseCards() {
  const courses = [
    {
      title: "Welding Inspector Certification (CWI)",
      category: "Steel & Fabrication",
      description:
        "Comprehensive training for AWS Certified Welding Inspector certification. Learn inspection techniques, codes, and standards.",
      duration: "8 Weeks",
      students: "150+ Enrolled",
      certification: "AWS Certified",
      featured: true,
    },
    {
      title: "Ultrasonic Testing (UT) Level II",
      category: "NDT",
      description:
        "Advanced NDT training covering ultrasonic testing principles, equipment operation, and defect evaluation.",
      duration: "6 Weeks",
      students: "120+ Enrolled",
      certification: "ASNT Level II",
      featured: false,
    },
    {
      title: "Quality Control Inspector",
      category: "Oil & Gas",
      description:
        "Essential QA/QC skills for oil and gas industry. Covers inspection procedures, documentation, and safety protocols.",
      duration: "10 Weeks",
      students: "200+ Enrolled",
      certification: "Industry Certified",
      featured: true,
    },
    {
      title: "Radiographic Testing (RT) Level II",
      category: "NDT",
      description: "Professional radiographic testing certification. Master X-ray and gamma-ray inspection techniques.",
      duration: "7 Weeks",
      students: "90+ Enrolled",
      certification: "ASNT Level II",
      featured: false,
    },
    {
      title: "Pipeline Inspector Certification",
      category: "Construction",
      description:
        "Specialized training for pipeline construction and maintenance inspection in accordance with API standards.",
      duration: "6 Weeks",
      students: "110+ Enrolled",
      certification: "API Certified",
      featured: false,
    },
    {
      title: "Coating Inspector (NACE/SSPC)",
      category: "Steel & Fabrication",
      description:
        "Learn protective coating inspection for steel structures. Covers surface preparation and quality standards.",
      duration: "4 Weeks",
      students: "85+ Enrolled",
      certification: "NACE/SSPC",
      featured: false,
    },
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Courses & Certifications</h2>
          <p className="text-muted-foreground text-pretty leading-relaxed">
            Industry-leading training programs designed to advance your career. All courses include hands-on practice
            and internationally recognized certifications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <Card key={index} className={course.featured ? "border-primary shadow-lg" : ""}>
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <Badge variant={course.featured ? "default" : "secondary"}>{course.category}</Badge>
                  {course.featured && (
                    <Badge variant="outline" className="border-accent text-accent">
                      Popular
                    </Badge>
                  )}
                </div>
                <CardTitle className="text-xl">{course.title}</CardTitle>
                <CardDescription className="text-pretty leading-relaxed">{course.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Users className="h-4 w-4" />
                  <span>{course.students}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Award className="h-4 w-4" />
                  <span>{course.certification}</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant={course.featured ? "default" : "outline"} asChild>
                  <Link href="/courses">Learn More</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" asChild>
            <Link href="/courses">View All Courses</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

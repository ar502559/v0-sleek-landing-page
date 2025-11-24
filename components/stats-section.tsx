export function StatsSection() {
  const stats = [
    { number: "15+", label: "Years of Excellence" },
    { number: "50+", label: "Industry Courses" },
    { number: "95%", label: "Placement Rate" },
    { number: "100+", label: "Partner Companies" },
  ]

  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
              <div className="text-sm md:text-base opacity-90">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

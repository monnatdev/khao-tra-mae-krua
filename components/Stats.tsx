export default function Stats() {

  const stats = [
    { value: "100+", label: "Local Shops" },
    { value: "3", label: "Rice Products" },
    { value: "2020", label: "Founded" }
  ]

  return (
    <section className="py-28 bg-white">

      <div className="max-w-5xl mx-auto grid md:grid-cols-3 text-center gap-12">

        {stats.map((s) => (
          <div key={s.label}>
            <div className="text-5xl font-bold mb-3">
              {s.value}
            </div>

            <div className="text-neutral-500">
              {s.label}
            </div>
          </div>
        ))}

      </div>

    </section>
  )
}
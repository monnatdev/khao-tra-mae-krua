export default function Partners() {

  return (
    <section className="py-32 bg-neutral-50">

      <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-4xl font-bold mb-16">
          Our Partners
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">

          {[1,2,3,4,5].map((i)=>(
            <div
              key={i}
              className="h-20 bg-white border rounded-xl"
            />
          ))}

        </div>

      </div>

    </section>
  )
}
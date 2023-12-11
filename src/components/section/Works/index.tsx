interface WorksProps {}

export const Works = ({ ...props }: WorksProps) => {
  return (
    <section id="works" className="px-20 py-20 lg:px-40 lg:py-20">
      <div className="flex justify-center">
        <h1 className="text-3xl font-bold">Works</h1>
      </div>
    </section>
  )
}

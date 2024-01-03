import { TechnologicalDomainIcon } from '@/components/atoms/TechnologicalDomainIcon'

interface SkillsProps {}

export const Skills = ({ ...props }: SkillsProps) => {
  return (
    <section
      id="skills"
      className="bg-neutral-200 px-20 py-20 lg:px-8 xl:px-20"
    >
      <div className="flex justify-center">
        <h1 className="text-3xl font-bold">Skills</h1>
      </div>
      <div className="grid grid-rows-3 items-center justify-center gap-y-20 pt-24 lg:grid-cols-3 lg:grid-rows-none lg:gap-y-0 lg:py-24">
        <div className="relative mx-4 flex flex-col rounded-xl bg-white px-10 pt-20 shadow-md">
          <span className="absolute left-1/2 top-[-48px] -translate-x-1/2 transform">
            <TechnologicalDomainIcon iconType="frontend" />
          </span>
          <h3 className="text-center">Frontend</h3>
          <p className="whitespace-pre-wrap break-words pb-8">
            {`
✓ Typescript/Javascript
✓ Node.js
✓ React
✓ Next.js
✓ HTML/CSS/SASS
            `}
          </p>
        </div>
        <div className="relative mx-4 flex flex-col rounded-xl bg-white px-10 pt-20 shadow-md">
          <span className="absolute left-1/2 top-[-48px] -translate-x-1/2 transform">
            <TechnologicalDomainIcon iconType="backend" />
          </span>
          <h3 className="text-center">Backend</h3>
          <p className="whitespace-pre-wrap break-words pb-8">
            {`
✓ Java/Kotlin
✓ Gradle/Kotlin Gradle DSL
✓ SpringBoot/ktor
✓ Mybatis/Exposed
            `}
          </p>
        </div>
        <div className="relative mx-4 flex flex-col rounded-xl bg-white px-10 pt-20 shadow-md">
          <span className="absolute left-1/2 top-[-48px] -translate-x-1/2 transform">
            <TechnologicalDomainIcon iconType="infrastructure" />
          </span>
          <h3 className="text-center">Infrastructure</h3>
          <p className="whitespace-pre-wrap break-words pb-8">
            {`
coming soon...
            `}
          </p>
        </div>
        <div className="flex flex-row"></div>
      </div>
    </section>
  )
}

import { TechnologicalDomain } from '@/components/molecules/TechnologicalDomain'

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
      <div className="grid grid-rows-3 items-stretch justify-center gap-y-20 pt-24 lg:grid-cols-3 lg:grid-rows-none lg:gap-y-0 lg:py-24">
        <TechnologicalDomain
          iconType={'frontend'}
          domainName="Frontend"
          stackData={`✓ Typescript/Javascript\n✓ Node.js\n✓ React\n✓ Next.js\n✓ HTML/CSS/SASS`}
        />
        <TechnologicalDomain
          iconType={'backend'}
          domainName="Backend"
          stackData={`✓ Java/Kotlin\n✓ Gradle/Kotlin Gradle DSL\n✓ SpringBoot/ktor\n✓ Mybatis/Exposed`}
        />
        <TechnologicalDomain
          iconType={'infrastructure'}
          domainName="Infrastructure"
          stackData={`coming soon...`}
        />
      </div>
    </section>
  )
}

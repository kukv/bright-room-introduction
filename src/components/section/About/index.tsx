import { ProfileImage } from '@/components/atoms/ProfileImage'

interface AboutProps {}

export const About = ({ ...props }: AboutProps) => {
  return (
    <section
      id="about"
      className="bg-neutral-600 px-20 py-20 lg:px-40 lg:py-40"
    >
      <div className="mx-4 flex flex-row justify-center lg:items-center lg:justify-normal">
        <div className="hidden lg:mr-16 lg:flex lg:w-1/3">
          <ProfileImage />
        </div>
        <div className="lg:flex lg:flex-col lg:justify-center">
          <h1 className="pb-4 text-3xl font-bold text-white">About Me</h1>
          <p className="whitespace-pre-wrap break-words text-neutral-200">
            {`
Hello, thank you for visiting my portfolio. My name is koki nonaka. I am mainly in charge of backend development. However, my interests do not stop there. I also have a deep interest in front-end and infrastructure, and am currently actively learning those areas.

My goal is to become a full-stack engineer. That means understanding the entire system and having the ability to solve problems at all levels. I am always eager to learn about new technologies and that inquisitiveness drives me.

I also have a great interest in designing for conservatism. It is the idea of thinking about a system in the long term and facilitating future changes. This is a reflection of my emphasis on sustainability and efficiency in engineering.

If you have a good opportunity that fits my skills and experience, please do not hesitate to contact me.
          `}
          </p>
        </div>
      </div>
    </section>
  )
}

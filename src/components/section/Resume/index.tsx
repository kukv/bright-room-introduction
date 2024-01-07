import { CareerTimeline } from '@/components/organisms/CareerTimeline'

const resumeData = {
  careers: [
    {
      year: 2024,
      items: [
        {
          month: 'Mar',
          day: 1,
          title: 'Joined ??? Inc.',
          description: '内容',
        },
      ],
    },
    {
      year: 2022,
      items: [
        {
          month: 'May',
          day: 2,
          title: 'Joined ??? Inc.',
          description: '内容',
        },
      ],
    },
    {
      year: 2020,
      items: [
        {
          month: 'Apr',
          day: 1,
          title: 'Joined ??? Inc.',
          description: '内容',
        },
        {
          month: 'Mar',
          day: 19,
          title: 'Graduated from Chiba College of Information and Accounting',
          description: '内容',
        },
      ],
    },
  ],
}

export const Resume = () => {
  return (
    <section id="resume" className="px-20 py-20 lg:px-40 lg:py-20">
      <div className="mx-4 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold">Resume</h1>
        <CareerTimeline careers={resumeData.careers} />
      </div>
    </section>
  )
}

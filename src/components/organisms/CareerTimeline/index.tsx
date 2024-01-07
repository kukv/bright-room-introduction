import styles from './index.module.scss'

interface TimelineItemProps {
  month: string
  day: number
  title: string
  description: string
}

const TimelineItem = ({
  month,
  day,
  title,
  description,
}: TimelineItemProps) => {
  return (
    <div className={styles.timeline_item}>
      <div className={styles.time}>
        <span className={styles.time_day}>{day}</span>
        <span className={styles.time_month}>{month}</span>
      </div>
      <div className={styles.description}>
        <p className={styles.title}>{title}</p>
        {description}
      </div>
    </div>
  )
}

interface TimelineGroupProps {
  year: number
  items: Array<TimelineItemProps>
}

const TimelineGroup = ({ year, items }: TimelineGroupProps) => {
  return (
    <div className={styles.timeline_group}>
      <span className={styles.time_year}>{year}</span>
      {items.map((item: TimelineItemProps) => {
        return <TimelineItem key={`${item.month}-${item.day}`} {...item} />
      })}
    </div>
  )
}

interface CareerTimelineProps {
  careers: Array<TimelineGroupProps>
}

export const CareerTimeline = ({ careers }: CareerTimelineProps) => {
  return (
    <div className={styles.timeline_layout}>
      {careers.map((career: TimelineGroupProps) => (
        <TimelineGroup key={career.year} {...career} />
      ))}
    </div>
  )
}

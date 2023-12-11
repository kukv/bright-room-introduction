export type Styles = {
  cp_timeline03: string
  desc: string
  flag: string
  time: string
  time_day: string
  time_month: string
  time_year: string
  timeline_group: string
  timeline_item: string
}

export type ClassNames = keyof Styles

declare const styles: Styles

export default styles

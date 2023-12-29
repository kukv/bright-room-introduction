export type Styles = {
  text_color: string
  text_margin: string
  underline_hover_animation: string
}

export type ClassNames = keyof Styles

declare const styles: Styles

export default styles
